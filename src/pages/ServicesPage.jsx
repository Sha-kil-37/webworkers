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
          <h1 className="text-3xl font-bold text-center text-[##102E50] ">
            Loading...
          </h1>
        </div>
      }
    >
      <MainLayout>
        <Services />
      </MainLayout>
    </Suspense>
  );
}
