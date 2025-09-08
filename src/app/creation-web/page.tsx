import Link from 'next/link';
import { ArrowRight, Globe, Code, Smartphone, Search, Zap, Shield, Award, CheckCircle, Star, Users, Calendar, MessageCircle, Laptop, Database, Settings } from 'lucide-react';

export default function CreationWebPage() {
  const webServices = [
    {
      icon: Globe,
      title: 'Sites Web Vitrine',
      description: 'Sites web professionnels pour présenter votre entreprise avec élégance',
      features: ['Design responsive', 'SEO optimisé', 'Formulaires de contact', 'Hébergement inclus'],
      price: 'À partir de 8 000 DH',
      color: 'from-blue-500 to-blue-600',
      bg: 'from-blue-50 to-blue-100'
    },
    {
      icon: Code,
      title: 'E-commerce',
      description: 'Boutiques en ligne complètes pour vendre vos produits sur internet',
      features: ['Catalogue produits', 'Paiement sécurisé', 'Gestion stocks', 'Analytics inclus'],
      price: 'À partir de 15 000 DH',
      color: 'from-green-500 to-green-600',
      bg: 'from-green-50 to-green-100'
    },
    {
      icon: Smartphone,
      title: 'Applications Web',
      description: 'Applications web sur mesure pour vos besoins métier spécifiques',
      features: ['Interface personnalisée', 'Base de données', 'API intégrées', 'Support technique'],
      price: 'Sur devis',
      color: 'from-purple-500 to-purple-600',
      bg: 'from-purple-50 to-purple-100'
    },
    {
      icon: Search,
      title: 'SEO & Marketing Digital',
      description: 'Optimisation et promotion de votre présence en ligne',
      features: ['Référencement Google', 'Google Ads', 'Réseaux sociaux', 'Analytics avancés'],
      price: 'À partir de 3 000 DH/mois',
      color: 'from-orange-500 to-orange-600',
      bg: 'from-orange-50 to-orange-100'
    }
  ];

  const techStack = [
    { name: 'Next.js', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Design' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Vercel', category: 'Hosting' }
  ];

  const portfolioSamples = [
    {
      title: 'E-commerce Mode',
      description: 'Boutique en ligne moderne avec plus de 1000 produits',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Site Corporate',
      description: 'Site vitrine pour cabinet d\'avocats',
      tech: ['React', 'Tailwind', 'CMS'],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Application SaaS',
      description: 'Plateforme de gestion pour PME',
      tech: ['Vue.js', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/400/300'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Analyse & Stratégie',
      description: 'Étude de vos besoins et définition de la stratégie digitale',
      duration: '1-2 jours'
    },
    {
      step: 2,
      title: 'Design & Maquettes',
      description: 'Création des maquettes et validation du design',
      duration: '3-5 jours'
    },
    {
      step: 3,
      title: 'Développement',
      description: 'Codage et intégration de toutes les fonctionnalités',
      duration: '1-4 semaines'
    },
    {
      step: 4,
      title: 'Tests & Optimisation',
      description: 'Tests complets et optimisation des performances',
      duration: '2-3 jours'
    },
    {
      step: 5,
      title: 'Mise en Ligne',
      description: 'Déploiement et formation à l\'utilisation',
      duration: '1 jour'
    }
  ];

  const stats = [
    { icon: Globe, number: "50+", label: "Sites créés" },
    { icon: Users, number: "100%", label: "Clients satisfaits" },
    { icon: Zap, number: "7j", label: "Délai moyen" },
    { icon: Award, number: "3 ans", label: "Garantie support" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-green-400/15 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-colors backdrop-blur-sm">
            <Globe className="h-4 w-4 mr-2" />
            Création Web Professionnelle
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            <span className="block">Votre Présence</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Digitale Parfaite
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Sites web, e-commerce et applications sur mesure pour propulser votre business en ligne. 
            <strong className="text-white">Design moderne, performance optimale.</strong>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="group bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Démarrer Mon Projet
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#portfolio" className="group border-2 border-white/30 hover:border-white/50 text-white hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              Voir Nos Réalisations
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Nos Services Web
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Solutions web complètes pour tous vos besoins digitaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className={`group bg-gradient-to-br ${service.bg} rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                  <Link href="/contact" className="group flex items-center text-blue-600 font-semibold hover:text-blue-700">
                    Commander <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technologies Modernes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nous utilisons les dernières technologies pour créer des solutions performantes et évolutives
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-slate-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Nos Réalisations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets web réalisés pour nos clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioSamples.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-slate-200 to-slate-300">
                  <div className="flex items-center justify-center">
                    <Globe className="h-16 w-16 text-slate-400" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Voir Plus de Projets
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Notre Processus de Création
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre projet web
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-6">
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Lancer Votre Projet Web ?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Discutons de vos besoins et créons ensemble votre présence digitale parfaite
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Demander un Devis Gratuit
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/booking" className="group border-2 border-white/30 hover:border-white/50 text-white hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              Planifier une Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
