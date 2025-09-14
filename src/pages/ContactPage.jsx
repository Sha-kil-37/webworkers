import React, { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import Contact from "../components/Contact";

//
export default function ContactPage() {
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
        <Contact />
      </MainLayout>
    </Suspense>
  );
}
