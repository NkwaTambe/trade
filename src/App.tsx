// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./components/Home";
// import { Navbar, Footer } from "./components/Shared";
// import GetStarted from "./pages/GetStarted";
// import About from "./pages/About";
// import Testimonials from "./pages/Testimonials";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/courses" element={<div>Courses Page</div>} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/get-started" element={<GetStarted />} />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar, Footer } from "./components/Shared";
import GetStarted from "./pages/GetStarted";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

