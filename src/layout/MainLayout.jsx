import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
//
export default function MainLayout({ children }) {
  //

  //
  return (
    <div className="relative">
      <Header />
      <WhatsAppButton />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
