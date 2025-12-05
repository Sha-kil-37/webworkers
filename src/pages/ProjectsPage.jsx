import Projects from "../components/Projects";
import Loading from "../components/Loading";
import SmoothScroll from "../lib/utils/SmoothScroll";
import { Fragment, lazy, Suspense } from "react";
import Contact from "../components/Contact";
// 
const MainLayout = lazy(() => import("../layout/MainLayout"));
//
export default function ProjectsPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <Fragment>
            <Projects />
            <Contact />
          </Fragment>
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
