import React, { lazy, Suspense } from "react";
import Services from "../components/Services";
const MainLayout = lazy(() => import("../layout/MainLayout"));

//
export default function ServicesPage() {
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
        <Services />
      </MainLayout>
    </Suspense>
  );
}
