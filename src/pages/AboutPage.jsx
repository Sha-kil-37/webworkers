import { Fragment, lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import About from "../components/About";
import Loading from "../components/Loading";
import OurMission from "../components/OurMission";
import OurTeam from "../components/OurTeam";
import ChooseUs from "../components/ChooseUs";
import TrustedBy from "../components/TrustedBy";
//
export default function AboutPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <Fragment>
          <About />
          <OurMission />
          <OurTeam />
          <ChooseUs />
          <TrustedBy />
        </Fragment>
      </MainLayout>
    </Suspense>
  );
}
