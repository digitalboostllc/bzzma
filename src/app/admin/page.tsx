'use client';

import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Phone,
  Mail,
  MapPin,
  FileText,
  Wrench,
  TrendingUp,
  DollarSign,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  Eye,
  Plus,
  RefreshCw,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut
} from 'lucide-react';

interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  company?: string;
  deviceType: string;
  deviceBrand: string;
  problemDescription: string;
  preferredDate: string;
  preferredTime: string;
  status: string;
  urgencyLevel: string;
  createdAt: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  urgency: string;
  createdAt: string;
}

interface Stats {
  totalAppointments: number;
  pendingAppointments: number;
  completedToday: number;
  totalRevenue: number;
  totalMessages: number;
  newMessagesToday: number;
}

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalAppointments: 0,
    pendingAppointments: 0,
    completedToday: 0,
    totalRevenue: 0,
    totalMessages: 0,
    newMessagesToday: 0
  });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAppointments();
    fetchContactMessages();
    fetchStats();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('/api/appointments');
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchContactMessages = async () => {
    try {
      const response = await fetch('/api/contact');
      if (response.ok) {
        const data = await response.json();
        setContactMessages(data);
      }
    } catch (error) {
      console.error('Error fetching contact messages:', error);
    }
  };

  const fetchStats = async () => {
    // In real app, this would fetch from analytics API
    setStats({
      totalAppointments: appointments.length,
      pendingAppointments: appointments.filter(a => a.status === 'PENDING').length,
      completedToday: appointments.filter(a => {
        const today = new Date().toDateString();
        return new Date(a.createdAt).toDateString() === today && a.status === 'COMPLETED';
      }).length,
      totalRevenue: 45600, // Would be calculated from completed appointments
      totalMessages: contactMessages.length,
      newMessagesToday: contactMessages.filter(m => {
        const today = new Date().toDateString();
        return new Date(m.createdAt).toDateString() === today;
      }).length
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING': return 'bg-yellow-100 text-yellow-800';
      case 'CONFIRMED': return 'bg-blue-100 text-blue-800';
      case 'IN_PROGRESS': return 'bg-purple-100 text-purple-800';
      case 'COMPLETED': return 'bg-green-100 text-green-800';
      case 'CANCELLED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'LOW': return 'bg-green-100 text-green-800';
      case 'NORMAL': return 'bg-blue-100 text-blue-800';
      case 'HIGH': return 'bg-orange-100 text-orange-800';
      case 'URGENT': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    if (filter === 'all') return true;
    return appointment.status === filter.toUpperCase();
  });

  const statCards = [
    {
      title: "Total Rendez-vous",
      value: stats.totalAppointments,
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      change: "+12%",
      changeColor: "text-green-600"
    },
    {
      title: "En Attente",
      value: stats.pendingAppointments,
      icon: Clock,
      color: "from-orange-500 to-orange-600",
      change: "-5%",
      changeColor: "text-red-600"
    },
    {
      title: "Terminés Aujourd'hui",
      value: stats.completedToday,
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
      change: "+18%",
      changeColor: "text-green-600"
    },
    {
      title: "Messages",
      value: stats.totalMessages,
      icon: MessageSquare,
      color: "from-purple-500 to-purple-600",
      change: `+${stats.newMessagesToday} aujourd'hui`,
      changeColor: "text-blue-600"
    },
    {
      title: "Chiffre d'Affaires",
      value: `${stats.totalRevenue.toLocaleString()} DH`,
      icon: DollarSign,
      color: "from-red-500 to-red-600",
      change: "+23%",
      changeColor: "text-green-600"
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: BarChart3 },
    { id: 'appointments', name: 'Rendez-vous', icon: Calendar },
    { id: 'messages', name: 'Messages', icon: MessageSquare },
    { id: 'analytics', name: 'Analytique', icon: TrendingUp }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard Admin</h1>
          <p className="text-slate-600 mt-2">Gestion des rendez-vous et réparations</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={fetchAppointments}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Actualiser</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {statCards.map((card, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-200">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="h-6 w-6 text-white" />
                </div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full bg-slate-100 ${card.changeColor}`}>
                  {card.change}
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">{card.title}</p>
                <p className="text-2xl font-bold text-slate-900">{card.value}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white rounded-2xl shadow-lg mb-8 p-2">
        <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Actions Rapides</h2>
                <button className="text-slate-600 hover:text-slate-900">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="group flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Calendar className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Nouveau RDV</span>
                </button>
                <button className="group flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CheckCircle className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Marquer Terminé</span>
                </button>
                <button className="group flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <FileText className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Générer Devis</span>
                </button>
                <button className="group flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <TrendingUp className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Rapports</span>
                </button>
              </div>
            </div>

          {/* Recent Activity */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Derniers Rendez-vous</h3>
                <div className="space-y-3">
                  {appointments.slice(0, 5).map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <div>
                        <p className="font-medium text-slate-900">{appointment.clientName}</p>
                        <p className="text-sm text-slate-600">{appointment.deviceType}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </div>
                  ))}
                  {appointments.length === 0 && (
                    <p className="text-slate-500 text-center py-4">Aucun rendez-vous</p>
                  )}
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Messages Récents</h3>
                <div className="space-y-3">
                  {contactMessages.slice(0, 5).map((message) => (
                    <div key={message.id} className="p-3 bg-slate-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-slate-900">{message.name}</p>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getUrgencyColor(message.urgency)}`}>
                          {message.urgency}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 truncate">{message.subject}</p>
                    </div>
                  ))}
                  {contactMessages.length === 0 && (
                    <p className="text-slate-500 text-center py-4">Aucun message</p>
                  )}
                </div>
            </div>
          </div>
        </div>
      )}

      {/* Appointments Tab */}
      {activeTab === 'appointments' && (
        <div className="bg-white rounded-2xl shadow-lg">
            <div className="p-6 border-b border-slate-200">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Gestion des Rendez-vous</h2>
                  <p className="text-slate-600">Gérez tous les rendez-vous et réservations</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="h-5 w-5 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  {/* Filter Buttons */}
                  <div className="flex space-x-2">
                    {['all', 'pending', 'confirmed', 'in_progress', 'completed'].map((status) => (
                      <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          filter === status
                            ? 'bg-slate-900 text-white shadow-lg'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {status === 'all' ? 'Tous' : 
                         status === 'pending' ? 'En attente' :
                         status === 'confirmed' ? 'Confirmé' :
                         status === 'in_progress' ? 'En cours' :
                         'Terminé'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              {loading ? (
                <div className="p-12 text-center">
                  <div className="w-8 h-8 border-4 border-slate-300 border-t-slate-900 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-slate-600">Chargement des rendez-vous...</p>
                </div>
              ) : filteredAppointments.length === 0 ? (
                <div className="p-12 text-center">
                  <AlertCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 text-lg">Aucun rendez-vous trouvé</p>
                  <p className="text-slate-500">Essayez de modifier vos filtres</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-200">
                  {filteredAppointments.map((appointment) => (
                    <div key={appointment.id} className="p-6 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <h3 className="font-semibold text-slate-900">{appointment.clientName}</h3>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                              {appointment.status}
                            </span>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getUrgencyColor(appointment.urgencyLevel)}`}>
                              {appointment.urgencyLevel}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600">
                            <div>
                              <p className="font-medium">Contact</p>
                              <p>{appointment.clientEmail}</p>
                              <p>{appointment.clientPhone}</p>
                            </div>
                            <div>
                              <p className="font-medium">Appareil</p>
                              <p>{appointment.deviceBrand}</p>
                              <p>{appointment.deviceType}</p>
                            </div>
                            <div>
                              <p className="font-medium">Date & Heure</p>
                              <p>{new Date(appointment.preferredDate).toLocaleDateString('fr-FR')}</p>
                              <p>{appointment.preferredTime}</p>
                            </div>
                            <div>
                              <p className="font-medium">Problème</p>
                              <p className="truncate">{appointment.problemDescription}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-xl transition-colors">
                            <Phone className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-xl transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
        </div>
      )}

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Messages de Contact</h2>
            <div className="space-y-4">
              {contactMessages.map((message) => (
                <div key={message.id} className="border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{message.name}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getUrgencyColor(message.urgency)}`}>
                          {message.urgency}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-2">{message.email} • {message.phone}</p>
                      <p className="font-medium text-slate-900 mb-1">{message.subject}</p>
                      <p className="text-slate-600 text-sm">{message.message}</p>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                      <MessageSquare className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
              {contactMessages.length === 0 && (
                <div className="text-center py-8">
                  <MessageSquare className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600">Aucun message reçu</p>
                </div>
              )}
            </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Analytique</h2>
            <div className="text-center py-12">
              <BarChart3 className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">Fonctionnalité d'analytique en développement</p>
            </div>
        </div>
      )}
    </div>
  );
}
