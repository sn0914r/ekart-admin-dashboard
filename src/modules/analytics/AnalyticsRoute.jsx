import { Routes, Route } from "react-router-dom";
import AnalyticsPage from "./pages/AnalyticsPage";

const AnalyticsRoute = () => {
  return (
    <Routes>
      <Route path="/analytics" element={<AnalyticsPage />} />
    </Routes>
  );
};

export default AnalyticsRoute;
