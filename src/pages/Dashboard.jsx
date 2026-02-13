import { NavLink } from "react-router-dom";
import { FiCalendar, FiFileText } from "react-icons/fi";
import "./ReportPages.css";

export default function Dashboard() {
  return (
    <div className="report-page">
      <div className="report-tabs">
        <NavLink to="/" end className={({ isActive }) => `report-tab ${isActive ? "active" : ""}`}>
          <FiFileText /> Summary
        </NavLink>
        <NavLink to="/reports" className={({ isActive }) => `report-tab ${isActive ? "active" : ""}`}>
          <FiFileText /> Reports
        </NavLink>
        <NavLink
          to="/additional-reports"
          className={({ isActive }) => `report-tab ${isActive ? "active" : ""}`}
        >
          <FiFileText /> Additional Reports
        </NavLink>
      </div>

      <div className="summary-area">
        <div className="summary-card">
          <div className="summary-form">
            <div className="summary-row">
              <div className="summary-field">
                <label>From</label>
                <div className="summary-input">
                  <input type="date" defaultValue="2026-02-11" />
                  <FiCalendar />
                </div>
              </div>
              <div className="summary-field">
                <label>To</label>
                <div className="summary-input">
                  <input type="date" defaultValue="2026-02-11" />
                  <FiCalendar />
                </div>
              </div>
            </div>

            <div className="summary-field">
              <label>Select SubOrganization</label>
              <div className="summary-input">
                <select>
                  <option>Aeshrat Nursing Home Eye Division</option>
                </select>
              </div>
            </div>

            <div className="summary-field">
              <label>Select The Clinic</label>
              <div className="summary-input">
                <select>
                  <option>AESHRAT NURSING HOME EYE DIVISION</option>
                </select>
              </div>
            </div>

            <div className="summary-field">
              <label>Select Department</label>
              <div className="summary-input">
                <select>
                  <option>All</option>
                </select>
              </div>
            </div>

            <div className="summary-field">
              <label>Select The Doctor</label>
              <div className="summary-input">
                <select>
                  <option>All</option>
                </select>
              </div>
            </div>

            <button className="summary-search" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
