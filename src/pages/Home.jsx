import React from "react";
import MainLayout from "../layout/MainLayout";
import Banner from "../components/Banner";
import Service from "../components/Service";
import About from "../components/About";
import ChooseUs from "../components/ChooseUs";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
//
export default function Home() {
  //
  return (
    <MainLayout>
      <Banner />
      <Service />
      <About />
      <ChooseUs />
      <Portfolio />
      <Testimonial />
      <Contact />
    </MainLayout>
  );
}
