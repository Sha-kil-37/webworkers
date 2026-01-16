import { Routes, Route } from "react-router";
import NotFound from "./components/NotFound";
import {  lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Banner from "./components/Banner";
import WorkExperience from "./components/WorkExperience";
import OurSuccess from "./components/OurSuccess";
import Services from "./components/Services";
import ChooseUs from "./components/ChooseUs";
import OurTeam from "./components/OurTeam";
import Portfolios from "./components/Portfolios";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import ProjectDetails from "./components/ProjectDetails";
const MainLayout = lazy(() => import("./layout/MainLayout"));
import AnalyticsTracker from "./lib/utils/AnalyticsTracker";
import TermsAndPrivacy from "./components/TermsAndPrivacy";
import ContactSuccess from "./components/ContactSuccess";
import SmoothScroll from "./lib/utils/SmoothScroll";
//
function App() {
  AnalyticsTracker();

  //
  //
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <MainLayout>
              <SmoothScroll>
                <Banner />
                <WorkExperience />
                <OurSuccess />
                <Services />
                <ChooseUs />
                <OurTeam />
                <Portfolios />
                <Testimonials />
                <Blogs />
                <FAQ />
                <Contact />
              </SmoothScroll>
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
      <Route path="/contact-success" element={<ContactSuccess />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
//
export default App;
