import { Fragment, lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import SmoothScroll from "../lib/utils/SmoothScroll";
import { ThreeDMarqueeGallery } from "../components/ThreeDMarqueeGallery";

//
export default function HomePage() {
  //
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-5xl font-bold text-center text-emerald-400">
            Loading...
          </h1>
        </div>
      }
    >
      <MainLayout>
        <SmoothScroll>
          <Fragment>
            <Banner />
            <Feature />
            <ThreeDMarqueeGallery />
          </Fragment>
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
