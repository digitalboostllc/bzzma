'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  Package, 
  DollarSign,
  TrendingUp,
  AlertCircle,
  Monitor
} from 'lucide-react';
import toast from 'react-hot-toast';

interface Laptop {
  id: string;
  brand: string;
  model: string;
  condition: string;
  processor: string;
  ram: string;
  storage: string;
  screen: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  category: string;
  features: string[];
  description?: string;
  images: string[];
  createdAt: string;
  sales: any[];
}

interface Stats {
  total: number;
  inStock: number;
  outOfStock: number;
  inventoryValue: number;
  salesThisMonth: number;
}

const conditionLabels = {
  NEW: { label: "Neuf", color: "bg-green-100 text-green-800" },
  REFURBISHED_EXCELLENT: { label: "Reconditionné Excellent", color: "bg-blue-100 text-blue-800" },
  REFURBISHED_GOOD: { label: "Reconditionné Bon", color: "bg-yellow-100 text-yellow-800" },
  USED_GOOD: { label: "Occasion Bon État", color: "bg-orange-100 text-orange-800" }
};

const categoryLabels = {
  MACBOOK: { label: "MacBook", color: "bg-gray-100 text-gray-800" },
  BUSINESS: { label: "Business", color: "bg-blue-100 text-blue-800" },
  GAMING: { label: "Gaming", color: "bg-red-100 text-red-800" },
  BUDGET: { label: "Budget", color: "bg-green-100 text-green-800" },
  WORKSTATION: { label: "Workstation", color: "bg-purple-100 text-purple-800" }
};

export function LaptopAdmin() {
  const [laptops, setLaptops] = useState<Laptop[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    condition: '',
    inStock: ''
  });

  // Fetch laptops data
  const fetchLaptops = async () => {
    try {
      const params = new URLSearchParams();
      if (filters.search) params.append('search', filters.search);
      if (filters.category) params.append('category', filters.category);
      if (filters.condition) params.append('condition', filters.condition);
      if (filters.inStock) params.append('inStock', filters.inStock);

      const response = await fetch(`/api/admin/laptops?${params}`);
      const data = await response.json();

      if (data.success) {
        setLaptops(data.data);
      } else {
        toast.error('Erreur lors du chargement des laptops');
      }
    } catch (error) {
      toast.error('Erreur de connexion');
      console.error('Error fetching laptops:', error);
    }
  };

  // Fetch stats data
  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      const data = await response.json();

      if (data.success) {
        setStats(data.data.laptops);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // Delete laptop
  const deleteLaptop = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce laptop ?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/laptops/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();

      if (data.success) {
        toast.success('Laptop supprimé avec succès');
        fetchLaptops();
        fetchStats();
      } else {
        toast.error(data.error || 'Erreur lors de la suppression');
      }
    } catch (error) {
      toast.error('Erreur lors de la suppression');
      console.error('Error deleting laptop:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchLaptops(), fetchStats()]);
      setLoading(false);
    };

    loadData();
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600">Chargement des laptops...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Gestion Laptops</h1>
            <p className="text-slate-600 mt-2">Gérez l'inventaire et les ventes de laptops</p>
          </div>
          <Link 
            href="/admin/laptops/add" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Ajouter Laptop
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Total Laptops</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{stats.total}</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium text-blue-600">Inventaire complet</span>
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-xl">
                <Monitor className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">En Stock</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{stats.inStock}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${stats.outOfStock > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                    {stats.outOfStock} en rupture
                  </span>
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-xl">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Valeur Inventaire</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{(stats.inventoryValue / 1000).toFixed(0)}K DH</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium text-green-600">Stock total</span>
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-xl">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Ventes ce Mois</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{stats.salesThisMonth}</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium text-green-600">Unités vendues</span>
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-xl">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher par marque, modèle..."
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:w-auto">
            <select 
              className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="">Toutes Catégories</option>
              <option value="MACBOOK">MacBook</option>
              <option value="BUSINESS">Business</option>
              <option value="GAMING">Gaming</option>
              <option value="BUDGET">Budget</option>
              <option value="WORKSTATION">Workstation</option>
            </select>
            
            <select 
              className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.condition}
              onChange={(e) => handleFilterChange('condition', e.target.value)}
            >
              <option value="">Toutes Conditions</option>
              <option value="NEW">Neuf</option>
              <option value="REFURBISHED_EXCELLENT">Reconditionné Excellent</option>
              <option value="REFURBISHED_GOOD">Reconditionné Bon</option>
              <option value="USED_GOOD">Occasion</option>
            </select>
            
            <select 
              className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.inStock}
              onChange={(e) => handleFilterChange('inStock', e.target.value)}
            >
              <option value="">Stock</option>
              <option value="inStock">En Stock</option>
              <option value="outOfStock">Rupture</option>
            </select>
            
            <button 
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center"
              onClick={() => setFilters({ search: '', category: '', condition: '', inStock: '' })}
            >
              <Filter className="h-5 w-5 mr-2" />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Laptop Inventory Grid */}
      {laptops.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laptops.map((laptop) => (
            <div key={laptop.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Laptop Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200">
                {!laptop.inStock && (
                  <div className="absolute top-3 left-3 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    Rupture
                  </div>
                )}
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${conditionLabels[laptop.condition as keyof typeof conditionLabels]?.color || 'bg-gray-100 text-gray-800'}`}>
                    {conditionLabels[laptop.condition as keyof typeof conditionLabels]?.label || laptop.condition}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Monitor className="h-16 w-16 text-slate-400" />
                </div>
              </div>

              {/* Laptop Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{laptop.brand} {laptop.model}</h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${categoryLabels[laptop.category as keyof typeof categoryLabels]?.color || 'bg-gray-100 text-gray-800'}`}>
                      {categoryLabels[laptop.category as keyof typeof categoryLabels]?.label || laptop.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-slate-900">{laptop.price.toLocaleString()} DH</div>
                    {laptop.originalPrice && laptop.originalPrice > laptop.price && (
                      <div className="text-sm text-slate-500 line-through">{laptop.originalPrice.toLocaleString()} DH</div>
                    )}
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-slate-600">
                    <strong>Processeur:</strong> {laptop.processor}
                  </div>
                  <div className="text-sm text-slate-600">
                    <strong>RAM:</strong> {laptop.ram} • <strong>Stockage:</strong> {laptop.storage}
                  </div>
                  <div className="text-sm text-slate-600">
                    <strong>Écran:</strong> {laptop.screen}
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {laptop.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                  {laptop.features.length > 3 && (
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                      +{laptop.features.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-medium transition-colors flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Voir
                  </button>
                  <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2 rounded-xl transition-colors">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => deleteLaptop(laptop.id)}
                    className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-xl transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Monitor className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900 mb-2">Aucun laptop trouvé</h3>
          <p className="text-slate-600 mb-6">Aucun laptop ne correspond à vos critères de recherche.</p>
          <Link 
            href="/admin/laptops/add"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Ajouter le Premier Laptop
          </Link>
        </div>
      )}
    </div>
  );
}
