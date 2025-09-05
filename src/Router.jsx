import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Test from "./components/Test";

//
function App() {
  //
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/test" element={<Test />}></Route>
    </Routes>
  );
}
// 
export default App;
