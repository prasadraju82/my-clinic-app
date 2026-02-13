import { NavLink } from "react-router-dom";
import {
  FiActivity,
  FiClipboard,
  FiDollarSign,
  FiFileText,
  FiHome,
  FiPieChart,
  FiScissors,
  FiTrendingUp,
  FiUser,
  FiUsers
} from "react-icons/fi";
import "./ReportPages.css";

const additionalSections = [
  {
    title: "Out Patient",
    items: [
      "All Out Patient Bill Report",
      "All New Registrations",
      "OP Billable Item wise Report",
      "Department Wise Investigation Revenue",
      "OP Discount Report",
      "OP Visit List",
      "Investigation Detail Revenue",
      "Lab Detail Revenue",
      "Age wise Patient Count",
      "OPD Registration Detail",
      "OP and OT Revenue Details",
      "Waived off Patient report",
      "Total Revenue by Category",
      "Patient Details Report",
      "Total Revenue by Billing Type",
      "Clinical Collection Report",
      "Due Bill Report OP",
      "Followup Appointments Report",
      "Appointment List Report",
      "All Bill Report OP RECONSILATION",
      "Patient Waiting Time Report",
      "Procedure Detail Revenue",
      "Consultation Detail Revenue",
      "Optom wise PatientCount",
      "Fast Track AppointmentList",
      "Tag Patient Report",
      "Visual Acuity Report",
      "Patient Movement Report",
      "UserWise Patient Movement Report",
      "User All Bill Report OP",
      "Ophthalmic Assistant Performance Report",
      "OP Revenue Heatmap",
      "Revenue by Visit Slot",
      "No Show Trend Report",
      "Counsellor Closure Ratio",
      "Doctor Conversion Analysis"
    ]
  },
  {
    title: "In Patient Report",
    items: [
      "IP Admission",
      "All IP Bill Report",
      "Billable Item wise IP Report",
      "IP Discount Report",
      "Surgery Discharge Summary",
      "IP Bed Occupancy",
      "IP Deposit Register",
      "IP Investigation Revenue",
      "Procedure Revenue IP",
      "IP Collection Trend",
      "IP LOS Analysis",
      "Ward Transfer Report"
    ]
  },
  {
    title: "Surgery Analytics",
    items: [
      "Surgeon Productivity",
      "OT Utilization",
      "Surgery Cancellation Matrix",
      "Surgery Turnaround Time",
      "Procedure Mix Report",
      "Lens Consumption Report",
      "High Value Surgery Trend",
      "Complication Tracking"
    ]
  }
];

const iconPalette = ["c1", "c13", "c5", "c2", "c11", "c10", "c7", "c8", "c12", "c6"];
const iconSet = [
  <FiFileText key="file" />,
  <FiUsers key="users" />,
  <FiDollarSign key="dollar" />,
  <FiClipboard key="clip" />,
  <FiScissors key="scissor" />,
  <FiTrendingUp key="trend" />,
  <FiHome key="home" />,
  <FiActivity key="activity" />,
  <FiPieChart key="pie" />,
  <FiUser key="user" />
];

export default function AdditionalReports() {
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

      {additionalSections.map((section) => (
        <section className="report-section" key={section.title}>
          <div className="report-section-title">{section.title}</div>
          <div className="report-grid">
            {section.items.map((item, index) => (
              <div className="report-card" key={item}>
                <span className={`report-icon ${iconPalette[index % iconPalette.length]}`}>
                  {iconSet[index % iconSet.length]}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
