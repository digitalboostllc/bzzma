'use client';

import { Button } from '@/components/ui/button';
import { 
  Phone, 
  MessageCircle, 
  FileText, 
  Calendar,
  Laptop,
  Monitor,
  Wrench,
  Shield,
  Clock,
  Star,
  CheckCircle
} from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  
  const whatsappMessage = "Bonjour! Je souhaite obtenir un devis pour une réparation IT.";
  const whatsappLink = generateWhatsAppLink("+212600XXXXXX", whatsappMessage);

  const features = [
    { icon: Shield, text: "Garantie sur toutes réparations" },
    { icon: Clock, text: "Intervention sous 24h" },
    { icon: Star, text: "Techniciens certifiés" },
    { icon: CheckCircle, text: "Pièces originales" }
  ];

  const stats = [
    { number: "500+", label: "Entreprises clientes" },
    { number: "24h", label: "Temps d'intervention" },
    { number: "98%", label: "Taux de satisfaction" },
    { number: "10+", label: "Années d'expérience" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-40"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full blur-xl opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-200 rounded-full blur-xl opacity-60 animate-pulse delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
              <Wrench className="h-4 w-4 mr-2" />
              Solutions IT Professionnelles au Maroc
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Solutions IT</span>
                <br />
                <span className="text-gray-900">Professionnelles au Maroc</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Expert en réparation MacBook, PC et solutions IT au Maroc. Service rapide et fiable pour entreprises à Casablanca, Rabat, Marrakech.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <feature.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4">
                <FileText className="h-5 w-5 mr-2" />
                Obtenir un Devis
              </Button>
              
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Réserver une Intervention
              </Button>
            </div>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="tel:+212522XXXXXX"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Phone className="h-4 w-4 mr-2" />
                Appelez-nous
              </a>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-slide-in-right">
            {/* Main Image Placeholder */}
            <div className="relative bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 space-y-6">
                {/* Devices Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Laptop className="h-12 w-12 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Monitor className="h-12 w-12 text-gray-600" />
                  </div>
                  <div className="bg-green-100 rounded-xl p-4 flex items-center justify-center">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <div className="bg-blue-100 rounded-xl p-4 flex items-center justify-center">
                    <Wrench className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-red-600">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Service actif</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">4.9/5</span>
                  <Star className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.slice(2).map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift">
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted by Section */}
        <div className="mt-20 text-center animate-fade-in-up">
          <p className="text-gray-600 font-medium mb-8">
            Plus de 500 entreprises marocaines nous font confiance
          </p>
          
          {/* Company Logos Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-lg h-16 flex items-center justify-center">
                <span className="text-gray-500 font-bold">LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
