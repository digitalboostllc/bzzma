'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, Laptop, Monitor, Cpu, HardDrive, MemoryStick, Battery, Shield, Award, CheckCircle, Star, Users, Calendar, MessageCircle, Zap, Wrench, Filter, Grid, List, Search, Heart, GitCompare, SlidersHorizontal, ChevronDown, X, Plus, Minus } from 'lucide-react';

export default function VenteLaptopsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [] as string[],
    category: [] as string[],
    condition: [] as string[],
    priceRange: '',
    processor: [] as string[],
    ram: [] as string[]
  });
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const laptopInventory = [
    {
      id: 1,
      brand: 'Apple',
      model: 'MacBook Air M2',
      price: 18500,
      originalPrice: 22000,
      condition: 'Reconditionné Excellent',
      category: 'MacBook',
      processor: 'Apple M2 8-core',
      ram: '8GB',
      storage: '256GB SSD',
      screen: '13.6" Retina',
      image: '/api/placeholder/400/300',
      inStock: true,
      quantity: 5,
      rating: 4.8,
      reviews: 124,
      features: ['Garantie 1 an', 'Batterie neuve', 'Clavier AZERTY', 'Touch ID'],
      specs: {
        graphics: 'Apple M2 GPU 8-core',
        battery: 'Jusqu\'à 18h',
        weight: '1.24 kg',
        ports: '2x Thunderbolt/USB 4'
      }
    },
    {
      id: 2,
      brand: 'Dell',
      model: 'XPS 13 Plus',
      price: 15800,
      originalPrice: 19500,
      condition: 'Neuf',
      category: 'Business',
      processor: 'Intel i7-12700H',
      ram: '16GB',
      storage: '512GB SSD',
      screen: '13.4" 4K OLED',
      image: '/api/placeholder/400/300',
      inStock: true,
      quantity: 3,
      rating: 4.6,
      reviews: 89,
      features: ['Windows 11 Pro', 'Thunderbolt 4', 'Design premium', 'Écran tactile'],
      specs: {
        graphics: 'Intel Iris Xe',
        battery: 'Jusqu\'à 12h',
        weight: '1.26 kg',
        ports: '2x Thunderbolt 4'
      }
    },
    {
      id: 3,
      brand: 'HP',
      model: 'EliteBook 840 G9',
      price: 12900,
      originalPrice: 16200,
      condition: 'Reconditionné Comme Neuf',
      category: 'Business',
      processor: 'Intel i5-1235U',
      ram: '16GB',
      storage: '256GB SSD',
      screen: '14" Full HD',
      image: '/api/placeholder/400/300',
      inStock: true,
      quantity: 8,
      rating: 4.5,
      reviews: 156,
      features: ['Sécurité entreprise', 'Clavier rétroéclairé', 'Webcam HD', 'Lecteur empreintes'],
      specs: {
        graphics: 'Intel Iris Xe',
        battery: 'Jusqu\'à 14h',
        weight: '1.36 kg',
        ports: '2x USB-A, 2x USB-C'
      }
    },
    {
      id: 4,
      brand: 'ASUS',
      model: 'ROG Strix G15',
      price: 24500,
      originalPrice: 28000,
      condition: 'Reconditionné Excellent',
      category: 'Gaming',
      processor: 'AMD Ryzen 7 5800H',
      ram: '16GB',
      storage: '1TB SSD',
      screen: '15.6" 144Hz',
      image: '/api/placeholder/400/300',
      inStock: true,
      quantity: 2,
      rating: 4.7,
      reviews: 203,
      features: ['RTX 3060', 'RGB Keyboard', 'Refroidissement gaming', 'Audio premium'],
      specs: {
        graphics: 'NVIDIA RTX 3060 6GB',
        battery: 'Jusqu\'à 8h',
        weight: '2.3 kg',
        ports: '3x USB-A, 1x USB-C, HDMI'
      }
    },
    {
      id: 5,
      brand: 'Lenovo',
      model: 'ThinkPad X1 Carbon',
      price: 16500,
      originalPrice: 20000,
      condition: 'Reconditionné Excellent',
      category: 'Business',
      processor: 'Intel i7-1165G7',
      ram: '16GB',
      storage: '512GB SSD',
      screen: '14" 2K',
      image: '/api/placeholder/400/300',
      inStock: true,
      quantity: 4,
      rating: 4.9,
      reviews: 78,
      features: ['Ultra-léger', 'Clavier légendaire', 'Sécurité renforcée', 'Certifié militaire'],
      specs: {
        graphics: 'Intel Iris Xe',
        battery: 'Jusqu\'à 16h',
        weight: '1.13 kg',
        ports: '2x USB-C, 2x USB-A'
      }
    },
    {
      id: 6,
      brand: 'Acer',
      model: 'Aspire 5',
      price: 6500,
      originalPrice: 8000,
      condition: 'Reconditionné Bon',
      category: 'Budget',
      processor: 'AMD Ryzen 5 5500U',
      ram: '8GB',
      storage: '256GB SSD',
      screen: '15.6" Full HD',
      image: '/api/placeholder/400/300',
      inStock: true,
      quantity: 12,
      rating: 4.2,
      reviews: 445,
      features: ['Prix abordable', 'Performances correctes', 'Garantie incluse', 'Idéal étudiant'],
      specs: {
        graphics: 'AMD Radeon',
        battery: 'Jusqu\'à 8h',
        weight: '1.7 kg',
        ports: '2x USB-A, 1x USB-C, HDMI'
      }
    }
  ];

  const filterOptions = {
    brand: ['Apple', 'Dell', 'HP', 'ASUS', 'Lenovo', 'Acer'],
    category: ['MacBook', 'Business', 'Gaming', 'Budget', 'Workstation'],
    condition: ['Neuf', 'Reconditionné Excellent', 'Reconditionné Comme Neuf', 'Reconditionné Bon'],
    processor: ['Apple M2', 'Intel i7', 'Intel i5', 'AMD Ryzen 7', 'AMD Ryzen 5'],
    ram: ['8GB', '16GB', '32GB'],
    priceRanges: [
      { label: 'Moins de 10 000 DH', value: '0-10000' },
      { label: '10 000 - 15 000 DH', value: '10000-15000' },
      { label: '15 000 - 20 000 DH', value: '15000-20000' },
      { label: '20 000 - 30 000 DH', value: '20000-30000' },
      { label: 'Plus de 30 000 DH', value: '30000-999999' }
    ]
  };

  const stats = [
    { icon: ShoppingCart, number: "200+", label: "Laptops vendus" },
    { icon: Users, number: "98%", label: "Clients satisfaits" },
    { icon: Shield, number: "12 mois", label: "Garantie minimum" },
    { icon: Zap, number: "24h", label: "Livraison rapide" }
  ];

  const toggleFilter = (filterType: keyof typeof selectedFilters, value: string) => {
    if (filterType === 'priceRange') {
      setSelectedFilters(prev => ({
        ...prev,
        [filterType]: prev[filterType] === value ? '' : value
      }));
    } else {
      setSelectedFilters(prev => ({
        ...prev,
        [filterType]: prev[filterType].includes(value)
          ? prev[filterType].filter(item => item !== value)
          : [...prev[filterType], value]
      }));
    }
  };

  const clearFilters = () => {
    setSelectedFilters({
      brand: [],
      category: [],
      condition: [],
      priceRange: '',
      processor: [],
      ram: []
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-30"></div>
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-colors backdrop-blur-sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Boutique Laptops Professionnels
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            <span className="block">Boutique Laptops</span>
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Neufs & Reconditionnés
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Plus de 200 laptops disponibles. MacBook, PC Pro, Gaming. Toutes marques, toutes gammes. 
            <strong className="text-white">Garantie, livraison et support inclus.</strong>
          </p>
          
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

      {/* E-commerce Store Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Controls Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un laptop..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                
                {/* Sort Dropdown */}
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="featured">En vedette</option>
                    <option value="price-low">Prix croissant</option>
                    <option value="price-high">Prix décroissant</option>
                    <option value="newest">Plus récents</option>
                    <option value="rating">Mieux notés</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>

                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <SlidersHorizontal className="h-5 w-5" />
                  Filtres
                </button>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedFilters.brand.length > 0 || selectedFilters.category.length > 0 || selectedFilters.condition.length > 0 || selectedFilters.priceRange) && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium text-gray-700">Filtres actifs:</span>
                  
                  {[...selectedFilters.brand, ...selectedFilters.category, ...selectedFilters.condition].map((filter, index) => (
                    <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {filter}
                      <button 
                        onClick={() => {
                          // Remove filter logic here
                        }}
                        className="hover:bg-blue-200 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  
                  {selectedFilters.priceRange && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {filterOptions.priceRanges.find(range => range.value === selectedFilters.priceRange)?.label}
                      <button 
                        onClick={() => setSelectedFilters(prev => ({ ...prev, priceRange: '' }))}
                        className="hover:bg-blue-200 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-600 hover:text-gray-800 underline"
                  >
                    Effacer tout
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-8">
            
            {/* Sidebar Filters */}
            {showFilters && (
              <div className="w-80 flex-shrink-0">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Filtres</h3>
                  
                  {/* Brand Filter */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Marque</h4>
                    <div className="space-y-2">
                      {filterOptions.brand.map(brand => (
                        <label key={brand} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFilters.brand.includes(brand)}
                            onChange={() => toggleFilter('brand', brand)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-700">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Catégorie</h4>
                    <div className="space-y-2">
                      {filterOptions.category.map(category => (
                        <label key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFilters.category.includes(category)}
                            onChange={() => toggleFilter('category', category)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-700">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Condition Filter */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">État</h4>
                    <div className="space-y-2">
                      {filterOptions.condition.map(condition => (
                        <label key={condition} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFilters.condition.includes(condition)}
                            onChange={() => toggleFilter('condition', condition)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-700">{condition}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Prix</h4>
                    <div className="space-y-2">
                      {filterOptions.priceRanges.map(range => (
                        <label key={range.value} className="flex items-center">
                          <input
                            type="radio"
                            name="priceRange"
                            checked={selectedFilters.priceRange === range.value}
                            onChange={() => toggleFilter('priceRange', range.value)}
                            className="border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-700">{range.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* RAM Filter */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Mémoire RAM</h4>
                    <div className="space-y-2">
                      {filterOptions.ram.map(ram => (
                        <label key={ram} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFilters.ram.includes(ram)}
                            onChange={() => toggleFilter('ram', ram)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-700">{ram}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Product Grid/List */}
            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-gray-600">
                  {laptopInventory.length} laptops disponibles
                </p>
              </div>

              {viewMode === 'grid' ? (
                /* Grid View */
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {laptopInventory.map((laptop) => (
                    <div key={laptop.id} className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      
                      {/* Product Image */}
                      <div className="relative aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-100 to-gray-200 p-8">
                        <div className="flex items-center justify-center">
                          <Laptop className="h-20 w-20 text-gray-400" />
                        </div>
                        
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          {laptop.originalPrice && (
                            <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-lg">
                              -{Math.round((1 - laptop.price / laptop.originalPrice) * 100)}%
                            </span>
                          )}
                          <span className={`px-2 py-1 text-xs font-semibold rounded-lg ${
                            laptop.condition === 'Neuf' 
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {laptop.condition}
                          </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm transition-colors">
                            <Heart className="h-4 w-4 text-gray-600" />
                          </button>
                          <button className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm transition-colors">
                            <GitCompare className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <div className="mb-3">
                          <h3 className="font-bold text-gray-900 text-lg mb-1">
                            {laptop.brand} {laptop.model}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(laptop.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              <span className="ml-1 text-sm text-gray-600">
                                {laptop.rating} ({laptop.reviews})
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Key Specs */}
                        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Cpu className="h-4 w-4 mr-1" />
                            {laptop.processor.split(' ').slice(0, 2).join(' ')}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MemoryStick className="h-4 w-4 mr-1" />
                            {laptop.ram}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <HardDrive className="h-4 w-4 mr-1" />
                            {laptop.storage}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Monitor className="h-4 w-4 mr-1" />
                            {laptop.screen.split(' ')[0]}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {laptop.features.slice(0, 2).map((feature, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
                                {feature}
                              </span>
                            ))}
                            {laptop.features.length > 2 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
                                +{laptop.features.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Price and Stock */}
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-gray-900">
                                {laptop.price.toLocaleString()} DH
                              </span>
                              {laptop.originalPrice && (
                                <span className="text-lg text-gray-500 line-through">
                                  {laptop.originalPrice.toLocaleString()} DH
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-green-600">
                              En stock ({laptop.quantity} disponibles)
                            </p>
                          </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                          <ShoppingCart className="h-5 w-5" />
                          Ajouter au panier
                        </button>

                        {/* Quick View Link */}
                        <Link 
                          href={`/laptop/${laptop.id}`}
                          className="block w-full text-center py-2 text-blue-600 hover:text-blue-700 font-medium mt-2"
                        >
                          Voir détails
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* List View */
                <div className="space-y-4">
                  {laptopInventory.map((laptop) => (
                    <div key={laptop.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex gap-6">
                        
                        {/* Product Image */}
                        <div className="flex-shrink-0 w-48 aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6">
                          <div className="flex items-center justify-center">
                            <Laptop className="h-16 w-16 text-gray-400" />
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-bold text-gray-900 text-xl mb-2">
                                {laptop.brand} {laptop.model}
                              </h3>
                              <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < Math.floor(laptop.rating)
                                          ? 'text-yellow-400 fill-current'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                  <span className="ml-2 text-sm text-gray-600">
                                    {laptop.rating} ({laptop.reviews} avis)
                                  </span>
                                </div>
                                <span className={`px-3 py-1 text-sm font-semibold rounded-lg ${
                                  laptop.condition === 'Neuf' 
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-blue-100 text-blue-700'
                                }`}>
                                  {laptop.condition}
                                </span>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-3xl font-bold text-gray-900">
                                  {laptop.price.toLocaleString()} DH
                                </span>
                                {laptop.originalPrice && (
                                  <span className="text-xl text-gray-500 line-through">
                                    {laptop.originalPrice.toLocaleString()} DH
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-green-600 mb-4">
                                En stock ({laptop.quantity} disponibles)
                              </p>
                              
                              <div className="flex gap-2">
                                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors flex items-center gap-2">
                                  <ShoppingCart className="h-4 w-4" />
                                  Ajouter au panier
                                </button>
                                <Link 
                                  href={`/laptop/${laptop.id}`}
                                  className="px-6 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl font-semibold transition-colors"
                                >
                                  Détails
                                </Link>
                              </div>
                            </div>
                          </div>

                          {/* Specifications Grid */}
                          <div className="grid grid-cols-4 gap-4 mb-4">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center mb-1">
                                <Cpu className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-sm font-medium text-gray-700">Processeur</span>
                              </div>
                              <p className="text-gray-900 font-semibold">{laptop.processor}</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center mb-1">
                                <MemoryStick className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-sm font-medium text-gray-700">RAM</span>
                              </div>
                              <p className="text-gray-900 font-semibold">{laptop.ram}</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center mb-1">
                                <HardDrive className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-sm font-medium text-gray-700">Stockage</span>
                              </div>
                              <p className="text-gray-900 font-semibold">{laptop.storage}</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center mb-1">
                                <Monitor className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-sm font-medium text-gray-700">Écran</span>
                              </div>
                              <p className="text-gray-900 font-semibold">{laptop.screen}</p>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="flex flex-wrap gap-2">
                            {laptop.features.map((feature, i) => (
                              <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services & Guarantees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Services Inclus avec Chaque Achat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bien plus qu'un simple achat, un service complet pour votre tranquillité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Garantie 12 Mois</h3>
              <p className="text-gray-600">Garantie complète sur tous nos laptops reconditionnés et neufs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Livraison 24-48h</h3>
              <p className="text-gray-600">Livraison rapide partout au Maroc avec suivi en temps réel</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Configuration Gratuite</h3>
              <p className="text-gray-600">Installation et configuration selon vos besoins spécifiques</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Support Technique</h3>
              <p className="text-gray-600">Support client dédié et assistance technique continue</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions sur nos Laptops ?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour vous conseiller et vous aider à choisir le laptop parfait
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Nous Contacter
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/booking" className="group border-2 border-white/30 hover:border-white/50 text-white hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              Visiter Notre Showroom
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}