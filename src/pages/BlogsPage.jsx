import { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import Loading from "../components/Loading";
import SmoothScroll from "../lib/utils/SmoothScroll";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";
//
export default function BlogsPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <Blogs />
          <Contact />
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
