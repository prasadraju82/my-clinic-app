import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaUserMd,
  FaProcedures,
  FaUserFriends,
  FaFileInvoice,
  FaPills,
  FaBoxes,
  FaEye,
  FaCog,
  FaCalculator,
  FaUserShield,
  FaUsers,
  FaStethoscope
} from "react-icons/fa";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-panel">
        <NavLink to="/" className="logo-link" title="Go to Dashboard">
          <div className="logo">
            <FaStethoscope />
          </div>
        </NavLink>

        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              <FaChartPie />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/op" className="nav-link">
              <FaUserMd />
              <span>OP</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/ot" className="nav-link">
              <FaProcedures />
              <span>OT</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/counsellor" className="nav-link">
              <FaUserFriends />
              <span>Counsellor</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/insurance" className="nav-link">
              <FaFileInvoice />
              <span>Insurance</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/pharmacy" className="nav-link">
              <FaPills />
              <span>Pharmacy</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inventory" className="nav-link">
              <FaBoxes />
              <span>Inventory</span>
            </NavLink>
          </li>
          <li>
            <button className="nav-link nav-ghost" type="button">
              <FaEye />
              <span>Opticals</span>
            </button>
          </li>
          <li>
            <button className="nav-link nav-ghost" type="button">
              <FaCog />
              <span>Settings</span>
            </button>
          </li>
          <li>
            <button className="nav-link nav-ghost" type="button">
              <FaCalculator />
              <span>Accounts</span>
            </button>
          </li>
          <li>
            <button className="nav-link nav-ghost" type="button">
              <FaUserShield />
              <span>Admin</span>
            </button>
          </li>
          <li>
            <NavLink to="/referral" className="nav-link">
              <FaUsers />
              <span>Referral</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
