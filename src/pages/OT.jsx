import { useMemo, useState } from "react";
import {
  FaUserInjured,
  FaClipboardList,
  FaCheckCircle,
  FaRegCalendarAlt,
  FaBell,
  FaHistory,
  FaNotesMedical,
  FaHospitalUser
} from "react-icons/fa";
import { FiSearch, FiCalendar, FiChevronDown } from "react-icons/fi";
import "./OT.css";

const rows = [
  {
    id: 1,
    adm: "ANHA005597",
    date: "09-02-2026",
    name: "PRADHAN",
    mr: "ANH0006387",
    surgery: "CATARACT SURGERY",
    eye: "OS",
    pre: "N/A",
    post: "N/A",
    bill: "Credit",
    status: "Done",
    badge: "DA",
    age: "76Y",
    gender: "Male",
    phone: "9999999999"
  },
  {
    id: 2,
    adm: "ANHA005596",
    date: "09-02-2026",
    name: "SHYAM",
    mr: "ANH0006394",
    surgery: "CATARACT SURGERY",
    eye: "OS",
    pre: "N/A",
    post: "N/A",
    bill: "Credit",
    status: "Done",
    badge: "SH",
    age: "61Y",
    gender: "Male",
    phone: "9999999999"
  },
  {
    id: 3,
    adm: "ANHA005595",
    date: "09-02-2026",
    name: "DAS",
    mr: "ANH0006388",
    surgery: "CATARACT SURGERY",
    eye: "OS",
    pre: "N/A",
    post: "N/A",
    bill: "Credit",
    status: "Done",
    badge: "SH",
    age: "69Y",
    gender: "Male",
    phone: "9999999999"
  },
  {
    id: 4,
    adm: "ANHA005594",
    date: "09-02-2026",
    name: "BOURAS",
    mr: "ANH0006391",
    surgery: "CATARACT SURGERY",
    eye: "OS",
    pre: "N/A",
    post: "N/A",
    bill: "Credit",
    status: "Done",
    badge: "BO",
    age: "63Y",
    gender: "Female",
    phone: "9999999999"
  },
  {
    id: 5,
    adm: "ANHA005593",
    date: "09-02-2026",
    name: "ADAM",
    mr: "ANH0006390",
    surgery: "CATARACT SURGERY",
    eye: "OD",
    pre: "N/A",
    post: "N/A",
    bill: "Credit",
    status: "Done",
    badge: "AD",
    age: "58Y",
    gender: "Male",
    phone: "9999999999"
  },
  {
    id: 6,
    adm: "ANHA005592",
    date: "09-02-2026",
    name: "DAS",
    mr: "ANH0006388",
    surgery: "CATARACT SURGERY",
    eye: "OS",
    pre: "N/A",
    post: "N/A",
    bill: "Credit",
    status: "Done",
    badge: "SH",
    age: "69Y",
    gender: "Male",
    phone: "9999999999"
  },
  {
    id: 7,
    adm: "ANHA005590",
    date: "09-02-2026",
    name: "PANCHI",
    mr: "ANH0006392",
    surgery: "CATARACT SURGERY",
    eye: "OS",
    pre: "N/A",
    post: "N/A",
    bill: "Credit",
    status: "Done",
    badge: "PA",
    age: "64Y",
    gender: "Male",
    phone: "9999999999"
  },
  {
    id: 8,
    adm: "ANHA005589",
    date: "09-02-2026",
    name: "BHAGIRATHI",
    mr: "ANH0006385",
    surgery: "CATARACT SURGERY",
    eye: "OS",
    pre: "N/A",
    post: "N/A",
    bill: "Credit",
    status: "Done",
    badge: "BH",
    age: "59Y",
    gender: "Female",
    phone: "9999999999"
  },
  {
    id: 9,
    adm: "ANHA005588",
    date: "09-02-2026",
    name: "TAMALI",
    mr: "ANH0006386",
    surgery: "CATARACT SURGERY",
    eye: "OD",
    pre: "N/A",
    post: "N/A",
    bill: "Credit",
    status: "Done",
    badge: "TA",
    age: "56Y",
    gender: "Female",
    phone: "9999999999"
  },
  {
    id: 10,
    adm: "ANHA005587",
    date: "09-02-2026",
    name: "UDAY",
    mr: "ANH0003451",
    surgery: "CATARACT SURGERY",
    eye: "OD",
    pre: "N/A",
    post: "N/A",
    bill: "Credit",
    status: "Done",
    badge: "UD",
    age: "62Y",
    gender: "Male",
    phone: "9999999999"
  }
];

const hospitals = ["AESHRAT NURSING HOME EY...", "AESHARAT OPD", "AESHARAT MAIN"];
const surgeons = ["Sayed Aejaz Hussein", "Dr. Rahman", "Dr. Singh"];
const counselors = ["All Counselors", "Counselor A", "Counselor B"];
const counStatus = ["All", "Booked", "Not Completed", "On Going"];
const surgeries = ["CATARACT SURGERY", "GLAUCOMA SURGERY", "RETINA SURGERY"];

export default function OT() {
  const [activeTab, setActiveTab] = useState("list");
  const [selectedRowId, setSelectedRowId] = useState(rows[0].id);
  const [searchType, setSearchType] = useState("name");
  const [filters, setFilters] = useState({
    search: "",
    fromDate: "2026-02-09",
    toDate: "2026-02-09",
    hospital: hospitals[0],
    surgeon: surgeons[0],
    counselor: counselors[0],
    status: counStatus[0]
  });
  const [surgeryOpen, setSurgeryOpen] = useState(false);
  const [selectedSurgery, setSelectedSurgery] = useState(surgeries[0]);

  const selected = useMemo(
    () => rows.find((row) => row.id === selectedRowId) ?? rows[0],
    [selectedRowId]
  );

  return (
    <div className="ot-page">
      <div className="ot-top-tabs">
        <button
          className={`ot-tab ${activeTab === "dashboard" ? "active" : ""}`}
          onClick={() => setActiveTab("dashboard")}
          type="button"
        >
          <FaClipboardList /> Dashboard
        </button>
        <button
          className={`ot-tab ${activeTab === "list" ? "active" : ""}`}
          onClick={() => setActiveTab("list")}
          type="button"
        >
          <FaRegCalendarAlt /> Patient Surgeries List
        </button>
        <button
          className={`ot-tab ${activeTab === "patients" ? "active" : ""}`}
          onClick={() => setActiveTab("patients")}
          type="button"
        >
          <FaUserInjured /> All Patients
        </button>
        <div className="ot-right-actions">
          <button className="ot-outline" type="button">
            Admission / Appointment
          </button>
          <button className="ot-bell" type="button" aria-label="Alerts">
            <FaBell />
          </button>
        </div>
      </div>

      <div className="ot-filters">
        <div className="ot-radio">
          <label>
            <input
              type="radio"
              name="otSearch"
              checked={searchType === "name"}
              onChange={() => setSearchType("name")}
            />
            Name
          </label>
          <label>
            <input
              type="radio"
              name="otSearch"
              checked={searchType === "mr"}
              onChange={() => setSearchType("mr")}
            />
            MR.No.
          </label>
          <label>
            <input
              type="radio"
              name="otSearch"
              checked={searchType === "old"}
              onChange={() => setSearchType("old")}
            />
            Old MR No.
          </label>
        </div>
        <div className="ot-search">
          <input
            placeholder="Search Mr.No"
            value={filters.search}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, search: event.target.value }))
            }
          />
          <button aria-label="Search">
            <FiSearch />
          </button>
        </div>
        <div className="ot-field">
          <label>From Date</label>
          <div className="ot-date">
            <input
              type="date"
              value={filters.fromDate}
              onChange={(event) =>
                setFilters((prev) => ({ ...prev, fromDate: event.target.value }))
              }
            />
            <FiCalendar />
          </div>
        </div>
        <div className="ot-field">
          <label>To Date</label>
          <div className="ot-date">
            <input
              type="date"
              value={filters.toDate}
              onChange={(event) =>
                setFilters((prev) => ({ ...prev, toDate: event.target.value }))
              }
            />
            <FiCalendar />
          </div>
        </div>
        <div className="ot-field">
          <label>Hospital/Clinic</label>
          <select
            className="ot-native"
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
        <div className="ot-field">
          <label>Surgeon</label>
          <select
            className="ot-native"
            value={filters.surgeon}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, surgeon: event.target.value }))
            }
          >
            {surgeons.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="ot-field">
          <label>Counsellor</label>
          <select
            className="ot-native"
            value={filters.counselor}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, counselor: event.target.value }))
            }
          >
            {counselors.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="ot-field">
          <label>Cou.. Status</label>
          <select
            className="ot-native"
            value={filters.status}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, status: event.target.value }))
            }
          >
            {counStatus.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <button className="ot-search-btn" type="button">
          Search
        </button>
      </div>

      <div className="ot-summary">
        <div className="ot-summary-card dark">
          <div className="count">0</div>
          <div className="label">Advised</div>
        </div>
        <div className="ot-summary-card dark">
          <div className="count">0</div>
          <div className="label">Appointments</div>
        </div>
        <div className="ot-summary-card">
          <div className="count">11</div>
          <div className="label">Admission</div>
        </div>
        <div className="ot-summary-card dark">
          <div className="count">0</div>
          <div className="label">Discharged</div>
        </div>
        <div className="ot-summary-card dark">
          <div className="count">0</div>
          <div className="label">Accepted</div>
        </div>
        <div className="ot-summary-card dark">
          <div className="count">0</div>
          <div className="label">FollowUp</div>
        </div>
        <div className="ot-summary-card dark">
          <div className="count">1</div>
          <div className="label">Cancel</div>
        </div>
      </div>

      <div className="ot-main">
        <div className="ot-table">
          <div className="ot-table-head">
            <div>S.No</div>
            <div>Adm No & Date</div>
            <div>Patient Name</div>
            <div>Surgeries</div>
            <div>Eye</div>
            <div>OP</div>
            <div>Bill</div>
          </div>

          {rows.map((row) => (
            <button
              className={`ot-table-row ${selectedRowId === row.id ? "selected" : ""}`}
              key={row.id}
              onClick={() => setSelectedRowId(row.id)}
              type="button"
            >
              <div>{row.id}</div>
              <div className="stack">
                <span>{row.adm}</span>
                <small>{row.date}</small>
              </div>
              <div className="stack name">
                <div className="avatar-badge">{row.badge}</div>
                <div>
                  <div>{row.name}</div>
                  <small>{row.mr}</small>
                </div>
              </div>
              <div>{row.surgery}</div>
              <div className="pill">{row.eye}</div>
              <div className="stack">
                <small>Pre : {row.pre}</small>
                <small>Post : {row.post}</small>
              </div>
              <div className="stack bill">
                <span>{row.bill}</span>
                <small>{row.status}</small>
              </div>
            </button>
          ))}

          <div className="ot-pagination">
            <button>First</button>
            <button>Previous</button>
            <span className="active">1</span>
            <span>2</span>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>

        <div className="ot-right">
          <div className="panel">
            <div className="panel-header">Basic Details</div>
            <div className="panel-body basic">
              <div className="patient-avatar"><FaHospitalUser /></div>
              <div>
                <div className="patient-name">Mr {selected.name}</div>
                <div className="patient-meta">
                  {selected.age} | OM | {selected.eye} | {selected.gender}
                </div>
                <div className="patient-meta">{selected.phone}</div>
              </div>
              <button className="edit-btn" type="button">
                <FaNotesMedical />
              </button>
            </div>
            <div className="panel-body details">
              <div><span>Billing status</span><strong>Done</strong></div>
              <div><span>Billing type</span><strong>Credit</strong></div>
              <div><span>Company Name</span><strong>AB PMJAY-GJAY</strong></div>
              <div><span>Referral</span><strong>RALABA(ANIL)</strong></div>
              <div><span>Admission Status</span><strong>IN Ward</strong></div>
              <div><span>Location</span><strong>Ralaba</strong></div>
            </div>
          </div>

          <div className="panel">
            <button
              className="panel-header panel-toggle"
              onClick={() => setSurgeryOpen((prev) => !prev)}
              type="button"
            >
              Surgery details
              <FiChevronDown className={surgeryOpen ? "rot" : ""} />
            </button>
            {surgeryOpen && (
              <div className="panel-body surgery">
                {surgeries.map((item) => (
                  <button
                    key={item}
                    className={`surgery-item ${selectedSurgery === item ? "active" : ""}`}
                    onClick={() => setSelectedSurgery(item)}
                    type="button"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="panel">
            <div className="panel-header">Status</div>
            <div className="panel-body status">
              <div><span>Admission</span><strong>Booked on 09-02-2026</strong></div>
              <div><span>Counsellor</span><strong>Not Completed</strong></div>
              <div><span>Pre Anesthesia</span><strong>On Going</strong></div>
              <div><span>Appointment</span><strong>Booked on 09-02-2026</strong></div>
            </div>
          </div>
        </div>

        <div className="ot-checklist">
          <div className="check-section">Post Admission</div>
          <ul>
            <li><FaCheckCircle /> Ward Checklist</li>
            <li><FaCheckCircle /> Surgery Checklist</li>
            <li><FaCheckCircle /> Pre OP Examination</li>
            <li><FaCheckCircle /> Anesthesia Intra-Operations</li>
            <li><FaCheckCircle /> Surgery Operations</li>
            <li><FaCheckCircle /> OT Consumables</li>
            <li><FaCheckCircle /> Post OP Examination</li>
            <li><FaCheckCircle /> Post-Surgery Checklist</li>
            <li><FaCheckCircle /> Nurse Notes Details</li>
          </ul>

          <div className="check-section">Discharge</div>
          <ul>
            <li><FaHistory /> Medication</li>
            <li><FaHistory /> Discharge Summary</li>
            <li className="active"><FaHistory /> OT Billing (approx billing)</li>
            <li><FaHistory /> Advance Payments</li>
            <li><FaHistory /> Final Settlement Billing</li>
            <li><FaHistory /> Discharge Certificate</li>
            <li><FaHistory /> Custom Billing</li>
            <li><FaHistory /> Cover Letter</li>
          </ul>

          <div className="check-section">Uploads</div>
          <ul>
            <li><FaClipboardList /> Upload Files</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
