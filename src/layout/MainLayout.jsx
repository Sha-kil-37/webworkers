import { Fragment } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
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
