import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import ServiceArea from "@/components/ServiceArea";
import Testimonials from "@/components/Testimonials";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <ServiceArea />
      <Testimonials />
      <ContactBar />
      <Footer />
    </main>
  );
}
