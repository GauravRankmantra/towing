import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const metadata = {
  title: "SpaceTime Towing & Recovery, LLC",
  description:
    "Contact SpaceTime Towing Services for all your towing needs. Call us 24/7 at (555) 123-TOWS or fill out our contact form for a quick response.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  );
}
