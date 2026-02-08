import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Skills from "./pages/Skills";

export default function App() {
  return (
      <div  >
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
  );
}
