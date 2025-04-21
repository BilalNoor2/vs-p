import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <main className="relative min-h-screen w-full">
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
