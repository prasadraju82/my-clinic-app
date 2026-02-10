import { useState } from "react";
import {
  FaCalendarAlt,
  FaClipboardList,
  FaUsers,
  FaTint,
  FaHistory,
  FaUserPlus,
  FaUserCheck,
  FaRegCalendarCheck,
  FaFileInvoiceDollar
} from "react-icons/fa";
import { FiSearch, FiCalendar, FiUser, FiList, FiPlusCircle } from "react-icons/fi";
import "./OP.css";

const hospitals = ["AESHRAT NURSING HOME EYE DIVISION", "AESHARAT OPD", "AESHARAT MAIN"];
const departments = ["All Departments", "OPD", "OT", "Opticals"];
const doctors = ["Sayed Aejaz Hussein", "Dr. Rahman", "Dr. Singh"];

export default function OP() {
  const [activeAction, setActiveAction] = useState("Appts.");
  const [searchType, setSearchType] = useState("name");
  const [filters, setFilters] = useState({
    search: "",
    date: "2026-02-09",
    hospital: hospitals[0],
    department: departments[0],
    doctor: doctors[0]
  });

  return (
    <div className="op-page">
      <div className="op-actions-strip">
        {[
          { label: "Appts.", icon: <FaCalendarAlt /> },
          { label: "Investigations", icon: <FaClipboardList /> },
          { label: "All Patients", icon: <FaUsers /> },
          { label: "Dilation", icon: <FaTint /> },
          { label: "Follow Up", icon: <FaHistory /> },
          { label: "Quick Reg.", icon: <FaUserPlus />, danger: true },
          { label: "Reg. Patient", icon: <FaUserCheck /> },
          { label: "Book Appt.", icon: <FaRegCalendarCheck /> },
          { label: "Billing", icon: <FaFileInvoiceDollar />, dark: true }
        ].map((item) => (
          <button
            key={item.label}
            className={`op-action ${
              activeAction === item.label ? "active" : ""
            } ${item.danger ? "danger" : ""} ${item.dark ? "dark" : ""}`}
            onClick={() => setActiveAction(item.label)}
            type="button"
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>

      <div className="op-filters">
        <div className="op-filter-left">
          <div className="op-radio">
            <label>
              <input
                type="radio"
                name="searchType"
                checked={searchType === "name"}
                onChange={() => setSearchType("name")}
              />
              <span>Name/Mobile</span>
            </label>
            <label>
              <input
                type="radio"
                name="searchType"
                checked={searchType === "mr"}
                onChange={() => setSearchType("mr")}
              />
              <span>MR.No</span>
            </label>
          </div>

          <div className="op-search-field">
            <input
              placeholder="Search Patient"
              value={filters.search}
              onChange={(event) =>
                setFilters((prev) => ({ ...prev, search: event.target.value }))
              }
            />
            <button aria-label="Search patient" type="button">
              <FiSearch />
            </button>
          </div>
        </div>

        <div className="op-filter-right">
          <div className="op-field">
            <label>Date</label>
            <div className="op-field-input">
              <input
                type="date"
                value={filters.date}
                onChange={(event) =>
                  setFilters((prev) => ({ ...prev, date: event.target.value }))
                }
              />
              <FiCalendar />
            </div>
          </div>

          <div className="op-field">
            <label>Hospitals</label>
            <select
              value={filters.hospital}
              onChange={(event) =>
                setFilters((prev) => ({ ...prev, hospital: event.target.value }))
              }
            >
              {hospitals.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="op-field">
            <label>Departments</label>
            <select
              value={filters.department}
              onChange={(event) =>
                setFilters((prev) => ({ ...prev, department: event.target.value }))
              }
            >
              {departments.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="op-field">
            <label>Doctors</label>
            <select
              value={filters.doctor}
              onChange={(event) =>
                setFilters((prev) => ({ ...prev, doctor: event.target.value }))
              }
            >
              {doctors.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <button className="op-search-main" type="button">
            Search
          </button>
          <button className="op-icon-btn" type="button" aria-label="Add">
            <FiPlusCircle />
          </button>
          <button className="op-icon-btn" type="button" aria-label="List">
            <FiList />
          </button>
          <button className="op-icon-btn" type="button" aria-label="User">
            <FiUser />
          </button>
        </div>
      </div>

      <div className="op-counters">
        <div className="counter-box reception">
          <div className="counter-title">Reception</div>
          <div className="counter-items">
            <div>
              <span>0</span>
              <p>All</p>
            </div>
            <div>
              <span>0</span>
              <p>Not Check-In</p>
            </div>
            <div>
              <span>0</span>
              <p>Check In</p>
            </div>
            <div>
              <span>0</span>
              <p>Check out</p>
            </div>
          </div>
        </div>

        <div className="counter-box waiting">
          <div className="counter-title">Waiting Room</div>
          <div className="counter-items">
            <div>
              <span>0</span>
              <p>Reception</p>
            </div>
            <div>
              <span>0</span>
              <p>AR</p>
            </div>
            <div>
              <span>0</span>
              <p>Optometrist</p>
            </div>
            <div className="highlight">
              <span>0</span>
              <p>Doctor</p>
            </div>
            <div>
              <span>0</span>
              <p>Dilation</p>
            </div>
            <div>
              <span>0</span>
              <p>Counsellor</p>
            </div>
            <div>
              <span>0</span>
              <p>Investigation</p>
            </div>
            <div>
              <span>0</span>
              <p>Billing</p>
            </div>
          </div>
        </div>

        <div className="counter-box active">
          <div className="counter-title">Active Room</div>
          <div className="counter-items">
            <div>
              <span>0</span>
              <p>AR</p>
            </div>
            <div>
              <span>0</span>
              <p>Optometrist</p>
            </div>
            <div>
              <span>0</span>
              <p>Doctor</p>
            </div>
            <div>
              <span>0</span>
              <p>Dilation</p>
            </div>
            <div>
              <span>0</span>
              <p>Counsellor</p>
            </div>
            <div>
              <span>0</span>
              <p>Investigation</p>
            </div>
            <div>
              <span>0</span>
              <p>Billing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="op-table-header">
        <div>Type</div>
        <div>Check IN</div>
        <div>Patient Details</div>
        <div>Mob. & Ref.</div>
        <div>Visit Type</div>
        <div>Visit Reason</div>
        <div>Doc. & Optom</div>
        <div>Follow Up</div>
        <div>Waiting</div>
        <div>Status/Notes</div>
        <div>Action</div>
        <div>Dilation</div>
      </div>

      <div className="op-empty-wrapper">
        <div className="op-empty-card">
          <div className="empty-icon">
            <FiCalendar />
          </div>
          <p className="empty-title">No Appointments Booked</p>
          <p className="empty-sub">
            No appointments available with selected dates, Please book an
            appointment now
          </p>
        </div>
      </div>
    </div>
  );
}
