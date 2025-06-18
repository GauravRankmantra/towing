import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import WhyChooseUs from '@/components/WhyChooseUs';
import CompanyHistory from '@/components/CompanyHistory';

export const metadata = {
  title: 'SpaceTime Towing & Recovery, LLC',
  description: 'Learn about Elite Towing Services. Family-owned business providing reliable towing and roadside assistance for over 15 years. Licensed, insured, and available 24/7.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <AboutHero />
      <CompanyHistory />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}