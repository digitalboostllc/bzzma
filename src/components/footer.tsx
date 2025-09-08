'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle, Wrench, Laptop, Monitor, HardDrive, Globe, ShoppingCart, Building } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center group">
                <div className="relative">
                  {/* Geometric Logo Design */}
                  <div className="flex items-center space-x-1">
                    {/* Icon Element */}
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300">
                      {/* Main container - pure white */}
                      <div className="absolute inset-0 bg-white rounded-xl shadow-lg border border-slate-300/50"></div>
                      
                      {/* Bee body and design */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                          {/* Bee body (oval) - true black */}
                          <div className="absolute top-1/2 left-1/2 w-3 h-4 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                          
                          {/* Bee stripes - pure white */}
                          <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1"></div>
                          <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-white transform -translate-x-1/2 translate-y-0"></div>
                          <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-white transform -translate-x-1/2 translate-y-1"></div>
                          
                          {/* Bee head - true black */}
                          <div className="absolute top-0 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2"></div>
                          
                          {/* Wings - black like the bee */}
                          <div className="absolute top-1 left-0 w-1.5 h-2 bg-black rounded-full transform -rotate-12"></div>
                          <div className="absolute top-1 right-0 w-1.5 h-2 bg-black rounded-full transform rotate-12"></div>
                          
                          {/* Wing animation on hover - subtle effect */}
                          <div className="absolute top-1 left-0 w-1.5 h-2 bg-gray-800 rounded-full transform -rotate-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                          <div className="absolute top-1 right-0 w-1.5 h-2 bg-gray-800 rounded-full transform rotate-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Clean white glow on hover */}
                      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                    
                    {/* Text */}
                    <div className="ml-3">
                <span className="text-2xl sm:text-3xl tracking-wide text-white group-hover:text-slate-200 transition-all duration-300 drop-shadow-lg" style={{ fontFamily: "'Super Malibu', sans-serif" }}>
                  BZZ
                </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Votre partenaire IT 360° au Maroc. Réparation, création web, vente laptops et solutions entreprise. 
              <strong className="text-white">Un seul contact pour tous vos besoins technologiques.</strong>
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-slate-300">
                <MapPin className="h-5 w-5 mr-3 text-red-500" />
                <span>123 Avenue Mohammed V, Quartier Maarif, Casablanca</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="h-5 w-5 mr-3 text-red-500" />
                <a href="tel:+212522334455" className="hover:text-white transition-colors">
                  +212 5 22 33 44 55
                </a>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="h-5 w-5 mr-3 text-red-500" />
                <a href="mailto:contact@bzz.ma" className="hover:text-white transition-colors">
                  contact@bzz.ma
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/212600112233" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-2xl transition-all duration-300 hover:scale-110"
                title="WhatsApp Bzz"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-2xl transition-all duration-300 hover:scale-110"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-2xl transition-all duration-300 hover:scale-110"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 360° Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <Wrench className="h-5 w-5 mr-2 text-red-500" />
              Solutions 360°
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                  <Laptop className="h-4 w-4 mr-2 text-slate-500 group-hover:text-red-500 transition-colors" />
                  Réparation IT
                </Link>
              </li>
              <li>
                <Link href="/creation-web" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                  <Globe className="h-4 w-4 mr-2 text-slate-500 group-hover:text-blue-500 transition-colors" />
                  Création Web
                </Link>
              </li>
              <li>
                <Link href="/vente-laptops" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                  <ShoppingCart className="h-4 w-4 mr-2 text-slate-500 group-hover:text-green-500 transition-colors" />
                  Vente Laptops
                </Link>
              </li>
              <li>
                <Link href="/solutions-entreprise" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                  <Building className="h-4 w-4 mr-2 text-slate-500 group-hover:text-purple-500 transition-colors" />
                  Solutions Entreprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-slate-300 hover:text-white transition-colors">
                  Notre Processus
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-slate-300 hover:text-white transition-colors">
                  Réservation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Bzz.ma. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-4 text-slate-500 text-xs">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Service 24/7
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Intervention Rapide
                </span>
              </div>
            </div>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}