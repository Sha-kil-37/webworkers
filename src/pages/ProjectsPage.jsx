import React, { lazy, Suspense } from "react";
import Projects from "../components/Projects";
import Loading from "../components/Loading";
// Lazy load MainLayout
const MainLayout = lazy(() => import("../layout/MainLayout"));

//
export default function ProjectsPage() {
  //
  return (
    <Suspense
      fallback={
        
        <Loading />
      }
    >
      <MainLayout>
        <Projects />
      </MainLayout>
    </Suspense>
  );
}
