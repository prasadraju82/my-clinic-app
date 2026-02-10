import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import AdditionalReports from "./pages/AdditionalReports";
import OP from "./pages/OP";
import OT from "./pages/OT";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Shared Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/op" element={<OP />} />
          <Route path="/ot" element={<OT />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/additional-reports" element={<AdditionalReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
