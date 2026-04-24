import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import DentalLandingPage from "./pages/DentalLandingPage";
import DentalLandingPageV2 from "./pages/DentalLandingPageV2";
import DentalThankYouPage from "./pages/DentalThankYouPage";

function DentalLandingAB() {
  const navigate = useNavigate();

  useEffect(() => {
    const key = "dental_lp_variant";
    let assigned = localStorage.getItem(key);

    if (!assigned) {
      assigned = Math.random() < 0.5 ? "v1" : "v2";
      localStorage.setItem(key, assigned);
    }

    navigate(
      assigned === "v2"
        ? "/dental-ai-receptionist-v2"
        : "/dental-ai-receptionist",
      { replace: true }
    );
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dental-ai-receptionist" element={<DentalLandingPage />} />
      <Route path="/dental-ai-receptionist-v2" element={<DentalLandingPageV2 />} />
      <Route path="/dental-ai-receptionist-ab" element={<DentalLandingAB />} />
      <Route path="/dental-ai-receptionist-thank-you" element={<DentalThankYouPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
