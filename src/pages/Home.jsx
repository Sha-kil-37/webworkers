import React, { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
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
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold text-center">Loading...</h1>
        </div>
      }
    >
      <MainLayout>
        <Banner />
        <Service />
        <About />
        <ChooseUs />
        <Portfolio />
        <Testimonial />
        <Contact />
      </MainLayout>
    </Suspense>
  );
}
