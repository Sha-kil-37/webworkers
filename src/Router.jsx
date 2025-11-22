import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import BlogPage from "./pages/BlogPage";
import TestPage from "./pages/TestPage";
//
function App() {
  //
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/projects" element={<ProjectsPage />}></Route>
      <Route path="/blog" element={<BlogPage />}></Route>
      <Route path="/services" element={<ServicesPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/test" element={<TestPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
//
export default App;
