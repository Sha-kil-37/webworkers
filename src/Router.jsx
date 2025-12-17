import { Routes, Route } from "react-router";
import NotFound from "./components/NotFound";
import Test from "./components/Test";
import { Fragment, Suspense } from "react";
import Loading from "./components/Loading";
import Banner from "./components/Banner";
import TrustedBy from "./components/TrustedBy";
import OurMission from "./components/OurMission";
import Credibility from "./components/Credibility";
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
const MainLayout = (await import("./layout/MainLayout")).default;
//
function App() {
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
                <TrustedBy />
                <OurMission />
                <Credibility />
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
      <Route path="/test" element={<Test />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
//
export default App;
