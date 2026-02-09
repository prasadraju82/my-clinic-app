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
  FaUsers
} from "react-icons/fa";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">🏥</div>

      <ul>
        <li>
          <FaChartPie />
          <span>Dashboard</span>
        </li>
        <li>
          <FaUserMd />
          <span>OP</span>
        </li>
        <li>
          <FaProcedures />
          <span>OT</span>
        </li>
        <li>
          <FaUserFriends />
          <span>Counsellor</span>
        </li>
        <li>
          <FaFileInvoice />
          <span>Insurance</span>
        </li>
        <li>
          <FaPills />
          <span>Pharmacy</span>
        </li>
        <li>
          <FaBoxes />
          <span>Inventory</span>
        </li>
        <li>
          <FaEye />
          <span>Opticals</span>
        </li>
        <li>
          <FaCog />
          <span>Settings</span>
        </li>
        <li>
          <FaCalculator />
          <span>Accounts</span>
        </li>
        <li>
          <FaUserShield />
          <span>Admin</span>
        </li>
        <li>
          <FaUsers />
          <span>CRM</span>
        </li>
      </ul>
    </aside>
  );
}
