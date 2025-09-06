'use client';

import Link from 'next/link';
import { 
  Laptop, 
  Monitor, 
  HardDrive, 
  MapPin, 
  Database, 
  Settings,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Phone,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServicesOverviewProps {
  locale: string;
}

export function ServicesOverview() {

  const services = [
    {
      icon: Laptop,
      title: 'Réparation Laptops',
      description: 'Réparation professionnelle de MacBook, PC portables et ultrabooks avec garantie.',
      features: ['MacBook Pro/Air', 'Dell XPS/Latitude', 'HP EliteBook', 'Lenovo ThinkPad'],
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Monitor,
      title: 'Réparation PC Fixe',
      description: 'Maintenance et réparation d\'ordinateurs de bureau, optimisation et mise à niveau.',
      features: ['Ordinateurs sur mesure', 'Mise à niveau RAM/SSD', 'Réparation carte mère', 'Optimisation système'],
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: HardDrive,
      title: 'Remplacement Hardware',
      description: 'Remplacement de composants informatiques - RAM, SSD, écrans, claviers.',
      features: ['Mémoire RAM', 'Disques SSD/HDD', 'Écrans LCD/LED', 'Claviers/Trackpads'],
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Service sur Site',
      description: 'Intervention directement dans vos locaux pour maintenance et réparations urgentes.',
      features: ['Intervention rapide', 'Diagnostic sur place', 'Réparation immédiate', 'Formation utilisateurs'],
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Database,
      title: 'Récupération de Données',
      description: 'Récupération professionnelle de données perdues sur disques durs et serveurs.',
      features: ['Disques endommagés', 'Fichiers supprimés', 'Systèmes corrompus', 'Récupération serveur'],
      color: 'bg-red-500',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Settings,
      title: 'Maintenance Préventive',
      description: 'Contrats de maintenance et support technique pour assurer la continuité de votre activité.',
      features: ['Contrats sur mesure', 'Maintenance préventive', 'Support technique', 'Gestion de flotte'],
      color: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Intervention Rapide',
      description: 'Diagnostic en 24h, réparation express disponible'
    },
    {
      icon: Shield,
      title: 'Garantie Complète',
      description: 'Garantie sur toutes nos réparations et pièces'
    },
    {
      icon: Clock,
      title: 'Service 24/7',
      description: 'Support d\'urgence disponible tous les jours'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Services IT
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Solutions complètes de réparation IT pour entreprises marocaines. 
            De la réparation simple à la maintenance préventive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <ArrowRight className="h-5 w-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/services"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm group-hover:underline"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Bzz ?
            </h3>
            <p className="text-lg text-gray-600">
              L'expertise technique au service de votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'une Réparation Urgente ?
            </h4>
            <p className="text-gray-600 mb-6">
              Nos techniciens interviennent rapidement pour remettre vos équipements en service
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Demander un Devis Gratuit
              </Button>
              
              <Button variant="outline" size="lg" className="px-8">
                Réserver une Intervention
              </Button>
            </div>
            
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Réponse sous 2h
              </span>
              <span className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Devis gratuit
              </span>
              <span className="flex items-center">
                <Zap className="h-4 w-4 mr-1" />
                Service express
              </span>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold">Service d'Urgence 24h/7j</h4>
          </div>
          <p className="text-red-100 mb-4">
            Panne critique ? Intervention d'urgence dans l'heure partout au Maroc
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+212600XXXXXX"
              className="inline-flex items-center justify-center bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Urgence: +212 6 00 XX XX XX
            </a>
            <a
              href="https://wa.me/212600XXXXXX?text=Urgence%20IT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Urgence
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
