'use client';

import { Star, Quote, Building, MapPin, Users, ThumbsUp } from 'lucide-react';

interface TestimonialsProps {
  locale: string;
}

export function Testimonials() {

  const testimonials = [
    {
      text: "Bzz a transformé notre infrastructure IT. Service exceptionnel et équipe très professionnelle. Ils ont réparé notre flotte de 50 MacBook en temps record.",
      author: "Ahmed Bennani",
      company: "Directeur IT, TechCorp Maroc",
      location: "Casablanca",
      rating: 5,
      service: "Réparation de flotte",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      employees: "50+ employés"
    },
    {
      text: "Service impeccable pour nos ordinateurs de bureau. Intervention rapide et prix transparents. Je recommande vivement pour les entreprises.",
      author: "Sarah El Amrani",
      company: "Startup Tech Rabat",
      location: "Rabat",
      rating: 5,
      service: "Service sur site",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      employees: "20-50 employés"
    },
    {
      text: "Contrat de maintenance excellent ! Bzz s'occupe de tout notre parc informatique. Très réactifs en cas de problème.",
      author: "Youssef Tazi",
      company: "Cabinet d'Avocats",
      location: "Marrakech",
      rating: 5,
      service: "Maintenance préventive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      employees: "100+ employés"
    },
    {
      text: "Bzz a sauvé notre journée ! Écran cassé sur MacBook Pro, réparé en 3h chrono. Service exceptionnel.",
      author: "Laila Benjelloun",
      company: "Design Studio Casablanca",
      location: "Casablanca",
      rating: 5,
      service: "Réparation MacBook",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      employees: "10-20 employés"
    },
    {
      text: "Équipe très professionnelle. Ils gèrent notre parc informatique depuis 2 ans. Aucun problème !",
      author: "Omar Tazi",
      company: "Cabinet Comptable Tazi",
      location: "Fès",
      rating: 5,
      service: "Gestion de flotte",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      employees: "30+ employés"
    },
    {
      text: "Récupération de données critiques en urgence. Résultat parfait, délais respectés. Merci Bzz !",
      author: "Nadia El Fassi",
      company: "Clinique Privée",
      location: "Agadir",
      rating: 5,
      service: "Récupération données",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      employees: "50+ employés"
    }
  ];

  const stats = [
    { number: "98%", label: "Taux de satisfaction", icon: ThumbsUp },
    { number: "500+", label: "Entreprises clientes", icon: Building },
    { number: "24h", label: "Temps moyen intervention", icon: MapPin },
    { number: "4.9/5", label: "Note moyenne", icon: Star }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que disent nos clients entreprises sur nos services de réparation IT
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover-lift"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-red-200" />
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Service Tag */}
              <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
                {testimonial.service}
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1 space-x-3">
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {testimonial.employees}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              La Confiance de 500+ Entreprises Marocaines
            </h3>
            <p className="text-lg text-gray-600">
              De la startup au grand groupe, nous adaptons nos services à vos besoins
            </p>
          </div>

          {/* Client Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">PME & Startups</h4>
              <p className="text-gray-600">Solutions flexibles et abordables pour les petites structures</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Moyennes Entreprises</h4>
              <p className="text-gray-600">Gestion complète de parcs informatiques moyens</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Grandes Entreprises</h4>
              <p className="text-gray-600">Solutions enterprise avec SLA garantis</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Nos Certifications</h4>
              <p className="text-gray-600">Expertise reconnue par les plus grandes marques</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Certification placeholders */}
              <div className="bg-gray-100 rounded-lg px-6 py-3 font-semibold text-gray-700">Apple Certified</div>
              <div className="bg-gray-100 rounded-lg px-6 py-3 font-semibold text-gray-700">Dell Partner</div>
              <div className="bg-gray-100 rounded-lg px-6 py-3 font-semibold text-gray-700">HP Authorized</div>
              <div className="bg-gray-100 rounded-lg px-6 py-3 font-semibold text-gray-700">Lenovo Expert</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Rejoignez nos clients satisfaits
          </h3>
          <p className="text-gray-600 mb-8">
            Demandez votre devis gratuit et découvrez pourquoi tant d'entreprises nous font confiance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Demander un Devis Gratuit
            </button>
            <button className="btn-outline">
              Voir Plus de Témoignages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
