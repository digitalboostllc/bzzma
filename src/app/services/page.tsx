import { Metadata } from 'next';
import { 
  Laptop, 
  Monitor, 
  HardDrive, 
  MapPin, 
  Database, 
  Settings,
  Smartphone,
  Printer,
  Network,
  Shield,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Services de Réparation IT - Bzz.ma',
  description: 'Services complets de réparation IT au Maroc : MacBook, PC, laptops, hardware, données. Intervention rapide pour entreprises.',
  keywords: 'réparation MacBook Maroc, réparation PC entreprise, service IT Casablanca, hardware replacement Morocco'
};

export default function ServicesPage() {
  const services = [
    {
      category: "Réparation Laptops",
      icon: Laptop,
      gradient: "from-blue-500 to-blue-600",
      description: "Réparation complète de tous types de laptops professionnels",
      services: [
        {
          name: "Réparation MacBook Pro/Air",
          description: "Écrans Retina, claviers, batteries, logic board",
          price: "À partir de 800 MAD",
          duration: "2-5 jours",
          popular: true
        },
        {
          name: "Dell XPS & Latitude",
          description: "Réparation complète gamme Dell professionnelle",
          price: "À partir de 600 MAD",
          duration: "1-3 jours"
        },
        {
          name: "HP EliteBook & ProBook",
          description: "Service spécialisé HP Business",
          price: "À partir de 550 MAD",
          duration: "1-3 jours"
        },
        {
          name: "Lenovo ThinkPad",
          description: "Expertise ThinkPad certifiée",
          price: "À partir de 650 MAD",
          duration: "2-4 jours"
        }
      ]
    },
    {
      category: "Réparation PC Desktop",
      icon: Monitor,
      gradient: "from-purple-500 to-purple-600",
      description: "Solutions complètes pour ordinateurs de bureau",
      services: [
        {
          name: "Réparation Carte Mère",
          description: "Diagnostic et réparation composants",
          price: "À partir de 400 MAD",
          duration: "2-5 jours"
        },
        {
          name: "Mise à Niveau Système",
          description: "RAM, SSD, processeur, carte graphique",
          price: "À partir de 300 MAD",
          duration: "Même jour",
          popular: true
        },
        {
          name: "Optimisation Performance",
          description: "Nettoyage, défragmentation, tuning",
          price: "À partir de 200 MAD",
          duration: "2-4 heures"
        },
        {
          name: "Assemblage PC Sur Mesure",
          description: "Configuration professionnelle personnalisée",
          price: "Devis gratuit",
          duration: "1-2 jours"
        }
      ]
    },
    {
      category: "Remplacement Hardware",
      icon: HardDrive,
      gradient: "from-green-500 to-green-600",
      description: "Pièces originales et compatibles certifiées",
      services: [
        {
          name: "Écrans LCD/LED/OLED",
          description: "Toutes tailles et résolutions",
          price: "À partir de 1200 MAD",
          duration: "1-2 jours",
          popular: true
        },
        {
          name: "Claviers & Trackpads",
          description: "Remplacement précis toutes marques",
          price: "À partir de 400 MAD",
          duration: "Même jour"
        },
        {
          name: "Batteries Laptops",
          description: "Batteries haute qualité certifiées",
          price: "À partir de 350 MAD",
          duration: "Même jour"
        },
        {
          name: "Mémoire RAM & SSD",
          description: "Upgrade performance garanti",
          price: "À partir de 250 MAD",
          duration: "1-2 heures"
        }
      ]
    },
    {
      category: "Service Sur Site",
      icon: MapPin,
      gradient: "from-orange-500 to-orange-600",
      description: "Intervention directe dans vos locaux",
      services: [
        {
          name: "Diagnostic Sur Place",
          description: "Évaluation complète équipements",
          price: "200 MAD",
          duration: "1-2 heures"
        },
        {
          name: "Réparation Immédiate",
          description: "Intervention avec pièces courantes",
          price: "À partir de 300 MAD",
          duration: "2-4 heures",
          popular: true
        },
        {
          name: "Installation Logiciels",
          description: "Configuration systèmes et applications",
          price: "À partir de 150 MAD",
          duration: "1-3 heures"
        },
        {
          name: "Formation Utilisateurs",
          description: "Formation équipes sur nouveaux outils",
          price: "500 MAD/session",
          duration: "2-4 heures"
        }
      ]
    },
    {
      category: "Récupération de Données",
      icon: Database,
      gradient: "from-red-500 to-red-600",
      description: "Récupération professionnelle fichiers critiques",
      services: [
        {
          name: "Disques Endommagés",
          description: "HDD/SSD avec dommages physiques",
          price: "À partir de 800 MAD",
          duration: "3-7 jours"
        },
        {
          name: "Fichiers Supprimés",
          description: "Récupération données effacées",
          price: "À partir de 400 MAD",
          duration: "1-2 jours",
          popular: true
        },
        {
          name: "Systèmes Corrompus",
          description: "Récupération après crash système",
          price: "À partir de 600 MAD",
          duration: "2-5 jours"
        },
        {
          name: "Serveurs d'Entreprise",
          description: "Récupération données serveurs",
          price: "Devis gratuit",
          duration: "3-10 jours"
        }
      ]
    },
    {
      category: "Maintenance & Support",
      icon: Settings,
      gradient: "from-indigo-500 to-indigo-600",
      description: "Contrats maintenance préventive",
      services: [
        {
          name: "Contrat Maintenance PME",
          description: "5-20 postes, intervention mensuelle",
          price: "1500 MAD/mois",
          duration: "Contrat annuel"
        },
        {
          name: "Contrat Maintenance Entreprise",
          description: "20+ postes, support prioritaire",
          price: "À partir de 3000 MAD/mois",
          duration: "Contrat annuel",
          popular: true
        },
        {
          name: "Support Technique 24/7",
          description: "Hotline technique permanente",
          price: "2000 MAD/mois",
          duration: "Contrat annuel"
        },
        {
          name: "Gestion Parc Informatique",
          description: "Gestion complète infrastructure IT",
          price: "Devis personnalisé",
          duration: "Contrat sur mesure"
        }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Network,
      title: "Configuration Réseau",
      description: "Installation et configuration réseaux d'entreprise"
    },
    {
      icon: Printer,
      title: "Réparation Imprimantes",
      description: "Service complet imprimantes et multifonctions"
    },
    {
      icon: Smartphone,
      title: "Réparation Tablettes",
      description: "iPad, Android, Surface Pro professionnels"
    },
    {
      icon: Shield,
      title: "Sécurité IT",
      description: "Audit sécurité et protection données"
    }
  ];

  const guarantees = [
    {
      icon: Award,
      title: "Garantie Pièces",
      description: "6 mois à 2 ans selon composant"
    },
    {
      icon: Clock,
      title: "Garantie Main d'Œuvre",
      description: "3 mois sur toute intervention"
    },
    {
      icon: Shield,
      title: "Assurance Qualité",
      description: "Certification ISO 9001"
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Client",
      description: "Remboursement si insatisfait"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-purple-400/15 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-colors backdrop-blur-sm">
            <Settings className="h-4 w-4 mr-2" />
            Solutions IT Complètes
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            <span className="block">Services de</span>
            <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
              Réparation IT
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Expertise technique avancée pour tous vos besoins informatiques. 
            <strong className="text-white">Intervention rapide, qualité garantie.</strong>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Devis Gratuit Immédiat
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white/30 hover:border-white/50 text-white hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              Réserver Intervention
            </button>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              {/* Category Header */}
              <div className="text-center mb-16">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <category.icon className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {category.category}
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="group bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                    {service.popular && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        POPULAIRE
                      </div>
                    )}
                    
                    <div className="mb-6 flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Prix:</span>
                        <span className="font-semibold text-green-600">{service.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Délai:</span>
                        <span className="font-semibold text-slate-900">{service.duration}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center mt-auto">
                      Demander ce Service
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Services */}
          <div className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Services Complémentaires
              </h2>
              <p className="text-lg text-gray-600">
                Solutions complètes pour tous vos besoins IT
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover-lift flex flex-col h-full">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nos Garanties
              </h2>
              <p className="text-lg text-gray-600">
                Votre satisfaction est notre priorité
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <guarantee.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{guarantee.title}</h3>
                  <p className="text-gray-600 text-sm">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'une Réparation ?
            </h2>
            <p className="text-red-100 text-lg mb-8">
              Contactez-nous maintenant pour un diagnostic gratuit et un devis personnalisé
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+212522XXXXXX"
                className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Appeler Maintenant
              </a>
              
              <a
                href="https://wa.me/212600XXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <Clock className="h-4 w-4 mr-2" />
                Réponse sous 2h
              </div>
              <div className="flex items-center justify-center">
                <Shield className="h-4 w-4 mr-2" />
                Devis gratuit
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Intervention rapide
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
