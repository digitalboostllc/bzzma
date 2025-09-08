import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  Building, 
  DollarSign,
  TrendingUp,
  Users,
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Target,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gestion Leads Entreprise - Admin | Bzz.ma',
  description: 'Interface d\'administration pour la gestion des leads et contrats entreprise - Bzz.ma',
};

// Sample business leads data
const businessLeads = [
  {
    id: "1",
    company: "TechCorp Solutions",
    contactName: "Ahmed Benali",
    email: "ahmed.benali@techcorp.ma",
    phone: "+212 5 22 44 55 66",
    industry: "Technologie",
    employees: "50-100",
    services: JSON.stringify(["INFRASTRUCTURE", "CLOUD_MIGRATION", "CYBERSECURITY"]),
    budget: "200000-500000 DH",
    timeline: "6 mois",
    description: "Migration complète de l'infrastructure vers le cloud avec mise en place de solutions de cybersécurité avancées.",
    status: "PROPOSAL_SENT",
    priority: "HIGH",
    assignedTo: "admin@bzz.ma",
    notes: "Client très intéressé, deuxième rendez-vous prévu la semaine prochaine.",
    createdAt: "2024-02-15",
    updatedAt: "2024-02-20"
  },
  {
    id: "2",
    company: "Banque Al Maghrib",
    contactName: "Fatima Zahra",
    email: "f.zahra@bam.ma",
    phone: "+212 5 37 56 78 90",
    industry: "Finance",
    employees: "200+",
    services: JSON.stringify(["CYBERSECURITY", "BACKUP_RECOVERY", "IT_SUPPORT"]),
    budget: "500000+ DH",
    timeline: "12 mois",
    description: "Audit complet de sécurité informatique et mise en place d'un plan de reprise d'activité.",
    status: "NEGOTIATION",
    priority: "URGENT",
    assignedTo: "admin@bzz.ma",
    notes: "Projet stratégique, besoin d'une équipe dédiée. Présentation technique prévue.",
    createdAt: "2024-02-01",
    updatedAt: "2024-02-18"
  },
  {
    id: "3",
    company: "Retail Plus",
    contactName: "Omar Idrissi",
    email: "o.idrissi@retailplus.ma",
    phone: "+212 6 12 34 56 78",
    industry: "Commerce",
    employees: "20-50",
    services: JSON.stringify(["INFRASTRUCTURE", "IT_SUPPORT", "CONSULTING"]),
    budget: "50000-100000 DH",
    timeline: "3 mois",
    description: "Modernisation du système informatique et formation des équipes aux nouveaux outils.",
    status: "WON",
    priority: "NORMAL",
    assignedTo: "admin@bzz.ma",
    notes: "Contrat signé, début des travaux la semaine prochaine.",
    createdAt: "2024-01-20",
    updatedAt: "2024-02-10"
  },
  {
    id: "4",
    company: "Clinique Internationale",
    contactName: "Dr. Amina Benkirane",
    email: "direction@cliniqueint.ma",
    phone: "+212 5 22 77 88 99",
    industry: "Santé",
    employees: "100-200",
    services: JSON.stringify(["INFRASTRUCTURE", "CYBERSECURITY", "BACKUP_RECOVERY"]),
    budget: "300000-500000 DH",
    timeline: "8 mois",
    description: "Mise en conformité RGPD et sécurisation des données patients avec système de sauvegarde.",
    status: "NEW",
    priority: "HIGH",
    assignedTo: null,
    notes: "Premier contact par email, à rappeler pour fixer un rendez-vous.",
    createdAt: "2024-02-22",
    updatedAt: "2024-02-22"
  },
  {
    id: "5",
    company: "École Supérieure",
    contactName: "Mohamed Tazi",
    email: "m.tazi@esup.ac.ma",
    phone: "+212 5 23 45 67 89",
    industry: "Éducation",
    employees: "50-100",
    services: JSON.stringify(["INFRASTRUCTURE", "IT_SUPPORT", "CONSULTING"]),
    budget: "100000-200000 DH",
    timeline: "4 mois",
    description: "Rénovation complète du réseau informatique et formation du personnel technique.",
    status: "CONTACTED",
    priority: "NORMAL",
    assignedTo: "admin@bzz.ma",
    notes: "Rendez-vous prévu jeudi pour présentation détaillée.",
    createdAt: "2024-02-10",
    updatedAt: "2024-02-16"
  },
  {
    id: "6",
    company: "Transport Express",
    contactName: "Youssef Lamrani",
    email: "y.lamrani@transport-exp.ma",
    phone: "+212 6 98 76 54 32",
    industry: "Transport",
    employees: "20-50",
    services: JSON.stringify(["CONSULTING", "IT_SUPPORT"]),
    budget: "30000-50000 DH",
    timeline: "2 mois",
    description: "Consultation pour digitalisation des processus de gestion de flotte.",
    status: "LOST",
    priority: "LOW",
    assignedTo: "admin@bzz.ma",
    notes: "Budget insuffisant, client a choisi une solution moins chère.",
    createdAt: "2024-01-15",
    updatedAt: "2024-02-05"
  }
];

const stats = [
  {
    title: "Leads Actifs",
    value: "24",
    change: "+8",
    changeType: "positive" as const,
    icon: Target
  },
  {
    title: "Taux Conversion",
    value: "42%",
    change: "+5%",
    changeType: "positive" as const,
    icon: TrendingUp
  },
  {
    title: "Pipeline",
    value: "2.1M DH",
    change: "+15%",
    changeType: "positive" as const,
    icon: DollarSign
  },
  {
    title: "Contrats Signés",
    value: "8",
    change: "+3",
    changeType: "positive" as const,
    icon: CheckCircle
  }
];

const statusLabels = {
  NEW: { label: "Nouveau", color: "bg-blue-100 text-blue-800", icon: AlertCircle },
  CONTACTED: { label: "Contacté", color: "bg-yellow-100 text-yellow-800", icon: Phone },
  PROPOSAL_SENT: { label: "Devis Envoyé", color: "bg-purple-100 text-purple-800", icon: Mail },
  NEGOTIATION: { label: "Négociation", color: "bg-orange-100 text-orange-800", icon: Clock },
  WON: { label: "Gagné", color: "bg-green-100 text-green-800", icon: CheckCircle },
  LOST: { label: "Perdu", color: "bg-red-100 text-red-800", icon: AlertCircle }
};

const priorityLabels = {
  LOW: { label: "Faible", color: "bg-gray-100 text-gray-800" },
  NORMAL: { label: "Normal", color: "bg-blue-100 text-blue-800" },
  HIGH: { label: "Élevé", color: "bg-yellow-100 text-yellow-800" },
  URGENT: { label: "Urgent", color: "bg-red-100 text-red-800" }
};

const serviceLabels = {
  INFRASTRUCTURE: "Infrastructure",
  CLOUD_MIGRATION: "Migration Cloud",
  CYBERSECURITY: "Cybersécurité",
  IT_SUPPORT: "Support IT",
  CONSULTING: "Consulting",
  BACKUP_RECOVERY: "Sauvegarde"
};

export default function LeadsAdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Leads Entreprise</h1>
            <p className="text-slate-600 mt-2">Gérez vos prospects et contrats entreprise</p>
          </div>
          <Link 
            href="/admin/leads/add" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Nouveau Lead
          </Link>
        </div>
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

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher par entreprise, contact..."
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:w-auto">
            <select className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Tous Statuts</option>
              <option value="NEW">Nouveau</option>
              <option value="CONTACTED">Contacté</option>
              <option value="PROPOSAL_SENT">Devis Envoyé</option>
              <option value="NEGOTIATION">Négociation</option>
              <option value="WON">Gagné</option>
              <option value="LOST">Perdu</option>
            </select>
            
            <select className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Toutes Priorités</option>
              <option value="LOW">Faible</option>
              <option value="NORMAL">Normal</option>
              <option value="HIGH">Élevé</option>
              <option value="URGENT">Urgent</option>
            </select>
            
            <select className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Tous Secteurs</option>
              <option value="Technologie">Technologie</option>
              <option value="Finance">Finance</option>
              <option value="Santé">Santé</option>
              <option value="Éducation">Éducation</option>
              <option value="Commerce">Commerce</option>
            </select>
            
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center">
              <Filter className="h-5 w-5 mr-2" />
              Filtres
            </button>
          </div>
        </div>
      </div>

      {/* Leads List */}
      <div className="space-y-6">
        {businessLeads.map((lead) => {
          const statusInfo = statusLabels[lead.status as keyof typeof statusLabels];
          const StatusIcon = statusInfo.icon;
          const priorityInfo = priorityLabels[lead.priority as keyof typeof priorityLabels];
          const services = JSON.parse(lead.services);
          
          return (
            <div key={lead.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{lead.company}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${statusInfo.color}`}>
                      <StatusIcon className="h-4 w-4 mr-1" />
                      {statusInfo.label}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${priorityInfo.color}`}>
                      {priorityInfo.label}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-slate-600">
                      <Users className="h-4 w-4 mr-2" />
                      <div>
                        <div className="font-medium text-slate-900">{lead.contactName}</div>
                        <div>{lead.industry} • {lead.employees} employés</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-slate-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <div>
                        <div className="font-medium text-slate-900">{lead.email}</div>
                        <div>{lead.phone}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-slate-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <div>
                        <div className="font-medium text-slate-900">{lead.budget}</div>
                        <div>Durée: {lead.timeline}</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4">{lead.description}</p>
                  
                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {services.map((service: string, index: number) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {serviceLabels[service as keyof typeof serviceLabels]}
                      </span>
                    ))}
                  </div>
                  
                  {/* Metadata */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Créé le:</span>
                      <div className="font-medium text-slate-900">
                        {new Date(lead.createdAt).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-500">Mis à jour:</span>
                      <div className="font-medium text-slate-900">
                        {new Date(lead.updatedAt).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    {lead.assignedTo && (
                      <div>
                        <span className="text-slate-500">Assigné à:</span>
                        <div className="font-medium text-slate-900">{lead.assignedTo}</div>
                      </div>
                    )}
                  </div>
                  
                  {/* Notes */}
                  {lead.notes && (
                    <div className="mt-4 p-3 bg-slate-50 rounded-xl">
                      <div className="text-sm text-slate-600">
                        <strong>Notes:</strong> {lead.notes}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col lg:flex-row gap-2 lg:ml-6 mt-4 lg:mt-0">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Détails
                  </button>
                  <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl font-medium transition-colors flex items-center justify-center">
                    <Edit className="h-4 w-4 mr-2" />
                    Modifier
                  </button>
                  <button className="bg-green-50 hover:bg-green-100 text-green-600 px-4 py-2 rounded-xl font-medium transition-colors flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Contacter
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add New Lead Prompt */}
      <div className="mt-12 text-center">
        <div className="bg-slate-50 rounded-2xl p-8 border-2 border-dashed border-slate-300">
          <Building className="h-12 w-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Nouveau Lead Entreprise</h3>
          <p className="text-slate-600 mb-4">Ajoutez un nouveau prospect ou contact entreprise</p>
          <Link 
            href="/admin/leads/add"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Ajouter Lead
          </Link>
        </div>
      </div>
    </div>
  );
}
