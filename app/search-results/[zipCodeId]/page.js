import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SearchResultsPage from "../../../components/SearchResultsPage";
import ContactBar from "@/components/ContactBar";

export const metadata = {
  title: "SpaceTime Towing & Recovery, LLC",
  description:
    "Request towing service online. Fill out our quick form and we'll get back to you immediately. Available 24/7 for emergency towing needs.",
};

export default function SearchResult() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SearchResultsPage />
      <ContactBar />
      <Footer />
    </main>
  );
}
