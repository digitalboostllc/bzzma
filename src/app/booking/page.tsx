import { Metadata } from 'next';
import { 
  Calendar, 
  Clock, 
  Shield, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  Laptop,
  Monitor,
  Smartphone,
  Zap,
  Users,
  Award
} from 'lucide-react';
import { BookingForm } from '@/components/booking-form';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Réserver une Réparation - Bzz.ma',
  description: 'Réservez en ligne votre réparation IT au Maroc. Système de prise de rendez-vous simple et rapide. Confirmation immédiate.',
  keywords: 'réserver réparation ordinateur Maroc, rendez-vous réparation MacBook, booking Bzz, prise RDV IT'
};

export default function BookingPage() {
  const advantages = [
    {
      icon: Clock,
      title: "Réservation Instantanée",
      description: "Confirmation automatique par SMS et email"
    },
    {
      icon: Calendar,
      title: "Créneaux Flexibles",
      description: "Choisissez l'heure qui vous convient le mieux"
    },
    {
      icon: Shield,
      title: "Diagnostic Gratuit",
      description: "Évaluation complète sans engagement"
    },
    {
      icon: CheckCircle,
      title: "Suivi en Temps Réel",
      description: "Notifications à chaque étape de la réparation"
    }
  ];

  const deviceTypes = [
    {
      icon: Laptop,
      name: "MacBook",
      description: "Pro, Air, toutes générations",
      examples: ["Écran cassé", "Clavier défaillant", "Batterie faible", "Ralentissements"]
    },
    {
      icon: Monitor,
      name: "PC Portable",
      description: "Windows, Linux, Chromebook",
      examples: ["Écran noir", "Surchauffe", "Virus", "Mise à niveau"]
    },
    {
      icon: Monitor,
      name: "PC Bureau",
      description: "Desktop, All-in-One",
      examples: ["Pas de démarrage", "Bruits étranges", "Lenteur", "Upgrade"]
    },
    {
      icon: Smartphone,
      name: "Tablettes",
      description: "iPad, Android, Surface",
      examples: ["Écran fissuré", "Ne charge plus", "Lenteur", "Réparation"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Réservez",
      description: "Remplissez le formulaire en 2 minutes",
      duration: "2 min"
    },
    {
      step: 2,
      title: "Confirmation",
      description: "Recevez la confirmation par SMS/email",
      duration: "Immédiat"
    },
    {
      step: 3,
      title: "Diagnostic",
      description: "Apportez votre appareil à l'heure convenue",
      duration: "30 min"
    },
    {
      step: 4,
      title: "Devis",
      description: "Recevez un devis détaillé et transparent",
      duration: "Immédiat"
    },
    {
      step: 5,
      title: "Réparation",
      description: "Nous nous occupons de tout",
      duration: "Variable"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Clients satisfaits" },
    { icon: Clock, number: "24h", label: "Délai moyen" },
    { icon: Award, number: "98%", label: "Taux de réussite" },
    { icon: Zap, number: "2h", label: "Réponse rapide" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-indigo-400/15 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-colors backdrop-blur-sm">
            <Calendar className="h-4 w-4 mr-2" />
            Réservation en Ligne 24/7
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            <span className="block">Réservez Votre</span>
            <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-green-400 bg-clip-text text-transparent">
              Réparation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Système de réservation en ligne simple et rapide. 
            <strong className="text-white">Confirmation immédiate garantie.</strong>
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

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi Réserver en Ligne ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un système moderne pour une expérience client optimale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tous Types d'Appareils
            </h2>
            <p className="text-lg text-gray-600">
              Nous réparons tous vos équipements informatiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deviceTypes.map((device, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <div className="text-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <device.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{device.name}</h3>
                  <p className="text-sm text-gray-600">{device.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Problèmes courants:</h4>
                  <ul className="space-y-1">
                    {device.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment Ça Marche ?
            </h2>
            <p className="text-lg text-gray-600">
              Un processus simple en 5 étapes
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-200"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Step Circle */}
                  <div className="bg-white border-4 border-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-green-600 font-bold">{step.step}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-green-600 font-semibold">
                    ⏱ {step.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Réservez Maintenant
            </h2>
            <p className="text-lg text-gray-600">
              Remplissez le formulaire ci-dessous pour réserver votre créneau
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Préférez Nous Contacter Directement ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Notre équipe est disponible pour vous aider à prendre rendez-vous
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+212522XXXXXX"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              +212 5 22 XX XX XX
            </a>
            
            <a
              href="https://wa.me/212600XXXXXX?text=Je%20souhaite%20r%C3%A9server%20une%20r%C3%A9paration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-200">
            <div className="flex items-center justify-center">
              <Phone className="h-4 w-4 mr-2" />
              Lun-Ven: 8h-18h
            </div>
            <div className="flex items-center justify-center">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp: 24h/7j
            </div>
            <div className="flex items-center justify-center">
              <Zap className="h-4 w-4 mr-2" />
              Urgences: disponibles
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
