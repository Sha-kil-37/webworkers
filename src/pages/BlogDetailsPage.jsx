import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import SmoothScroll from "../lib/utils/SmoothScroll";
import BlogDetails from "../components/BlogDetails";
const MainLayout = lazy(() => import("../layout/MainLayout"));
export default function BlogDetailsPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <BlogDetails />
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
