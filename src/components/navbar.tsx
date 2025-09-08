'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Réparation', href: '/services' },
    { name: 'Création Web', href: '/creation-web' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Laptops', href: '/vente-laptops' },
    { name: 'Entreprise', href: '/solutions-entreprise' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[96%] sm:w-[92%] max-w-6xl">
      <div className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl shadow-black/10 rounded-xl sm:rounded-2xl py-1.5 sm:py-2 px-4 sm:px-8 transition-all duration-300">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                {/* Geometric Logo Design */}
                                  <div className="flex items-center space-x-1">
                    {/* Bzz Bee Icon - Elegant Monochrome */}
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300">
                      {/* Main container - matching BZZ text gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-xl shadow-md"></div>
                      
                      {/* Bee body and design */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                          {/* Bee body (oval) - white */}
                          <div className="absolute top-1/2 left-1/2 w-3 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                          
                          {/* Bee stripes - dark to show on white body */}
                          <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-slate-700 transform -translate-x-1/2 -translate-y-1"></div>
                          <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-slate-700 transform -translate-x-1/2 translate-y-0"></div>
                          <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-slate-700 transform -translate-x-1/2 translate-y-1"></div>
                          
                          {/* Bee head - white */}
                          <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2"></div>
                          
                          {/* Wings - white */}
                          <div className="absolute top-1 left-0 w-1.5 h-2 bg-white rounded-full transform -rotate-12 opacity-90"></div>
                          <div className="absolute top-1 right-0 w-1.5 h-2 bg-white rounded-full transform rotate-12 opacity-90"></div>
                          
                          {/* Wing animation on hover - brighter white */}
                          <div className="absolute top-1 left-0 w-1.5 h-2 bg-white rounded-full transform -rotate-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 shadow-sm"></div>
                          <div className="absolute top-1 right-0 w-1.5 h-2 bg-white rounded-full transform rotate-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 shadow-sm"></div>
                        </div>
                      </div>
                      
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-slate-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                    
                    {/* Text */}
                    <div className="ml-2 sm:ml-3">
                      <span className="text-xl sm:text-3xl tracking-wide bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent group-hover:from-slate-900 group-hover:via-slate-600 group-hover:to-slate-800 transition-all duration-300 drop-shadow-sm" style={{ fontFamily: "'Super Malibu', sans-serif" }}>
                        BZZ
                      </span>
                    </div>
                  </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+212522334455"
              className="group text-slate-600 hover:text-slate-900 p-2 sm:p-3 rounded-xl hover:bg-slate-100 transition-all duration-300"
              title="Appelez-nous: +212 5 22 33 44 55"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
            </a>
            
            <Link
              href="/booking"
              className="group bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Réserver
              <ArrowRight className="inline ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="https://wa.me/212600112233"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-600 hover:bg-green-700 text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105"
              title="WhatsApp"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="/booking"
              className="group bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              Réserver
            </Link>
            
            <a
              href="https://wa.me/212600112233"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-600 hover:bg-green-700 text-white p-2 rounded-xl transition-all duration-300"
              title="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-white/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl border border-white/30">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <a
                  href="tel:+212522334455"
                  className="flex items-center text-slate-600 hover:text-slate-900 py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  +212 5 22 33 44 55
                </a>
                
                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="block bg-red-600 hover:bg-red-700 text-white text-center py-3 px-4 rounded-xl font-semibold transition-colors"
                >
                  Réserver une Intervention
                </Link>
                
                <a
                  href="https://wa.me/212600112233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
    </nav>
  );
}