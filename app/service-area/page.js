import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceAreaHero from '@/components/ServiceAreaHero';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import CoverageAreas from '@/components/CoverageAreas';

export const metadata = {
  title: 'SpaceTime Towing & Recovery, LLC',
  description: 'View our towing service coverage areas. We provide 24/7 towing services across multiple cities and regions with fast response times.',
};

export default function ServiceArea() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServiceAreaHero />
      <ServiceAreaMap />
      <CoverageAreas />
      <Footer />
    </main>
  );
}