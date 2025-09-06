# Bzz.ma - Professional IT Repair Services Website

A modern, professional B2B IT repair service website built for Bzz, a Moroccan company specializing in laptop, PC repair, and hardware replacement services for businesses.

## 🌟 Features

### Core Features
- **Multi-language Support**: French, Arabic, and English with RTL support
- **Online Booking System**: Complete appointment scheduling with calendar integration
- **Contact Management**: Advanced contact forms with urgency levels
- **Service Showcase**: Comprehensive services pages with detailed pricing
- **Admin Dashboard**: Management interface for appointments and services
- **WhatsApp Integration**: Direct WhatsApp contact buttons throughout the site
- **Responsive Design**: Mobile-first approach with beautiful UI/UX

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework with custom Moroccan color palette
- **Prisma ORM**: Type-safe database access with PostgreSQL
- **NextAuth.js**: Authentication system for client portal
- **Internationalization**: next-intl for seamless language switching
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data

## 🎨 Design System

### Color Palette
- **Moroccan Red**: `#C53030` - Primary brand color
- **Moroccan Green**: `#38A169` - Secondary actions
- **Moroccan Gold**: `#D69E2E` - Accent and highlights
- **Dark variants**: For hover states and depth

### Typography
- **Latin text**: Inter font family
- **Arabic text**: Cairo font family with RTL support
- **Responsive sizing**: Scales beautifully across devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone and install dependencies**
```bash
cd profixma
npm install
```

2. **Set up environment variables**
Create a `.env.local` file:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/profixma"

# NextAuth.js
NEXTAUTH_SECRET="your-super-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Email (optional)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@bzz.ma"

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID="your-google-analytics-id"

# Site URL
NEXT_PUBLIC_SITE_URL="https://bzz.ma"
```

3. **Set up the database**
```bash
npx prisma generate
npx prisma migrate dev
```

4. **Run the development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📱 Pages Overview

### Public Pages
- **Homepage** (`/[locale]`): Hero section, services overview, testimonials
- **Services** (`/[locale]/services`): Detailed service listings with pricing
- **Process** (`/[locale]/process`): 5-step repair process explanation
- **Contact** (`/[locale]/contact`): Multiple contact methods, office locations
- **Booking** (`/[locale]/booking`): Online appointment scheduling system

### Admin Pages
- **Dashboard** (`/[locale]/admin`): Appointment management, statistics

### API Routes
- **Appointments** (`/api/appointments`): CRUD operations for bookings
- **Contact** (`/api/contact`): Contact form submissions
- **Auth** (`/api/auth/[...nextauth]`): Authentication endpoints

## 🛠 Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful SVG icons
- **React Hook Form**: Forms with validation
- **Zod**: Schema validation
- **React DatePicker**: Date selection component

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **Prisma ORM**: Type-safe database access
- **PostgreSQL**: Relational database
- **NextAuth.js**: Authentication system

### DevOps & Deployment
- **Vercel**: Recommended deployment platform
- **ESLint**: Code linting
- **TypeScript**: Static type checking

## 📊 Database Schema

### Key Models
- **Users**: Client accounts with company information
- **Appointments**: Booking system with device details
- **Services**: Service catalog with pricing
- **ContactMessages**: Contact form submissions
- **Quotes**: Repair estimates and pricing

### Enums
- **DeviceType**: MACBOOK, WINDOWS_LAPTOP, DESKTOP_PC, etc.
- **ServiceCategory**: LAPTOP_REPAIR, HARDWARE_REPLACEMENT, etc.
- **AppointmentStatus**: PENDING, CONFIRMED, IN_PROGRESS, COMPLETED
- **UrgencyLevel**: LOW, NORMAL, HIGH, URGENT

## 🌍 Internationalization

### Supported Languages
- **French (fr)**: Primary language, default
- **Arabic (ar)**: RTL support, Moroccan market
- **English (en)**: International clients

### Language Files
- `messages/fr.json`: French translations
- `messages/ar.json`: Arabic translations  
- `messages/en.json`: English translations

### RTL Support
- Automatic direction switching for Arabic
- RTL-optimized layouts and animations
- Arabic typography with Cairo font

## 📈 SEO Optimization

### Features
- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media optimization
- **Structured Data**: Local business schema markup
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling rules
- **Local SEO**: Moroccan cities and keywords

### Target Keywords
- "réparation ordinateur Maroc"
- "réparation MacBook Casablanca"  
- "services IT entreprises Maroc"
- "Bzz réparation"

## 🎯 Business Features

### Service Categories
1. **Laptop Repair**: MacBook, Windows laptops, screens, keyboards
2. **Desktop Repair**: PC maintenance, upgrades, troubleshooting
3. **Hardware Replacement**: RAM, SSD, components with original parts
4. **On-site Services**: Business location visits
5. **Data Recovery**: Professional file recovery services
6. **Maintenance Contracts**: Preventive maintenance for fleets

### Unique Selling Points
- **24/7 Emergency Support**: Critical business downtime assistance
- **Certified Technicians**: Manufacturer-certified repair experts
- **Original Parts Only**: Authentic components with warranties
- **Transparent Pricing**: Clear, upfront cost estimates
- **Local Expertise**: Understanding of Moroccan business needs

## 🔒 Security

### Authentication
- NextAuth.js with multiple providers
- Secure session management
- Role-based access control (CLIENT, ADMIN, TECHNICIAN)

### Data Protection
- Input validation with Zod schemas
- SQL injection prevention with Prisma
- XSS protection with Next.js built-ins
- CSRF protection

## 🚀 Deployment

### Recommended: Vercel
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Setup
- **Production Database**: Set up PostgreSQL (e.g., Supabase, PlanetScale)
- **Email Service**: Configure SMTP for notifications
- **Analytics**: Add Google Analytics tracking ID

### Performance
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic bundle optimization
- **Caching**: Static generation where possible
- **CDN**: Global content delivery via Vercel

## 📞 Contact & Support

### Business Information
- **Company**: Bzz.ma
- **Target Market**: B2B IT services in Morocco
- **Primary Locations**: Casablanca, Rabat, Marrakech
- **Services**: Laptop/PC repair, hardware replacement, IT support

### Development Support
- Professional implementation by experienced developers
- Full documentation and code comments
- Scalable architecture for growth
- Moroccan market expertise

## 🤝 Contributing

This is a commercial project for Bzz.ma. For modifications or enhancements:

1. **Business Requirements**: Ensure changes align with B2B service goals
2. **Moroccan Context**: Maintain cultural and linguistic appropriateness
3. **Performance**: Test on mobile devices common in Morocco
4. **Accessibility**: Ensure WCAG compliance for inclusive access

## 📄 License

This project is proprietary software developed for Bzz.ma. All rights reserved.

---

**Bzz.ma** - *Solutions IT Professionnelles pour Entreprises Marocaines* 🇲🇦

Built with ❤️ for the Moroccan business community.