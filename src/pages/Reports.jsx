import { NavLink } from "react-router-dom";
import {
  FiActivity,
  FiDollarSign,
  FiFileText,
  FiHeart,
  FiHome,
  FiPackage,
  FiPieChart,
  FiScissors,
  FiStar,
  FiTrendingUp,
  FiUser,
  FiUsers
} from "react-icons/fi";
import "./ReportPages.css";

const reportSections = [
  {
    title: "Appointments Reports",
    items: [
      { name: "Out Patient", color: "c1", icon: <FiHeart /> },
      { name: "Patient Category", color: "c2", icon: <FiUser /> },
      { name: "Surgery Appointments", color: "c3", icon: <FiScissors /> },
      { name: "Future Appointments", color: "c4", icon: <FiCalendarProxy /> }
    ]
  },
  {
    title: "Consolidated Revenue Reports",
    items: [
      { name: "OutPatient Revenue", color: "c5", icon: <FiUsers /> },
      { name: "Treatment Revenue", color: "c6", icon: <FiDollarSign /> },
      { name: "Investigation Revenue", color: "c7", icon: <FiHome /> },
      { name: "Lab Revenue", color: "c8", icon: <FiActivity /> },
      { name: "Surgery wise Collection", color: "c11", icon: <FiScissors /> },
      { name: "Accounts Revenue", color: "c9", icon: <FiPieChart /> },
      { name: "Advance Revenue Report", color: "c10", icon: <FiPackage /> },
      { name: "Referral wise Revenue", color: "c12", icon: <FiTrendingUp /> },
      { name: "Department Revenue", color: "c9", icon: <FiStar /> },
      { name: "Consolidated Incentive", color: "c12", icon: <FiActivity /> },
      { name: "GST for Treatment", color: "c12", icon: <FiDollarSign /> },
      { name: "Insurance Revenue", color: "c12", icon: <FiFileText /> }
    ]
  },
  {
    title: "Organization Price Reports",
    items: [
      { name: "Investigation Price", color: "c6", icon: <FiFileText /> },
      { name: "Procedure Price", color: "c13", icon: <FiScissors /> },
      { name: "Lab Price", color: "c14", icon: <FiActivity /> },
      { name: "Surgery Price", color: "c7", icon: <FiScissors /> }
    ]
  },
  {
    title: "Detailed Revenue Reports",
    items: [
      { name: "Investigation Revenue", color: "c5", icon: <FiHome /> },
      { name: "Lab Revenue", color: "c14", icon: <FiActivity /> },
      { name: "Surgery Revenue", color: "c7", icon: <FiScissors /> },
      { name: "Treatment Revenue", color: "c9", icon: <FiDollarSign /> }
    ]
  },
  {
    title: "Performance Reports",
    items: [
      { name: "Doctor OPD", color: "c1", icon: <FiHeart /> },
      { name: "Optom OPD", color: "c1", icon: <FiHeart /> },
      { name: "Investigation Count", color: "c12", icon: <FiHome /> },
      { name: "Surgery Performed Count", color: "c13", icon: <FiScissors /> },
      { name: "Counsellor Conversion", color: "c10", icon: <FiTrendingUp /> },
      { name: "Wait Time Analytics", color: "c3", icon: <FiActivity /> },
      { name: "Visit Funnel", color: "c2", icon: <FiUsers /> },
      { name: "Doctor Utilization", color: "c4", icon: <FiPieChart /> }
    ]
  }
];

function FiCalendarProxy() {
  return <FiFileText />;
}

export default function Reports() {
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

      {reportSections.map((section) => (
        <section className="report-section" key={section.title}>
          <div className="report-section-title">{section.title}</div>
          <div className="report-grid">
            {section.items.map((item) => (
              <div className="report-card" key={item.name}>
                <span className={`report-icon ${item.color}`}>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
