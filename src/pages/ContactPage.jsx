import { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import Contact from "../components/Contact";
import Loading from "../components/Loading";
import SmoothScroll from "../lib/utils/SmoothScroll";
import TrustedBy from "../components/TrustedBy";
import FAQ from "../components/FAQ";
//
//
export default function ContactPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <TrustedBy />
          <FAQ />
          <Contact />
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
