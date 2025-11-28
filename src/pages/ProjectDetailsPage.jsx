import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import ProjectDetails from "../components/ProjectDetails";
import SmoothScroll from "../lib/utils/SmoothScroll";
const MainLayout = lazy(() => import("../layout/MainLayout"));
export default function ProjectDetailsPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <ProjectDetails />
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
