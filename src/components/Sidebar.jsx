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
      <div className="logo">
        <FaStethoscope />
      </div>

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
          <button className="nav-link nav-ghost" type="button">
            <FaUserFriends />
            <span>Counsellor</span>
          </button>
        </li>
        <li>
          <button className="nav-link nav-ghost" type="button">
            <FaFileInvoice />
            <span>Insurance</span>
          </button>
        </li>
        <li>
          <button className="nav-link nav-ghost" type="button">
            <FaPills />
            <span>Pharmacy</span>
          </button>
        </li>
        <li>
          <button className="nav-link nav-ghost" type="button">
            <FaBoxes />
            <span>Inventory</span>
          </button>
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
          <button className="nav-link nav-ghost" type="button">
            <FaUsers />
            <span>CRM</span>
          </button>
        </li>
      </ul>
    </aside>
  );
}
