import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, Users, CheckCircle, Star, Laptop, Monitor, Wrench, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function HomePage() {
  
  return (
    <>
      {/* Hero Section - Apple Style */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-yellow-400/15 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-colors backdrop-blur-sm">
            <Wrench className="h-4 w-4 mr-2" />
            Leader en Solutions IT au Maroc
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
            <span className="block">Réparation IT</span>
            <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Professionnelle
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Spécialiste MacBook, PC et solutions informatiques pour entreprises marocaines. 
            <strong className="text-white">Intervention rapide, expertise certifiée.</strong>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="group bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Obtenir un Devis Gratuit
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/booking" className="group border-2 border-white/30 hover:border-white/50 text-white hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              Réserver une Intervention
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-slate-300">Entreprises clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24h</div>
              <div className="text-sm text-slate-300">Intervention rapide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-slate-300">Taux de réussite</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-sm text-slate-300">Années d'expérience</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Nos Services d'Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Solutions complètes de réparation IT avec expertise technique de pointe
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Laptop,
                title: "Réparation MacBook & Laptops",
                description: "Spécialistes certifiés Apple. Réparation écrans Retina, claviers, batteries et cartes mères.",
                features: ["MacBook Pro/Air", "Dell XPS", "HP EliteBook", "Lenovo ThinkPad"],
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Monitor,
                title: "PC Desktop & Serveurs",
                description: "Maintenance, upgrade et réparation de stations de travail et serveurs d'entreprise.",
                features: ["Stations de travail", "Serveurs", "Assemblage custom", "Mise à niveau"],
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Wrench,
                title: "Service Sur Site",
                description: "Intervention directe dans vos locaux avec diagnostic complet et réparation immédiate.",
                features: ["Diagnostic gratuit", "Réparation express", "Formation équipe", "Support technique"],
                color: "from-green-500 to-green-600"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/services" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group-hover:translate-x-1 transition-transform">
                  En savoir plus
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Pourquoi Bzz ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              L'expertise technique au service de votre réussite d'entreprise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Garantie Totale",
                description: "Jusqu'à 2 ans de garantie sur les réparations avec pièces d'origine certifiées"
              },
              {
                icon: Clock,
                title: "Intervention 24h",
                description: "Service d'urgence disponible 24h/7j pour les pannes critiques d'entreprise"
              },
              {
                icon: Award,
                title: "Expertise Certifiée",
                description: "Techniciens certifiés Apple, Dell, HP avec 10+ années d'expérience"
              },
              {
                icon: Users,
                title: "Support Dédié",
                description: "Account manager dédié pour les entreprises avec suivi personnalisé"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow duration-300">
                  <feature.icon className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Nos Clients Témoignent
            </h2>
            <p className="text-xl text-slate-600">
              Plus de 500 entreprises marocaines nous font confiance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Bzz a transformé notre infrastructure IT. Service exceptionnel et équipe très professionnelle. Ils ont réparé notre flotte de 50 MacBook en temps record.",
                author: "Ahmed Bennani",
                company: "Directeur IT, TechCorp Maroc",
                rating: 5
              },
              {
                text: "Intervention rapide sur notre serveur en panne. L'équipe technique est arrivée en moins d'une heure et a résolu le problème. Excellent service !",
                author: "Fatima El Amrani",
                company: "CEO, StartUp Digital",
                rating: 5
              },
              {
                text: "Contrat de maintenance sur 3 ans. Très satisfait de la réactivité et de la qualité du service. Je recommande fortement pour les entreprises.",
                author: "Youssef Alami",
                company: "Manager IT, Groupe Alami",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Optimiser Votre IT ?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Contactez nos experts pour un diagnostic gratuit et un devis personnalisé pour votre entreprise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="tel:+212522XXXXXX"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Phone className="h-5 w-5 mr-2" />
              Appeler Maintenant
            </a>
            
            <a
              href="https://wa.me/212600XXXXXX?text=Bonjour, je souhaite un devis pour mes besoins IT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Direct
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-400 text-sm">
            <div className="flex items-center justify-center">
              <Shield className="h-4 w-4 mr-2" />
              Devis gratuit sous 2h
            </div>
            <div className="flex items-center justify-center">
              <Clock className="h-4 w-4 mr-2" />
              Intervention d'urgence 24/7
            </div>
            <div className="flex items-center justify-center">
              <Award className="h-4 w-4 mr-2" />
              Garantie jusqu'à 2 ans
            </div>
          </div>
        </div>
      </section>
    </>
  );
}