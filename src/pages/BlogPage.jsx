import { Fragment, lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));

import Loading from "../components/Loading";
import Blog from "../components/Blog";

//
export default function BlogPage() {
  //
  return (
    <Suspense
      fallback={
       <Loading />
      }
    >
      <MainLayout>
        {/* <SmoothScroll> */}
        <Fragment>
          <Blog/>
        </Fragment>
        {/* </SmoothScroll> */}
      </MainLayout>
    </Suspense>
  );
}