import { Fragment } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
//
export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Nav />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
