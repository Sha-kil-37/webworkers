import React, { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import Contact from "../components/Contact";
import Loading from "../components/Loading";
import SmoothScroll from "../lib/utils/SmoothScroll";

//
export default function ContactPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <Contact />
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
