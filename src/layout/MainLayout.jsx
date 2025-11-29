import { Fragment } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
//
export default function MainLayout({ children }) {
  return (
    <div className="relative">
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
