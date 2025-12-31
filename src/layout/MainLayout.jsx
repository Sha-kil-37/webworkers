import Footer from "../components/Footer";
import Nav from "../components/Nav";
import WhatsAppButton from "../components/WhatsAppButton";
import SmoothScroll from "../lib/utils/SmoothScroll";
import { SearchProvider } from "../context/SearchContext";
//
export default function MainLayout({ children }) {
  //

  //
  return (
    <SearchProvider>
      <SmoothScroll>
        <div className="relative dark:bg-black/80 dark:text-white">
          <Nav />
          <WhatsAppButton />
          <main>{children}</main>
          <Footer />
        </div>
      </SmoothScroll>
    </SearchProvider>
  );
}
