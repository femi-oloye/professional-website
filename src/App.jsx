// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Gigs from "./components/Gigs";
import CaseStudy from "./components/CaseStudy";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Gigs />
      <CaseStudy />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
