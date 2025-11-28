import { Fragment, lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import About from "../components/About";
import Loading from "../components/Loading";
import OurMission from "../components/OurMission";
import OurTeam from "../components/OurTeam";
import ChooseUs from "../components/ChooseUs";
import TrustedBy from "../components/TrustedBy";
import SmoothScroll from "../lib/utils/SmoothScroll";
import LetsTalk from "../components/LetsTalk";
import ContactForm from "../components/ContactForm";
//
export default function AboutPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <Fragment>
            <About />
            <OurMission />
            <OurTeam />
            <ChooseUs />
            <TrustedBy />
            <ContactForm />
          </Fragment>
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
