import { useState } from "react";
import "./index.css";
import "./App.css";

import Navbar from "./components/Navbar";

import Header from "./components/Header";

import About from "./components/About";

import Projects from "./components/Projects";

import Skills from "./components/Skills";

import Experience from "./components/Experience";


function App() {
  return (
    <div className="min-h-screen bg-darkNavyBlue text-softGray font-sans pt-20">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
