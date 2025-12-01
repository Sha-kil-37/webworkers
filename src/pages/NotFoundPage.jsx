import NotFound from "../components/NotFound";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import SmoothScroll from "../lib/utils/SmoothScroll";
const MainLayout = lazy(() => import("../layout/MainLayout"));
//
export default function NotFoundPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
         <NotFound />
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
