import { Fragment, lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import Banner from "../components/Banner";
import WorkingProcss from "../components/WorkingProcss";
import OurGoal from "../components/OurGoal";
import Services from "../components/Services";
import ContactButton from "../components/ContactButton";
import ProjectGallery from "../components/ProjectGallery";

//
export default function HomePage() {
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
        {/* <SmoothScroll> */}
        <Fragment>
         <Banner/>
          <OurGoal />
          <WorkingProcss />
          <Services />
          <ProjectGallery />
          <ContactButton />
        </Fragment>
        {/* </SmoothScroll> */}
      </MainLayout>
    </Suspense>
  );
}
