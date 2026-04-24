import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DentalLandingPage from "./pages/DentalLandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dental-ai-receptionist" element={<DentalLandingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
