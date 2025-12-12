import Footer from "../components/Footer";
import Header from "../components/Header";
//
export default function MainLayout({ children }) {
  return (
    <div className="relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
