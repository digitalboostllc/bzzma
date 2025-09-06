'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogOut, Settings, User, Shield, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simple authentication check using localStorage
    const adminAuth = localStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Chargement du tableau de bord...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <>
      {/* Admin Header - Glassmorphism Style */}
      <nav className="fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-[90%] max-w-5xl">
        <div className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl shadow-black/10 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-4 sm:px-8 transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
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
              <div className="hidden lg:flex items-center space-x-2 ml-6 bg-red-50 px-3 py-1 rounded-full">
                <Shield className="h-4 w-4 text-red-600" />
                <span className="text-red-700 font-medium text-sm">Admin</span>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden lg:flex items-center space-x-3 text-sm">
                <User className="h-4 w-4 text-slate-500" />
                <span className="text-slate-700 font-medium">admin@bzz.ma</span>
              </div>
              
              <button
                onClick={handleLogout}
                className="group bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                title="Déconnexion"
              >
                <LogOut className="h-4 w-4 inline sm:mr-2 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-slate-50 pt-20 sm:pt-24">
        {children}
      </main>
    </>
  );
}

function AdminLogin({ setIsAuthenticated }: { setIsAuthenticated: (auth: boolean) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simple admin check
      if (email === 'admin@bzz.ma' && password === 'BzzAdmin2024!') {
        localStorage.setItem('adminAuth', 'true');
        setIsAuthenticated(true);
      } else {
        setError('Email ou mot de passe incorrect');
      }
    } catch (error) {
      setError('Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center group">
            <div className="relative">
              {/* Geometric Logo Design */}
              <div className="flex items-center space-x-1">
                {/* Icon Element */}
                <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-lg transform rotate-12"></div>
                  <div className="absolute inset-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-md flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-orange-400 rounded-sm"></div>
                  </div>
                </div>
                
                {/* Text */}
                <div className="ml-3">
                  <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-red-600 bg-clip-text text-transparent">
                    Bzz
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <Shield className="h-6 w-6 text-red-600" />
            <h1 className="text-2xl font-bold text-slate-900">Administration</h1>
          </div>
          <p className="text-slate-600 mt-2">Connectez-vous pour accéder au tableau de bord</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email administrateur
              </label>
              <div className="relative">
                <Mail className="h-5 w-5 absolute left-3 top-3 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="admin@bzz.ma"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="h-5 w-5 absolute left-3 top-3 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-medium text-slate-900 mb-2">Identifiants de démonstration:</h3>
            <p className="text-sm text-slate-600">Email: admin@bzz.ma</p>
            <p className="text-sm text-slate-600">Mot de passe: BzzAdmin2024!</p>
          </div>
        </div>

        {/* Back to Website */}
        <div className="text-center mt-6">
          <Link 
            href="/" 
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            ← Retour au site web
          </Link>
        </div>
      </div>
    </div>
  );
}