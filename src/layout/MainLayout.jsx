import { Fragment } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import SideMenu from "../components/SideMenu";
//
export default function MainLayout({ children }) {
  return (
    <div className="relative">
      {/* <SideMenu /> */}
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
