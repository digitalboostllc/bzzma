import { Metadata } from 'next';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Navigation,
  Building,
  Users,
  Zap,
  Shield,
  Award,
  HeadphonesIcon
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Contact Bzz.ma - Réparation IT Maroc',
  description: 'Contactez Bzz pour vos réparations IT au Maroc. Devis gratuit, intervention rapide à Casablanca, Rabat, Marrakech. Support 24/7.',
  keywords: 'contact Bzz Maroc, réparation ordinateur Casablanca, service IT Rabat, devis gratuit réparation'
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      primary: "+212 5 22 33 44 55",
      secondary: "Casablanca",
      description: "Lun-Ven: 8h-18h, Sam: 9h-13h",
      action: "tel:+212522334455",
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+212 6 00 11 22 33",
      secondary: "Réponse rapide",
      description: "Disponible 24h/7j pour urgences",
      action: "https://wa.me/212600112233",
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "contact@bzz.ma",
      secondary: "Support général",
      description: "Réponse sous 2h en moyenne",
      action: "mailto:contact@bzz.ma",
      color: "bg-red-500"
    },
    {
      icon: HeadphonesIcon,
      title: "Support Urgent",
      primary: "+212 6 66 77 88 99",
      secondary: "Urgences 24/7",
      description: "Pour pannes critiques uniquement",
      action: "tel:+212666778899",
      color: "bg-orange-500"
    }
  ];

  const offices = [
    {
      city: "Casablanca",
      address: "123 Avenue Mohammed V, Quartier Maarif",
      postal: "20000 Casablanca",
      phone: "+212 5 22 33 44 55",
      email: "casablanca@bzz.ma",
      hours: "Lun-Ven: 8h-18h, Sam: 9h-13h",
      isMain: true
    },
    {
      city: "Rabat",
      address: "45 Avenue Hassan II, Agdal",
      postal: "10000 Rabat",
      phone: "+212 5 37 22 11 00",
      email: "rabat@bzz.ma",
      hours: "Lun-Ven: 9h-17h",
      isMain: false
    },
    {
      city: "Marrakech",
      address: "78 Avenue Mohammed VI, Gueliz",
      postal: "40000 Marrakech",
      phone: "+212 5 24 44 33 22",
      email: "marrakech@bzz.ma",
      hours: "Lun-Ven: 9h-17h",
      isMain: false
    }
  ];

  const serviceAreas = [
    {
      region: "Grand Casablanca",
      cities: ["Casablanca", "Mohammedia", "Ain Sebaa", "Bernoussi"],
      responseTime: "2-4h",
      availability: "24/7"
    },
    {
      region: "Rabat-Salé",
      cities: ["Rabat", "Salé", "Témara", "Skhirat"],
      responseTime: "4-6h",
      availability: "8h-18h"
    },
    {
      region: "Marrakech-Safi",
      cities: ["Marrakech", "Safi", "Essaouira"],
      responseTime: "6-8h",
      availability: "9h-17h"
    },
    {
      region: "Autres villes",
      cities: ["Fès", "Meknès", "Agadir", "Tanger"],
      responseTime: "Sur demande",
      availability: "Sur RDV"
    }
  ];

  const quickStats = [
    { icon: Zap, number: "< 2h", label: "Temps de réponse" },
    { icon: Users, number: "500+", label: "Entreprises clientes" },
    { icon: Shield, number: "98%", label: "Taux de satisfaction" },
    { icon: Award, number: "24/7", label: "Support urgence" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-emerald-400/15 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-colors backdrop-blur-sm">
            <MessageCircle className="h-4 w-4 mr-2" />
            Support 24/7 Disponible
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            <span className="block">Contactez-Nous</span>
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Immédiatement
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Besoin d'une réparation ? Notre équipe d'experts est disponible pour vous aider. 
            <strong className="text-white">Réponse rapide garantie.</strong>
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => (
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

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Plusieurs Moyens de Nous Contacter
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choisissez le canal de communication qui vous convient le mieux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover-lift border border-gray-100"
              >
                <div className={`${method.color} w-12 h-12 rounded-xl text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-gray-900 font-semibold mb-1">
                  {method.primary}
                </p>
                
                <p className="text-sm text-gray-500 mb-2">
                  {method.secondary}
                </p>
                
                <p className="text-xs text-gray-400">
                  {method.description}
                </p>
              </a>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full mr-3">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Urgence IT ?</h3>
            </div>
            <p className="text-red-100 mb-6">
              Panne critique qui bloque votre activité ? Nous intervenons dans l'heure !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+212666778899"
                className="inline-flex items-center justify-center bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Urgence: +212 6 66 77 88 99
              </a>
              <a
                href="https://wa.me/212600112233?text=URGENCE%20IT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Urgence
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envoyez-nous un Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Offices & Service Areas */}
            <div className="space-y-8">
              
              {/* Offices */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Nos Bureaux
                </h2>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className={`p-4 rounded-xl ${office.isMain ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}`}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-gray-900">
                          {office.city}
                          {office.isMain && (
                            <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                              Siège
                            </span>
                          )}
                        </h3>
                      </div>
                      
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          <div>
                            <p>{office.address}</p>
                            <p>{office.postal}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                          <a href={`tel:${office.phone}`} className="hover:text-red-600">
                            {office.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="hover:text-red-600">
                            {office.email}
                          </a>
                        </div>
                        
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Zones d'Intervention
                </h2>
                
                <div className="space-y-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{area.region}</h3>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {area.responseTime}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">
                        {area.cities.join(', ')}
                      </p>
                      
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        Disponibilité: {area.availability}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Service sur site disponible</strong> dans toutes les zones.
                    Frais de déplacement variables selon la distance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trouvez-Nous Facilement
            </h2>
            <p className="text-lg text-gray-600">
              Notre bureau principal à Casablanca
            </p>
          </div>

          {/* Google Maps */}
          <div className="bg-gray-200 rounded-2xl h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4659384616755!2d-7.6296756!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNyc0Ni44Ilc!5e0!3m2!1sen!2sma!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bzz Casablanca Location"
              className="rounded-2xl"
            />
          </div>

          {/* Directions */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Métro</h3>
              <p className="text-gray-600 text-sm">
                Station Maarif (Ligne 1)
                <br />5 min à pied
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Navigation className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Parking</h3>
              <p className="text-gray-600 text-sm">
                Parking gratuit disponible
                <br />Dans notre immeuble
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Repères</h3>
              <p className="text-gray-600 text-sm">
                Face au Twin Center
                <br />Près de McDonald's
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
