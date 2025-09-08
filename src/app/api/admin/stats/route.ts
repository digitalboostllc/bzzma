import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/admin/stats - Fetch dashboard statistics
export async function GET(request: NextRequest) {
  try {
    // Get current date ranges
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Parallel queries for better performance
    const [
      // Laptop stats
      totalLaptops,
      inStockLaptops,
      laptopSalesThisMonth,
      totalLaptopValue,
      
      // Project stats
      totalProjects,
      activeProjects,
      completedProjects,
      projectsThisMonth,
      
      // Leads stats
      totalLeads,
      newLeads,
      wonLeads,
      leadsThisWeek,
      
      // Contact messages
      totalMessages,
      unreadMessages,
      messagesThisWeek,
      
      // Appointments
      totalAppointments,
      pendingAppointments,
      appointmentsThisWeek
    ] = await Promise.all([
      // Laptop queries
      prisma.laptopInventory.count(),
      prisma.laptopInventory.count({ where: { inStock: true } }),
      prisma.laptopSale.count({ 
        where: { 
          createdAt: { gte: startOfMonth } 
        } 
      }),
      prisma.laptopInventory.aggregate({
        _sum: { price: true },
        where: { inStock: true }
      }),
      
      // Project queries
      prisma.webProject.count(),
      prisma.webProject.count({ 
        where: { 
          status: { in: ['IN_PROGRESS', 'TESTING'] } 
        } 
      }),
      prisma.webProject.count({ 
        where: { 
          status: 'COMPLETED' 
        } 
      }),
      prisma.webProject.count({ 
        where: { 
          createdAt: { gte: startOfMonth } 
        } 
      }),
      
      // Lead queries
      prisma.businessLead.count(),
      prisma.businessLead.count({ 
        where: { 
          status: 'NEW' 
        } 
      }),
      prisma.businessLead.count({ 
        where: { 
          status: 'WON' 
        } 
      }),
      prisma.businessLead.count({ 
        where: { 
          createdAt: { gte: startOfWeek } 
        } 
      }),
      
      // Message queries
      prisma.contactMessage.count(),
      prisma.contactMessage.count({ 
        where: { 
          status: 'UNREAD' 
        } 
      }),
      prisma.contactMessage.count({ 
        where: { 
          createdAt: { gte: startOfWeek } 
        } 
      }),
      
      // Appointment queries
      prisma.appointment.count(),
      prisma.appointment.count({ 
        where: { 
          status: { in: ['PENDING', 'CONFIRMED'] } 
        } 
      }),
      prisma.appointment.count({ 
        where: { 
          createdAt: { gte: startOfWeek } 
        } 
      })
    ]);

    // Calculate revenue from projects (assuming average project value)
    const avgProjectValue = 50000; // Default average in DH
    const estimatedProjectRevenue = completedProjects * avgProjectValue;
    
    // Calculate laptop inventory value
    const laptopInventoryValue = totalLaptopValue._sum.price || 0;
    
    // Calculate total estimated revenue
    const totalRevenue = estimatedProjectRevenue + (laptopSalesThisMonth * 15000); // Avg laptop sale 15k DH

    // Calculate conversion rates
    const leadConversionRate = totalLeads > 0 ? Math.round((wonLeads / totalLeads) * 100) : 0;
    const projectCompletionRate = totalProjects > 0 ? Math.round((completedProjects / totalProjects) * 100) : 0;

    // Recent activity (last 10 items)
    const [recentSales, recentProjects, recentLeads, recentMessages] = await Promise.all([
      prisma.laptopSale.findMany({
        take: 3,
        orderBy: { createdAt: 'desc' },
        include: {
          laptop: {
            select: { brand: true, model: true }
          }
        }
      }),
      prisma.webProject.findMany({
        take: 3,
        orderBy: { updatedAt: 'desc' },
        select: {
          id: true,
          company: true,
          projectType: true,
          status: true,
          price: true,
          updatedAt: true
        }
      }),
      prisma.businessLead.findMany({
        take: 2,
        orderBy: { updatedAt: 'desc' },
        select: {
          id: true,
          company: true,
          status: true,
          budget: true,
          updatedAt: true
        }
      }),
      prisma.contactMessage.findMany({
        take: 2,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          subject: true,
          type: true,
          status: true,
          createdAt: true
        }
      })
    ]);

    // Prepare dashboard data
    const dashboardStats = {
      overview: {
        totalRevenue: Math.round(totalRevenue),
        newClients: leadsThisWeek + appointmentsThisWeek,
        activeProjects: activeProjects,
        satisfactionRate: 98 // Could be calculated from feedback data
      },
      laptops: {
        total: totalLaptops,
        inStock: inStockLaptops,
        outOfStock: totalLaptops - inStockLaptops,
        inventoryValue: Math.round(laptopInventoryValue),
        salesThisMonth: laptopSalesThisMonth
      },
      projects: {
        total: totalProjects,
        active: activeProjects,
        completed: completedProjects,
        thisMonth: projectsThisMonth,
        completionRate: projectCompletionRate
      },
      leads: {
        total: totalLeads,
        new: newLeads,
        won: wonLeads,
        thisWeek: leadsThisWeek,
        conversionRate: leadConversionRate
      },
      messages: {
        total: totalMessages,
        unread: unreadMessages,
        thisWeek: messagesThisWeek
      },
      appointments: {
        total: totalAppointments,
        pending: pendingAppointments,
        thisWeek: appointmentsThisWeek
      },
      recentActivity: [
        ...recentSales.map(sale => ({
          type: 'sale',
          title: `Vente ${sale.laptop.brand} ${sale.laptop.model}`,
          description: `Client: ${sale.clientName}`,
          amount: `${sale.price?.toLocaleString()} DH`,
          time: getTimeAgo(sale.createdAt),
          status: 'completed'
        })),
        ...recentProjects.map(project => ({
          type: 'project',
          title: `Projet ${project.projectType.toLowerCase()}`,
          description: project.company,
          amount: project.price ? `${project.price.toLocaleString()} DH` : '',
          time: getTimeAgo(project.updatedAt),
          status: project.status.toLowerCase()
        })),
        ...recentLeads.map(lead => ({
          type: 'lead',
          title: 'Lead entreprise',
          description: lead.company,
          amount: lead.budget || '',
          time: getTimeAgo(lead.updatedAt),
          status: lead.status.toLowerCase()
        })),
        ...recentMessages.map(message => ({
          type: 'message',
          title: 'Nouveau message',
          description: message.subject,
          amount: '',
          time: getTimeAgo(message.createdAt),
          status: message.status.toLowerCase()
        }))
      ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()).slice(0, 10)
    };

    return NextResponse.json({
      success: true,
      data: dashboardStats
    });

  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch dashboard statistics' },
      { status: 500 }
    );
  }
}

// Helper function to calculate time ago
function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Il y a moins d\'une minute';
  if (diffInSeconds < 3600) return `Il y a ${Math.floor(diffInSeconds / 60)} min`;
  if (diffInSeconds < 86400) return `Il y a ${Math.floor(diffInSeconds / 3600)}h`;
  if (diffInSeconds < 604800) return `Il y a ${Math.floor(diffInSeconds / 86400)} jours`;
  
  return date.toLocaleDateString('fr-FR');
}
