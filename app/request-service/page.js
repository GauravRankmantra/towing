import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RequestServiceHero from '@/components/RequestServiceHero';
import ServiceRequestForm from '@/components/ServiceRequestForm';

export const metadata = {
  title: 'SpaceTime Towing & Recovery, LLC',
  description: 'Request towing service online. Fill out our quick form and we\'ll get back to you immediately. Available 24/7 for emergency towing needs.',
};

export default function RequestService() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <RequestServiceHero />
      <ServiceRequestForm />
      <Footer />
    </main>
  );
}