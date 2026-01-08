import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import WhatsAppButton from "../components/WhatsAppButton";
import { SearchProvider } from "../context/SearchContext";
//
export default function MainLayout({ children }) {
  //

  //
  return (
    <SearchProvider>
      <div className="relative dark:bg-[#0F0F0F] dark:text-white">
        <Nav />
        <WhatsAppButton />
        <main>{children}</main>
        <Footer />
        <MobileNav />
      </div>
    </SearchProvider>
  );
}
