import { lazy, Suspense } from "react";
import Services from "../components/Services";
import Loading from "../components/Loading";
import OurValue from "../components/OurValue";
import SmoothScroll from "../lib/utils/SmoothScroll";
import Contact from "../components/Contact";
//
const MainLayout = lazy(() => import("../layout/MainLayout"));

//
export default function ServicesPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <Services />
          <OurValue />
          <Contact />
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
