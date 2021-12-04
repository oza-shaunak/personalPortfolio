import React from "react";
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar></Navbar>
    <About></About>
    <Projects></Projects>
    <Skills></Skills>
    <Contact></Contact>
    </main>
  );
}
