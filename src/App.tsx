import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Enroll from './pages/Enroll';
import Results from './pages/Results';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Layout>
    </Router>
  );
}
