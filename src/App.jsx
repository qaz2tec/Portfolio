import React, { useEffect } from "react";
import anime from "animejs";

const MyComponent = () => {
  useEffect(() => {
    // Create an animation
    anime({
      targets: '.line-drawing-demo .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);

  return (
    <div className="my-element">
      <h1>Hello, I'm animated!</h1>
    </div>
  );
};

export default MyComponent;

// import "./App.scss";
// import { Routes, Route } from "react-router-dom";
// import Home from "./containers/home";
// import About from "./containers/about";
// import Resume from "./containers/resume";
// import Contact from "./containers/contact";
// import Portfolio from "./containers/portfolio";
// import Skills from "./containers/skills";
// import Navbar from "./components/navbar";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />

//       <Routes>
//         <Route index path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/skills" element={<Skills />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
