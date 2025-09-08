import { Metadata } from 'next';
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
  Monitor,
  Star,
  ShoppingCart
} from 'lucide-react';
import { LaptopAdmin } from '@/components/admin/laptop-admin';

export const metadata: Metadata = {
  title: 'Gestion Laptops - Admin | Bzz.ma',
  description: 'Interface d\'administration pour la gestion de l\'inventaire des laptops - Bzz.ma',
};

export default function LaptopAdminPage() {
  return <LaptopAdmin />;
}
