import { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import About from "../components/About";
import LeaderShip from "../components/LeaderShip";
// import Team from "../components/Team";
import Feature from "../components/Feature";
//
export default function AboutPage() {
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
        <About />
        <Feature />
        <LeaderShip />
        {/* <Team /> */}
      </MainLayout>
    </Suspense>
  );
}
