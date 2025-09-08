import { Metadata } from 'next';
import { 
  Search, 
  FileText, 
  Wrench, 
  TestTube, 
  Package, 
  Clock,
  Shield,
  Award,
  CheckCircle,
  Phone,
  MessageCircle,
  MapPin,
  Users,
  Star,
  Zap,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Notre Processus de Réparation - Bzz.ma',
  description: 'Découvrez notre processus de réparation IT en 5 étapes : Diagnostic, Devis, Réparation, Tests, Livraison. Transparence et qualité garanties.',
  keywords: 'processus réparation IT Maroc, étapes réparation ordinateur, garantie réparation MacBook, processus qualité Bzz'
};

export default function ProcessPage() {
  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: "Diagnostic Complet",
      duration: "30 min - 2h",
      description: "Analyse approfondie de votre équipement",
      details: [
        "Réception et inspection visuelle",
        "Tests diagnostics avancés",
        "Identification problèmes matériels/logiciels",
        "Évaluation état général appareil",
        "Photos avant intervention"
      ],
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      icon: FileText,
      title: "Devis Détaillé",
      duration: "Immédiat",
      description: "Estimation transparente et détaillée",
      details: [
        "Liste complète des réparations",
        "Prix détaillé pièces et main d'œuvre",
        "Délais d'intervention précis",
        "Options alternatives si disponibles",
        "Garanties appliquées"
      ],
      color: "bg-green-500",
      gradient: "from-green-500 to-green-600"
    },
    {
      step: 3,
      icon: Wrench,
      title: "Réparation Experte",
      duration: "Variable",
      description: "Intervention par nos techniciens certifiés",
      details: [
        "Désassemblage méticuleux",
        "Remplacement pièces défectueuses",
        "Utilisation pièces originales/compatibles",
        "Nettoyage complet interne",
        "Assemblage professionnel"
      ],
      color: "bg-orange-500",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      step: 4,
      icon: TestTube,
      title: "Tests de Qualité",
      duration: "1-3h",
      description: "Vérification complète du fonctionnement",
      details: [
        "Tests fonctionnalités principales",
        "Benchmark performance",
        "Contrôle température et ventilation",
        "Vérification connectivité",
        "Tests stress prolongés"
      ],
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      step: 5,
      icon: Package,
      title: "Livraison & Garantie",
      duration: "Variable",
      description: "Retour de votre équipement",
      details: [
        "Nettoyage final et emballage",
        "Documentation réparations",
        "Remise en main propre ou livraison",
        "Explication garanties",
        "Conseils maintenance préventive"
      ],
      color: "bg-red-500",
      gradient: "from-red-500 to-red-600"
    }
  ];

  const qualityStandards = [
    {
      icon: Award,
      title: "Techniciens Certifiés",
      description: "Équipe formée et certifiée par les constructeurs"
    },
    {
      icon: Shield,
      title: "Pièces Originales",
      description: "Uniquement des composants authentiques et compatibles"
    },
    {
      icon: Clock,
      title: "Délais Respectés",
      description: "98% de nos interventions livrées dans les délais"
    },
    {
      icon: CheckCircle,
      title: "Garantie Étendue",
      description: "Jusqu'à 24 mois de garantie selon la réparation"
    }
  ];

  const serviceTypes = [
    {
      icon: Zap,
      title: "Service Express",
      description: "Réparation dans la journée",
      duration: "2-8h",
      surcharge: "+50%",
      availability: "Selon disponibilité pièces"
    },
    {
      icon: Clock,
      title: "Service Standard",
      description: "Délai normal de réparation",
      duration: "1-5 jours",
      surcharge: "Prix normal",
      availability: "Toujours disponible"
    },
    {
      icon: MapPin,
      title: "Service Sur Site",
      description: "Intervention dans vos locaux",
      duration: "2-4h",
      surcharge: "+Frais déplacement",
      availability: "Grand Casablanca"
    }
  ];

  const guaranteeTypes = [
    {
      type: "Pièces",
      duration: "6-24 mois",
      coverage: "Défaut fabrication, dysfonctionnement",
      conditions: "Usage normal, pas de choc"
    },
    {
      type: "Main d'œuvre",
      duration: "3-6 mois",
      coverage: "Erreur installation, problème technique",
      conditions: "Même réparation, appareil non modifié"
    },
    {
      type: "Satisfaction",
      duration: "7 jours",
      coverage: "Remboursement si insatisfait",
      conditions: "Retour état initial"
    }
  ];

  const stats = [
    { icon: Award, number: "98%", label: "Taux de réussite" },
    { icon: Clock, number: "24h", label: "Délai moyen" },
    { icon: Users, number: "500+", label: "Clients satisfaits" },
    { icon: Star, number: "4.9/5", label: "Note moyenne" }
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
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-cyan-400/15 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-colors backdrop-blur-sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Processus Qualité Certifié
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            <span className="block">Notre Processus</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              en 5 Étapes
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Un processus rigoureux et transparent pour garantir la qualité de nos interventions. 
            <strong className="text-white">Excellence à chaque étape.</strong>
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Les 5 Étapes de Notre Processus
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chaque réparation suit un processus standardisé pour garantir la qualité et la transparence
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {processSteps.map((step, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover-lift">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} text-white flex items-center justify-center mr-4`}>
                          <step.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <p className="text-sm text-gray-500">Durée: {step.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-gray-200 rounded-full items-center justify-center">
                    <span className="text-2xl font-bold text-gray-700">{step.step}</span>
                  </div>
                  
                  {/* Mobile Step Number */}
                  <div className="md:hidden flex items-center mb-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-gray-700">{step.step}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types de Service
            </h2>
            <p className="text-lg text-gray-600">
              Choisissez le service adapté à votre urgence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Durée:</span>
                      <span className="font-semibold">{service.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tarif:</span>
                      <span className="font-semibold text-green-600">{service.surcharge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Disponibilité:</span>
                      <span className="font-semibold text-blue-600">{service.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Standards de Qualité
            </h2>
            <p className="text-lg text-gray-600">
              L'excellence à chaque étape de notre processus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <standard.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{standard.title}</h3>
                <p className="text-gray-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Garanties
            </h2>
            <p className="text-lg text-gray-600">
              Votre tranquillité d'esprit est notre engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guaranteeTypes.map((guarantee, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{guarantee.type}</h3>
                  <p className="text-2xl font-bold text-green-600">{guarantee.duration}</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Couverture:</h4>
                    <p className="text-gray-600 text-sm">{guarantee.coverage}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Conditions:</h4>
                    <p className="text-gray-600 text-sm">{guarantee.conditions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions Fréquentes sur Notre Processus
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Combien de temps prend une réparation ?",
                answer: "Cela dépend du type de réparation. En moyenne : 2-4h pour une réparation express, 1-3 jours pour une réparation standard, et 3-7 jours pour les cas complexes."
              },
              {
                question: "Puis-je suivre l'avancement de ma réparation ?",
                answer: "Oui ! Vous recevrez des SMS/emails aux étapes clés, et pouvez nous contacter à tout moment pour un point d'avancement."
              },
              {
                question: "Que se passe-t-il si la réparation échoue ?",
                answer: "Si nous ne pouvons pas réparer votre appareil, vous ne payez que les frais de diagnostic (remboursés si vous procédez à l'achat d'un appareil de remplacement chez nous)."
              },
              {
                question: "Utilisez-vous des pièces originales ?",
                answer: "Nous privilégions les pièces originales constructeur. Si indisponibles, nous utilisons des pièces compatibles certifiées de même qualité."
              },
              {
                question: "Comment fonctionne votre garantie ?",
                answer: "Nous offrons une garantie sur les pièces (6-24 mois) et la main d'œuvre (3-6 mois). La durée exacte dépend du type de réparation et est précisée sur votre devis."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Démarrer Votre Réparation ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous pour un diagnostic gratuit et découvrez notre processus professionnel
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+212522XXXXXX"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Appel Gratuit: +212 5 22 XX XX XX
            </a>
            
            <a
              href="https://wa.me/212600XXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Direct
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <Clock className="h-4 w-4 mr-2" />
              Diagnostic gratuit
            </div>
            <div className="flex items-center justify-center">
              <Shield className="h-4 w-4 mr-2" />
              Devis transparent
            </div>
            <div className="flex items-center justify-center">
              <Star className="h-4 w-4 mr-2" />
              Qualité garantie
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
