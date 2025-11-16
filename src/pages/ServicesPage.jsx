import React, { lazy, Suspense } from "react";
import Services from "../components/Services";
import Loading from "../components/Loading";
const MainLayout = lazy(() => import("../layout/MainLayout"));

//
export default function ServicesPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <Services />
      </MainLayout>
    </Suspense>
  );
}
