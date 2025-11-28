import { Fragment, lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layout/MainLayout"));

import Loading from "../components/Loading";
import Blog from "../components/Blog";
import SmoothScroll from "../lib/utils/SmoothScroll";
import LetsTalk from "../components/LetsTalk";

//
export default function BlogPage() {
  //
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <SmoothScroll>
          <Blog />
          <LetsTalk />
        </SmoothScroll>
      </MainLayout>
    </Suspense>
  );
}
