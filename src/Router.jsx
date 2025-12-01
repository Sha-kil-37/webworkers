import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import BlogsPage from "./pages/BlogsPage";
import TestPage from "./pages/TestPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
//
function App() {
  //
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/projects" element={<ProjectsPage />}></Route>
      <Route
        path="/projectdetails/:id"
        element={<ProjectDetailsPage />}
      ></Route>
      <Route path="/blogs" element={<BlogsPage />}></Route>
      <Route path="/blogDetails/:id" element={<BlogDetailsPage />}></Route>
      <Route path="/services" element={<ServicesPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/test" element={<TestPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
//
export default App;
