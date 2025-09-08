import { Metadata } from 'next';
import Link from 'next/link';
import { AdminDashboard } from '@/components/admin/dashboard';
import { 
  BarChart3,
  Users,
  Globe,
  Laptop,
  Building,
  MessageSquare,
  Calendar,
  DollarSign,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  Eye,
  Mail,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tableau de Bord Admin | Bzz.ma',
  description: 'Interface d\'administration - Tableau de bord principal Bzz.ma',
};

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}