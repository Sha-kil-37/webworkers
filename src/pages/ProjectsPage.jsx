import Projects from "../components/Projects";
import Loading from "../components/Loading";
import SmoothScroll from "../lib/utils/SmoothScroll";
import BlurInText from "../components/BlurInText";
import { Fragment, lazy, Suspense } from "react";
import Contact from "../components/Contact";
// Lazy load MainLayout
const MainLayout = lazy(() => import("../layout/MainLayout"));
//
export default function ProjectsPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <Fragment>
            <BlurInText>WebWorkers Projects</BlurInText>
            <Projects />
            <Contact />
          </Fragment>
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
