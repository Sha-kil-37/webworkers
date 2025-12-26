import Footer from "../components/Footer";
import Nav from "../components/Nav";
import WhatsAppButton from "../components/WhatsAppButton";
// import SmoothScroll from "../lib/utils/SmoothScroll";
//
export default function MainLayout({ children }) {
  //

  //
  return (
    // <SmoothScroll>
      <div className="relative">
        <Nav />
        <WhatsAppButton />
        <main>{children}</main>
        <Footer />
      </div>
    // </SmoothScroll>
  );
}
