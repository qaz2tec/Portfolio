import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Skills from "./containers/skills";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
