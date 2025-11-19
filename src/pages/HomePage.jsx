import { Fragment, lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import Banner from "../components/Banner";
import Services from "../components/Services";
import Credibility from "../components/Credibility";
import Testimonials from "../components/Testimonials";
import LetsTalk from "../components/LetsTalk";
import Loading from "../components/Loading";
import SmoothScroll from "../lib/utils/SmoothScroll";
import TrustedBy from "../components/TrustedBy";

//
export default function HomePage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <Fragment>
            <Banner />
            <Services />
            <Credibility />
            <Testimonials />
             <TrustedBy/>
            <LetsTalk />
          </Fragment>
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
