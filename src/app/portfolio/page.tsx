import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Globe, 
  Eye, 
  ExternalLink, 
  Code, 
  Smartphone, 
  Zap, 
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Calendar,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio - Projets Web Réalisés | Bzz.ma',
  description: 'Découvrez nos réalisations web : sites vitrines, e-commerce, applications. Projets créatifs et performants pour nos clients au Maroc.',
  keywords: 'portfolio web, réalisations, sites web Maroc, e-commerce, applications web, projets Bzz.ma',
};

// Sample portfolio data
const portfolioProjects = [
  {
    id: 1,
    title: "MarocShop E-commerce",
    category: "E-commerce",
    description: "Plateforme e-commerce complète avec gestion des commandes, paiements en ligne et tableau de bord administrateur.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "Stripe", "MongoDB", "Admin Panel"],
    url: "#",
    liveUrl: "#",
    duration: "3 mois",
    client: "MarocShop SARL",
    results: [
      "+150% ventes en ligne",
      "500+ produits gérés",
      "Dashboard admin complet"
    ]
  },
  {
    id: 2,
    title: "Clinique Atlas",
    category: "Site Vitrine",
    description: "Site web médical avec système de rendez-vous en ligne, présentation des services et équipe médicale.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Booking System", "SEO", "Responsive"],
    url: "#",
    liveUrl: "#",
    duration: "6 semaines",
    client: "Clinique Atlas",
    results: [
      "+80% rendez-vous en ligne",
      "SEO optimisé",
      "Design responsive"
    ]
  },
  {
    id: 3,
    title: "TechStart Dashboard",
    category: "Application Web",
    description: "Application de gestion interne avec analytics, gestion d'équipe et suivi de projets en temps réel.",
    image: "/api/placeholder/600/400",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "Real-time"],
    url: "#",
    liveUrl: "#",
    duration: "4 mois",
    client: "TechStart Inc",
    results: [
      "Productivité +40%",
      "Gestion temps réel",
      "Interface intuitive"
    ]
  },
  {
    id: 4,
    title: "Restaurant Riad",
    category: "Site Vitrine",
    description: "Site web gastronomique avec menu interactif, réservations en ligne et galerie photos immersive.",
    image: "/api/placeholder/600/400",
    tags: ["WordPress", "Booking", "SEO Local", "Photos"],
    url: "#",
    liveUrl: "#",
    duration: "4 semaines",
    client: "Restaurant Riad",
    results: [
      "+200% réservations",
      "Présence Google optimisée",
      "Menu interactif"
    ]
  },
  {
    id: 5,
    title: "Formation Pro",
    category: "E-learning",
    description: "Plateforme de formation en ligne avec vidéos, quiz, certificats et suivi de progression.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "Video Streaming", "Certificates", "Progress"],
    url: "#",
    liveUrl: "#",
    duration: "5 mois",
    client: "Formation Pro",
    results: [
      "1000+ étudiants",
      "Certificats automatiques",
      "Suivi progression"
    ]
  },
  {
    id: 6,
    title: "Agence Immobilier",
    category: "Site Vitrine",
    description: "Site immobilier avec recherche avancée, visite virtuelle et gestion des annonces en temps réel.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Maps API", "Virtual Tours", "CRM"],
    url: "#",
    liveUrl: "#",
    duration: "8 semaines",
    client: "Agence Immobilier Plus",
    results: [
      "Recherche géolocalisée",
      "Visites virtuelles",
      "CRM intégré"
    ]
  }
];

const stats = [
  {
    number: "50+",
    label: "Projets Réalisés",
    icon: CheckCircle
  },
  {
    number: "98%",
    label: "Clients Satisfaits", 
    icon: Star
  },
  {
    number: "24h",
    label: "Support Technique",
    icon: Zap
  },
  {
    number: "3 ans",
    label: "Expérience Maroc",
    icon: Award
  }
];

const categories = ["Tous", "E-commerce", "Site Vitrine", "Application Web", "E-learning"];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-16 w-40 h-40 bg-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-green-400/15 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-colors backdrop-blur-sm">
            <Globe className="h-4 w-4 mr-2" />
            Portfolio Web Bzz.ma
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            <span className="block">Nos Réalisations</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Web d'Exception
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Découvrez les projets web que nous avons créés pour nos clients. 
            <strong className="text-white">Innovation, performance et design au service de votre réussite.</strong>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/creation-web" className="group bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Créer Votre Projet
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#projets" className="group border-2 border-white/30 hover:border-white/50 text-white hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              Voir les Projets
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="projets" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Projets <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Réalisés</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Chaque projet est unique et conçu sur mesure pour répondre aux besoins spécifiques de nos clients.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 bg-white border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Eye className="h-4 w-4 text-slate-700" />
                      </button>
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <ExternalLink className="h-4 w-4 text-slate-700" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Globe className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm opacity-75">Aperçu du projet</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-slate-900 text-sm">Résultats clés :</h4>
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Voir le Projet
                    </button>
                    <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-3 rounded-xl transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Technologies <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Maîtrisées</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nous utilisons les dernières technologies pour créer des solutions web modernes et performantes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Next.js", "Vue.js", "Node.js", 
              "Laravel", "WordPress", "MongoDB", "PostgreSQL",
              "Stripe", "SEO", "PWA", "API REST"
            ].map((tech) => (
              <div key={tech} className="group text-center">
                <div className="bg-slate-50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Code className="h-8 w-8 mx-auto mb-3 text-slate-700 group-hover:text-white transition-colors" />
                  <p className="font-semibold text-slate-900 group-hover:text-white transition-colors">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Lancer Votre Projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Rejoignez nos clients satisfaits et donnez vie à vos idées web avec Bzz.ma
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Démarrer Mon Projet
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/creation-web" className="group border-2 border-white/30 hover:border-white/50 text-white hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              Voir Nos Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
