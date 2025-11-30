import { Fragment, lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));
import Loading from "../components/Loading";
import Blog from "../components/Blog";
import SmoothScroll from "../lib/utils/SmoothScroll";
import Contact from "../components/Contact";
//
export default function BlogsPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <Blog />
          <Contact />
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
