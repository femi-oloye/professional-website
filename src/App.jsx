// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientProof from "./components/ClientProof";
import LiveDashboard from "./components/LiveDashboard";
import Projects from "./components/Projects";
import ChatPortfolio from "./components/ChatPortfolio";
import Gigs from "./components/Gigs";
import CaseStudy from "./components/CaseStudy";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-stone-950 text-stone-50">
      <Navbar />
      <main>
        <Hero />
        <ClientProof />
        <LiveDashboard />
        <Projects />
        <ChatPortfolio />
        <Gigs />
        <CaseStudy />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
