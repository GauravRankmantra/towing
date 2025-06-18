import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServiceCards from "@/components/ServiceCards";

export const metadata = {
  title: "SpaceTime Towing & Recovery, LLC",
  description:
    "Complete towing services including light duty, medium duty, heavy duty towing, roadside assistance, long distance towing, and emergency recovery services.",
};

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServicesHero />
      <ServiceCards />
      <Footer />
    </main>
  );
}
