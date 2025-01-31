import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Ensure correct imports
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';  // Import About component

function App() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
      </Routes>
    </div>
  );
}

export default App;
