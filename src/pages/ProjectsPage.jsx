import React, { lazy, Suspense } from "react";
import Portfolio from "../components/Portfolio";
const MainLayout = lazy(() => import("../layout/MainLayout"));

//
export default function ProjectsPage() {
  //
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold text-center">Loading...</h1>
        </div>
      }
    >
      <MainLayout>
    <Portfolio />
      </MainLayout>
    </Suspense>
  );
}
