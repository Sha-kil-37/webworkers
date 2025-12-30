import { Routes, Route } from "react-router";
import NotFound from "./components/NotFound";
import Test from "./components/Test";
import { Fragment, lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Banner from "./components/Banner";
import WorkExperience from "./components/WorkExperience";
import OurAchievements from "./components/OurAchievements";
import Services from "./components/Services";
import ChooseUs from "./components/ChooseUs";
import OurTeam from "./components/OurTeam";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import ProjectDetails from "./components/ProjectDetails";
const MainLayout = lazy(() => import("./layout/MainLayout"));
import AnalyticsTracker from "./lib/utils/AnalyticsTracker";
import TermsAndPrivacy from "./components/TermsAndPrivacy";
//
function App() {
  AnalyticsTracker();

  //
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <MainLayout>
              <Fragment>
                <Banner />
                <WorkExperience />
                <OurAchievements />
                <Services />
                <ChooseUs />
                <OurTeam />
                <Projects />
                <Testimonials />
                <Blogs />
                <FAQ />
                <Contact />
              </Fragment>
            </MainLayout>
          </Suspense>
        }
      ></Route>
      <Route
        path="/blogdetails/:id"
        element={
          <Suspense fallback={<Loading />}>
            <MainLayout>
              <BlogDetails />
            </MainLayout>
          </Suspense>
        }
      ></Route>
      <Route
        path="/projectdetails/:id"
        element={
          <Suspense fallback={<Loading />}>
            <MainLayout>
              <ProjectDetails />
            </MainLayout>
          </Suspense>
        }
      ></Route>
      <Route
        path="/terms&privacy"
        element={
          <Suspense fallback={<Loading />}>
            <MainLayout>
              <TermsAndPrivacy />
            </MainLayout>
          </Suspense>
        }
      ></Route>
      <Route path="/test" element={<Test />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
//
export default App;
