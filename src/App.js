import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Expercience,
  Footer,
  Header,
  Navbar,
  Portfolio,
  Services,
  Testimonial,
} from "./Components/index";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/expercience" element={<Expercience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
