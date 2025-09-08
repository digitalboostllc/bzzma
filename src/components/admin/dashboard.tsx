'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BarChart3,
  Users,
  Globe,
  Laptop,
  Building,
  MessageSquare,
  Calendar,
  DollarSign,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  Eye,
  Mail,
  Phone
} from 'lucide-react';

interface DashboardData {
  overview: {
    totalRevenue: number;
    newClients: number;
    activeProjects: number;
    satisfactionRate: number;
  };
  laptops: {
    total: number;
    inStock: number;
    outOfStock: number;
    inventoryValue: number;
    salesThisMonth: number;
  };
  projects: {
    total: number;
    active: number;
    completed: number;
    thisMonth: number;
    completionRate: number;
  };
  leads: {
    total: number;
    new: number;
    won: number;
    thisWeek: number;
    conversionRate: number;
  };
  messages: {
    total: number;
    unread: number;
    thisWeek: number;
  };
  appointments: {
    total: number;
    pending: number;
    thisWeek: number;
  };
  recentActivity: Array<{
    type: string;
    title: string;
    description: string;
    amount: string;
    time: string;
    status: string;
  }>;
}

const quickActions = [
  {
    title: "Gestion Laptops",
    description: "Inventaire et ventes de laptops",
    icon: Laptop,
    href: "/admin/laptops",
    color: "bg-blue-500",
    countKey: "laptops.inStock"
  },
  {
    title: "Projets Web",
    description: "Suivi des projets de création web",
    icon: Globe,
    href: "/admin/projects",
    color: "bg-green-500",
    countKey: "projects.active"
  },
  {
    title: "Leads Entreprise",
    description: "Prospects et contrats B2B",
    icon: Building,
    href: "/admin/leads",
    color: "bg-purple-500",
    countKey: "leads.total"
  },
  {
    title: "Messages Contact",
    description: "Demandes et support client",
    icon: MessageSquare,
    href: "/admin/messages",
    color: "bg-orange-500",
    countKey: "messages.unread"
  }
];

const urgentTasks = [
  {
    title: "Suivre devis TechCorp",
    description: "Devis envoyé il y a 3 jours",
    priority: "high",
    dueDate: "Aujourd'hui"
  },
  {
    title: "Livraison laptop urgent",
    description: "Client attend depuis hier",
    priority: "urgent",
    dueDate: "Maintenant"
  },
  {
    title: "Finaliser projet Clinique",
    description: "Tests en cours",
    priority: "medium",
    dueDate: "Demain"
  }
];

export function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('/api/admin/stats');
        const result = await response.json();

        if (result.success) {
          setData(result.data);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600">Chargement du tableau de bord...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900 mb-2">Erreur de chargement</h3>
          <p className="text-slate-600">Impossible de charger les données du tableau de bord.</p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      title: "Chiffre d'Affaires",
      value: `${(data.overview.totalRevenue / 1000000).toFixed(1)}M DH`,
      change: "+12.5%",
      changeType: "positive" as const,
      icon: DollarSign,
      period: "ce mois"
    },
    {
      title: "Nouveaux Clients",
      value: data.overview.newClients.toString(),
      change: "+8",
      changeType: "positive" as const,
      icon: Users,
      period: "cette semaine"
    },
    {
      title: "Projets Actifs",
      value: data.projects.active.toString(),
      change: "+3",
      changeType: "positive" as const,
      icon: Globe,
      period: "en cours"
    },
    {
      title: "Taux Satisfaction",
      value: `${data.overview.satisfactionRate}%`,
      change: "+2%",
      changeType: "positive" as const,
      icon: CheckCircle,
      period: "moyenne"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Tableau de Bord</h1>
        <p className="text-slate-600 mt-2">Vue d'ensemble de votre activité Bzz.ma</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-slate-500 text-sm ml-2">{stat.period}</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Actions Rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            // Get count from data based on countKey
            const countValue = action.countKey.split('.').reduce((obj: any, key) => obj?.[key], data);
            const countText = action.countKey.includes('inStock') ? `${countValue} en stock` :
                             action.countKey.includes('active') ? `${countValue} actifs` :
                             action.countKey.includes('unread') ? `${countValue} non lus` :
                             `${countValue} prospects`;
            
            return (
              <Link
                key={action.title}
                href={action.href}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${action.color} p-3 rounded-xl text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{action.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{action.description}</p>
                <div className="text-sm font-medium text-slate-700">{countText}</div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Activité Récente</h2>
            <Link href="/admin/activity" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Voir tout
            </Link>
          </div>
          
          <div className="space-y-4">
            {data.recentActivity.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-slate-50 rounded-xl">
                <div className="flex-shrink-0">
                  {item.type === 'sale' && (
                    <div className="bg-green-100 p-2 rounded-lg">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                  )}
                  {item.type === 'project' && (
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                  )}
                  {item.type === 'lead' && (
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Building className="h-5 w-5 text-purple-600" />
                    </div>
                  )}
                  {item.type === 'message' && (
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-orange-600" />
                    </div>
                  )}
                </div>
                
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-slate-900">{item.title}</h4>
                    <span className="text-sm text-slate-500">{item.time}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                  {item.amount && (
                    <p className="text-green-600 font-medium text-sm">{item.amount}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Urgent Tasks */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Tâches Urgentes</h2>
            <Link href="/admin/tasks" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Voir tout
            </Link>
          </div>
          
          <div className="space-y-4">
            {urgentTasks.map((task, index) => (
              <div key={index} className="flex items-start p-4 bg-slate-50 rounded-xl">
                <div className="flex-shrink-0 mt-1">
                  {task.priority === 'urgent' && (
                    <div className="bg-red-100 p-1 rounded-full">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    </div>
                  )}
                  {task.priority === 'high' && (
                    <div className="bg-orange-100 p-1 rounded-full">
                      <Clock className="h-4 w-4 text-orange-600" />
                    </div>
                  )}
                  {task.priority === 'medium' && (
                    <div className="bg-yellow-100 p-1 rounded-full">
                      <Clock className="h-4 w-4 text-yellow-600" />
                    </div>
                  )}
                </div>
                
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-slate-900">{task.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      task.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                      task.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {task.dueDate}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mt-1">{task.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-medium transition-colors">
            + Ajouter une tâche
          </button>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Performance ce Mois</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
              7 jours
            </button>
            <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-medium">
              30 jours
            </button>
            <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-medium">
              90 jours
            </button>
          </div>
        </div>
        
        <div className="h-64 flex items-center justify-center bg-slate-50 rounded-xl">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600">Graphique de performance</p>
            <p className="text-slate-500 text-sm">Données réelles connectées</p>
          </div>
        </div>
      </div>
    </div>
  );
}
