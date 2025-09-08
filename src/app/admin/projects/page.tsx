import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  Globe, 
  DollarSign,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  Pause,
  Play,
  FileText,
  Mail,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gestion Projets Web - Admin | Bzz.ma',
  description: 'Interface d\'administration pour la gestion des projets web - Bzz.ma',
};

// Sample web projects data
const webProjects = [
  {
    id: "1",
    clientName: "MarocShop SARL",
    clientEmail: "contact@marocshop.ma",
    clientPhone: "+212 6 12 34 56 78",
    company: "MarocShop SARL",
    projectType: "ECOMMERCE",
    budget: "50000-100000 DH",
    description: "Plateforme e-commerce complète avec gestion des commandes, paiements Stripe et dashboard admin.",
    features: JSON.stringify([
      "Catalogue produits avancé",
      "Panier et checkout sécurisé", 
      "Paiements Stripe intégrés",
      "Dashboard admin complet",
      "Gestion des commandes",
      "Analytics et rapports"
    ]),
    timeline: "3 mois",
    status: "IN_PROGRESS",
    price: 75000,
    startDate: "2024-01-15",
    endDate: "2024-04-15",
    createdAt: "2024-01-10"
  },
  {
    id: "2",
    clientName: "Dr. Hassan Alami",
    clientEmail: "dr.alami@cliniqueatlas.ma",
    clientPhone: "+212 5 22 33 44 55",
    company: "Clinique Atlas",
    projectType: "WEBSITE",
    budget: "20000-30000 DH",
    description: "Site web médical moderne avec système de rendez-vous en ligne et présentation des services.",
    features: JSON.stringify([
      "Design médical professionnel",
      "Système de rendez-vous",
      "Présentation équipe médicale",
      "Blog santé et conseils",
      "Optimisation SEO local",
      "Responsive design"
    ]),
    timeline: "6 semaines",
    status: "COMPLETED",
    price: 25000,
    startDate: "2023-11-01",
    endDate: "2023-12-15",
    createdAt: "2023-10-25"
  },
  {
    id: "3",
    clientName: "TechStart Inc",
    clientEmail: "ceo@techstart.ma",
    clientPhone: "+212 6 98 76 54 32",
    company: "TechStart Inc",
    projectType: "WEB_APP",
    budget: "100000+ DH",
    description: "Application web de gestion interne avec analytics en temps réel et gestion d'équipe.",
    features: JSON.stringify([
      "Dashboard analytics avancé",
      "Gestion des équipes",
      "Suivi projets temps réel",
      "Notifications push",
      "API REST complète",
      "Interface admin"
    ]),
    timeline: "4 mois",
    status: "TESTING",
    price: 120000,
    startDate: "2024-02-01",
    endDate: "2024-06-01",
    createdAt: "2024-01-20"
  },
  {
    id: "4",
    clientName: "Restaurant Riad",
    clientEmail: "info@restaurantriad.ma",
    clientPhone: "+212 5 24 45 67 89",
    company: "Restaurant Riad",
    projectType: "WEBSITE",
    budget: "15000-25000 DH",
    description: "Site web gastronomique avec menu interactif et système de réservations.",
    features: JSON.stringify([
      "Galerie photos immersive",
      "Menu interactif PDF",
      "Système de réservations",
      "Intégration Google Maps",
      "Avis clients intégrés",
      "Multilangue FR/AR"
    ]),
    timeline: "4 semaines",
    status: "PROPOSAL",
    price: 18000,
    startDate: null,
    endDate: null,
    createdAt: "2024-02-20"
  },
  {
    id: "5",
    clientName: "Formation Pro",
    clientEmail: "admin@formationpro.ma",
    clientPhone: "+212 6 11 22 33 44",
    company: "Formation Pro",
    projectType: "WEB_APP",
    budget: "75000-100000 DH",
    description: "Plateforme e-learning avec vidéos, quiz interactifs et certification automatique.",
    features: JSON.stringify([
      "Streaming vidéo sécurisé",
      "Quiz et évaluations",
      "Certificats automatiques",
      "Suivi progression élèves",
      "Forums et discussions",
      "Paiements formations"
    ]),
    timeline: "5 mois",
    status: "ON_HOLD",
    price: 85000,
    startDate: "2024-01-01",
    endDate: "2024-06-01",
    createdAt: "2023-12-15"
  }
];

const stats = [
  {
    title: "Projets Actifs",
    value: "12",
    change: "+3",
    changeType: "positive" as const,
    icon: Globe
  },
  {
    title: "En Cours",
    value: "5",
    change: "+1",
    changeType: "positive" as const,
    icon: Play
  },
  {
    title: "Chiffre d'Affaires",
    value: "890K DH",
    change: "+12%",
    changeType: "positive" as const,
    icon: DollarSign
  },
  {
    title: "Taux Satisfaction",
    value: "98%",
    change: "+2%",
    changeType: "positive" as const,
    icon: CheckCircle
  }
];

const projectTypeLabels = {
  WEBSITE: { label: "Site Web", color: "bg-blue-100 text-blue-800", icon: Globe },
  ECOMMERCE: { label: "E-commerce", color: "bg-green-100 text-green-800", icon: Globe },
  WEB_APP: { label: "App Web", color: "bg-purple-100 text-purple-800", icon: Globe },
  SEO_MARKETING: { label: "SEO/Marketing", color: "bg-yellow-100 text-yellow-800", icon: Globe },
  MAINTENANCE: { label: "Maintenance", color: "bg-gray-100 text-gray-800", icon: Globe }
};

const statusLabels = {
  PROPOSAL: { label: "Devis", color: "bg-yellow-100 text-yellow-800", icon: FileText },
  APPROVED: { label: "Approuvé", color: "bg-blue-100 text-blue-800", icon: CheckCircle },
  IN_PROGRESS: { label: "En Cours", color: "bg-green-100 text-green-800", icon: Play },
  TESTING: { label: "Tests", color: "bg-purple-100 text-purple-800", icon: Eye },
  COMPLETED: { label: "Terminé", color: "bg-green-100 text-green-800", icon: CheckCircle },
  ON_HOLD: { label: "En Pause", color: "bg-orange-100 text-orange-800", icon: Pause },
  CANCELLED: { label: "Annulé", color: "bg-red-100 text-red-800", icon: AlertCircle }
};

export default function ProjectAdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Projets Web</h1>
            <p className="text-slate-600 mt-2">Gérez vos projets de création web et suivez leur progression</p>
          </div>
          <Link 
            href="/admin/projects/add" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Nouveau Projet
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
                placeholder="Rechercher par client, projet..."
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:w-auto">
            <select className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Tous Types</option>
              <option value="WEBSITE">Site Web</option>
              <option value="ECOMMERCE">E-commerce</option>
              <option value="WEB_APP">App Web</option>
              <option value="SEO_MARKETING">SEO/Marketing</option>
              <option value="MAINTENANCE">Maintenance</option>
            </select>
            
            <select className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Tous Statuts</option>
              <option value="PROPOSAL">Devis</option>
              <option value="APPROVED">Approuvé</option>
              <option value="IN_PROGRESS">En Cours</option>
              <option value="TESTING">Tests</option>
              <option value="COMPLETED">Terminé</option>
              <option value="ON_HOLD">En Pause</option>
            </select>
            
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center">
              <Filter className="h-5 w-5 mr-2" />
              Filtres
            </button>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {webProjects.map((project) => {
          const projectType = projectTypeLabels[project.projectType as keyof typeof projectTypeLabels];
          const statusInfo = statusLabels[project.status as keyof typeof statusLabels];
          const StatusIcon = statusInfo.icon;
          const features = JSON.parse(project.features);
          
          return (
            <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{project.company}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${projectType.color}`}>
                      {projectType.label}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${statusInfo.color}`}>
                      <StatusIcon className="h-4 w-4 mr-1" />
                      {statusInfo.label}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.clientName}
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {project.clientEmail}
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      {project.clientPhone}
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {features.slice(0, 4).map((feature: string, index: number) => (
                      <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                    {features.length > 4 && (
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                        +{features.length - 4} autres
                      </span>
                    )}
                  </div>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Budget:</span>
                      <div className="font-medium text-slate-900">{project.budget}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Prix:</span>
                      <div className="font-medium text-green-600">{project.price?.toLocaleString()} DH</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Durée:</span>
                      <div className="font-medium text-slate-900">{project.timeline}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Créé:</span>
                      <div className="font-medium text-slate-900">
                        {new Date(project.createdAt).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline */}
                  {project.startDate && project.endDate && (
                    <div className="mt-4 flex items-center gap-4 text-sm">
                      <div className="flex items-center text-slate-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        Début: {new Date(project.startDate).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Clock className="h-4 w-4 mr-1" />
                        Fin prévue: {new Date(project.endDate).toLocaleDateString('fr-FR')}
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
                  <button className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl font-medium transition-colors flex items-center justify-center">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add New Project Prompt */}
      <div className="mt-12 text-center">
        <div className="bg-slate-50 rounded-2xl p-8 border-2 border-dashed border-slate-300">
          <Globe className="h-12 w-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Nouveau Projet Web</h3>
          <p className="text-slate-600 mb-4">Ajoutez un nouveau projet de création web à votre portfolio</p>
          <Link 
            href="/admin/projects/add"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Créer un Projet
          </Link>
        </div>
      </div>
    </div>
  );
}
