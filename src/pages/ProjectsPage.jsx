import React, { lazy, Suspense } from "react";
import Projects from "../components/Projects";
import Loading from "../components/Loading";
import SmoothScroll from "../lib/utils/SmoothScroll";
// Lazy load MainLayout
const MainLayout = lazy(() => import("../layout/MainLayout"));
//
export default function ProjectsPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <Projects />
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
