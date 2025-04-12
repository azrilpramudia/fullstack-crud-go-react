import React from "react";
import Navbar from "./components/Navbar";
import AddData from "./pages/AddData";
import ViewData from "./pages/ViewData";
import EditData from "./pages/EditData";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/view" element={<ViewData />} />
        <Route path="/edit" element={<EditData />} />
      </Routes>
    </>
  );
}
export default App;
