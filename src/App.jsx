import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import AdditionalReports from "./pages/AdditionalReports";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Shared Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/additional-reports" element={<AdditionalReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
