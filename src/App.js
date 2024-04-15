import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Service from "./pages/Service.js";
import MyWork from "./pages/MyWork.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/mywork" element={<MyWork />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
