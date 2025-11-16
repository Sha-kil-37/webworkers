import { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import About from "../components/About";
import Loading from "../components/Loading";
//
export default function AboutPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <About />
      </MainLayout>
    </Suspense>
  );
}
