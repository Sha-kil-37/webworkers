import Footer from "../components/Footer";
import Nav from "../components/Nav";
import WhatsAppButton from "../components/WhatsAppButton";
import { SearchProvider } from "../context/SearchContext";
//
export default function MainLayout({ children }) {
  //

  //
  return (
    <SearchProvider>
      <div className="relative dark:bg-[#232729] dark:text-white">
        <Nav />
        {/* <WhatsAppButton /> */}
        <main>{children}</main>
        <Footer />
      </div>
    </SearchProvider>
  );
}
