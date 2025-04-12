import React from "react";
import Navbar from "./components/Navbar";
import AddData from "./pages/AddData";
import ViewData from "./pages/ViewData";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/add" element={<AddData />} />
        <Route path="/view" element={<ViewData />} />
      </Routes>
    </>
  );
}
export default App;
