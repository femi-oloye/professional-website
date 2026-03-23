// src/App.jsx
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Gigs from "./components/Gigs";
import CaseStudy from "./components/CaseStudy";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Hero />
      <Projects />
      <Gigs />
      <CaseStudy />
      <CTA />
    </div>
  );
}

export default App;
