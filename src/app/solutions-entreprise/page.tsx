import Link from 'next/link';
import { ArrowRight, Building, Shield, Cloud, Network, Users, Database, Settings, Zap, Award, CheckCircle, Star, Phone, MessageCircle, Laptop, Monitor, Lock, FileText } from 'lucide-react';

export default function SolutionsEntreprisePage() {
  const businessSolutions = [
    {
      icon: Network,
      title: 'Infrastructure IT',
      description: 'Conception et déploiement d\'infrastructures IT complètes et évolutives',
      features: ['Audit infrastructure existante', 'Architecture réseau optimale', 'Serveurs et stockage', 'Sécurité périmétrique'],
      pricing: 'À partir de 25 000 DH',
      duration: '2-6 semaines',
      color: 'from-blue-500 to-blue-600',
      bg: 'from-blue-50 to-blue-100'
    },
    {
      icon: Cloud,
      title: 'Migration Cloud',
      description: 'Transition sécurisée vers le cloud avec Google Workspace, Microsoft 365',
      features: ['Évaluation besoins cloud', 'Migration données sécurisée', 'Formation équipes', 'Support post-migration'],
      pricing: 'À partir de 15 000 DH',
      duration: '1-4 semaines',
      color: 'from-sky-500 to-sky-600',
      bg: 'from-sky-50 to-sky-100'
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Protection complète contre les menaces cyber avec audit et solutions',
      features: ['Audit sécurité complet', 'Firewall et antivirus pro', 'Formation sensibilisation', 'Plan de sauvegarde'],
      pricing: 'À partir de 20 000 DH',
      duration: '1-3 semaines',
      color: 'from-red-500 to-red-600',
      bg: 'from-red-50 to-red-100'
    },
    {
      icon: Users,
      title: 'Support IT Dédié',
      description: 'Équipe IT externalisée pour un support technique permanent',
      features: ['Helpdesk 24/7', 'Maintenance préventive', 'Gestion parc informatique', 'Interventions sur site'],
      pricing: 'À partir de 8 000 DH/mois',
      duration: 'Contrat annuel',
      color: 'from-green-500 to-green-600',
      bg: 'from-green-50 to-green-100'
    }
  ];

  const packages = [
    {
      name: 'PME Starter',
      target: '5-15 employés',
      price: '12 000 DH/mois',
      popular: false,
      features: [
        'Support technique 9h-18h',
        'Maintenance préventive mensuelle',
        'Sauvegarde cloud 100GB',
        'Antivirus professionnel',
        'Intervention sur site (2/mois)',
        'Hotline téléphonique'
      ]
    },
    {
      name: 'Business Pro',
      target: '15-50 employés',
      price: '25 000 DH/mois',
      popular: true,
      features: [
        'Support technique 24/7',
        'Maintenance préventive bi-mensuelle',
        'Sauvegarde cloud 500GB',
        'Sécurité avancée + monitoring',
        'Interventions sur site illimitées',
        'Consultant IT dédié',
        'Formation équipes incluse',
        'Reporting mensuel détaillé'
      ]
    },
    {
      name: 'Enterprise',
      target: '50+ employés',
      price: 'Sur devis',
      popular: false,
      features: [
        'Support technique 24/7/365',
        'Maintenance préventive hebdomadaire',
        'Sauvegarde cloud illimitée',
        'Cybersécurité complète',
        'Équipe IT dédiée sur site',
        'Infrastructure haute disponibilité',
        'Disaster recovery plan',
        'SLA garantis 99.9%'
      ]
    }
  ];

  const industries = [
    {
      icon: Building,
      name: 'Cabinet Médical',
      challenge: 'Gestion sécurisée des données patients',
      solution: 'Infrastructure RGPD + sauvegarde sécurisée',
      result: '100% conformité réglementaire'
    },
    {
      icon: FileText,
      name: 'Cabinet Avocat',
      challenge: 'Confidentialité et accès remote sécurisé',
      solution: 'VPN entreprise + chiffrement avancé',
      result: 'Télétravail sécurisé 24/7'
    },
    {
      icon: Settings,
      name: 'Entreprise Manufacture',
      challenge: 'Connectivité usine et bureaux',
      solution: 'Réseau unifié + monitoring IoT',
      result: '40% amélioration productivité'
    },
    {
      icon: Users,
      name: 'Agence Marketing',
      challenge: 'Collaboration créative et stockage',
      solution: 'Cloud créatif + infrastructure haute performance',
      result: 'Projets livrés 30% plus vite'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Audit IT Gratuit',
      description: 'Évaluation complète de votre infrastructure actuelle et identification des points d\'amélioration',
      duration: '1-2 jours',
      deliverable: 'Rapport d\'audit détaillé'
    },
    {
      step: 2,
      title: 'Stratégie & Proposition',
      description: 'Élaboration d\'une stratégie IT sur mesure avec roadmap et budgets détaillés',
      duration: '3-5 jours',
      deliverable: 'Plan stratégique IT'
    },
    {
      step: 3,
      title: 'Déploiement Phase 1',
      description: 'Mise en place des solutions prioritaires avec impact immédiat',
      duration: '1-4 semaines',
      deliverable: 'Infrastructure de base opérationnelle'
    },
    {
      step: 4,
      title: 'Formation & Optimisation',
      description: 'Formation des équipes et optimisation des performances',
      duration: '1-2 semaines',
      deliverable: 'Équipes formées et productives'
    },
    {
      step: 5,
      title: 'Support Continu',
      description: 'Maintenance, monitoring et évolution continue de vos systèmes',
      duration: 'En continu',
      deliverable: 'Performance et sécurité garanties'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Productivité +40%',
      description: 'Optimisation des processus et outils collaboratifs modernes'
    },
    {
      icon: Shield,
      title: 'Sécurité Renforcée',
      description: 'Protection multicouche contre toutes les cybermenaces'
    },
    {
      icon: Award,
      title: 'Disponibilité 99.9%',
      description: 'Infrastructure haute disponibilité avec redondance'
    },
    {
      icon: Database,
      title: 'Données Protégées',
      description: 'Sauvegarde automatique et plan de récupération garanti'
    }
  ];

  const stats = [
    { icon: Building, number: "80+", label: "Entreprises clientes" },
    { icon: Users, number: "2000+", label: "Utilisateurs supportés" },
    { icon: Shield, number: "99.9%", label: "Disponibilité garantie" },
    { icon: Award, number: "5 ans", label: "Expérience moyenne équipe" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-indigo-400/15 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-colors backdrop-blur-sm">
            <Building className="h-4 w-4 mr-2" />
            Solutions IT Entreprise
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            <span className="block">Votre Partenaire IT</span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Stratégique
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Infrastructure, cloud, cybersécurité et support IT complet pour faire évoluer votre entreprise. 
            <strong className="text-white">Expertise, innovation et tranquillité d'esprit.</strong>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="group bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Audit IT Gratuit
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#packages" className="group border-2 border-white/30 hover:border-white/50 text-white hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              Voir Nos Offres
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

      {/* Business Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Solutions IT Complètes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              De l'infrastructure au support, nous gérons tous vos besoins technologiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessSolutions.map((solution, index) => (
              <div key={index} className={`group bg-gradient-to-br ${solution.bg} rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`bg-gradient-to-br ${solution.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-slate-500 block">Durée</span>
                    <span className="font-semibold text-slate-700">{solution.duration}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-slate-900">{solution.pricing}</span>
                  <Link href="/contact" className="group flex items-center text-purple-600 font-semibold hover:text-purple-700">
                    Demander Devis <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Plans */}
      <section id="packages" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Forfaits Support IT
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Support IT externalisé adapté à la taille de votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-purple-500 hover:shadow-2xl' : 'hover:shadow-xl'}`}>
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-3 font-semibold">
                    Plus Populaire
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                    <p className="text-slate-600 mb-4">{pkg.target}</p>
                    <div className="text-4xl font-bold text-slate-900 mb-2">{pkg.price}</div>
                    {pkg.price !== 'Sur devis' && (
                      <p className="text-slate-500">par mois, engagement 12 mois</p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/contact" 
                    className={`block w-full text-center py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                      pkg.popular 
                        ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    }`}
                  >
                    {pkg.price === 'Sur devis' ? 'Demander Devis' : 'Commencer'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Secteurs d'Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Solutions adaptées aux besoins spécifiques de votre secteur d'activité
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <industry.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.name}</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-red-600 uppercase tracking-wide">Défi</span>
                    <p className="text-slate-700 mt-1">{industry.challenge}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">Notre Solution</span>
                    <p className="text-slate-700 mt-1">{industry.solution}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-green-600 uppercase tracking-wide">Résultat</span>
                    <p className="text-slate-900 font-semibold mt-1">{industry.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Notre Méthodologie
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un processus éprouvé pour transformer votre infrastructure IT
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-6">
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">{step.description}</p>
                  <div className="flex items-center text-sm text-slate-500">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Livrable: {step.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Bénéfices Mesurables
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Des résultats concrets pour votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transformons Votre IT Ensemble
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Audit IT gratuit et sans engagement pour identifier vos opportunités d'amélioration
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Audit IT Gratuit
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
