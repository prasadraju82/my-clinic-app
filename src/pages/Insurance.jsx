import { useState } from "react";
import {
  FiCalendar,
  FiEdit2,
  FiFileText,
  FiRefreshCcw,
  FiSearch,
  FiTrash2,
  FiUser,
  FiUsers
} from "react-icons/fi";
import "./Insurance.css";

const claimRows = [
  {
    id: 1,
    patient: "Mrs Neha Kulkarni",
    code: "ANH0006411",
    ref: "Ref No:+91-98310-44551",
    category: "CGHS",
    company: "AB PMJAY-GJAY",
    initiatedBy: "ASISH KUMAR PATRO S",
    initiatedOn: "11-02-2026"
  },
  {
    id: 2,
    patient: "Mr Daniel Brooks",
    code: "ANH0006406",
    ref: "Ref No:+1-202-555-0189",
    category: "CGHS",
    company: "AB PMJAY-GJAY",
    initiatedBy: "RITU SHARMA",
    initiatedOn: "11-02-2026"
  },
  {
    id: 3,
    patient: "Mrs Priyanka Nair",
    code: "ANH0006415",
    ref: "Ref No:+91-94444-77231",
    category: "CGHS",
    company: "AB PMJAY-GJAY",
    initiatedBy: "SAMEER DAS",
    initiatedOn: "11-02-2026"
  },
  {
    id: 4,
    patient: "Ms Sofia Martinez",
    code: "ANH0006402",
    ref: "Ref No:+34-611-92-3044",
    category: "CGHS",
    company: "AB PMJAY-GJAY",
    initiatedBy: "ANITA JENA",
    initiatedOn: "11-02-2026"
  },
  {
    id: 5,
    patient: "Mr Rohan Deshmukh",
    code: "ANH0006424",
    ref: "Ref No:+91-90073-88124",
    category: "CGHS",
    company: "AB PMJAY-GJAY",
    initiatedBy: "RAKESH MOHANTY",
    initiatedOn: "11-02-2026"
  },
  {
    id: 6,
    patient: "Mr Lee Jong-ho",
    code: "ANH0006423",
    ref: "Ref No:+82-10-4876-2201",
    category: "CGHS",
    company: "AB PMJAY-GJAY",
    initiatedBy: "SNEHA REDDY",
    initiatedOn: "11-02-2026"
  },
  {
    id: 7,
    patient: "Mrs Ayesha Qureshi",
    code: "ANH0006422",
    ref: "Ref No:+91-87900-55218",
    category: "CGHS",
    company: "AB PMJAY-GJAY",
    initiatedBy: "KARAN SHETTY",
    initiatedOn: "11-02-2026"
  },
  {
    id: 8,
    patient: "Ms Anna Petrova",
    code: "ANH0006421",
    ref: "Ref No:+7-916-771-4402",
    category: "CGHS",
    company: "AB PMJAY-GJAY",
    initiatedBy: "NITIN PAUL",
    initiatedOn: "11-02-2026"
  }
];

function EmptyState({ label }) {
  return (
    <div className="ins-empty">
      <div className="ins-empty-art">
        <span className="dot a" />
        <span className="dot b" />
        <span className="dot c" />
        <span className="dot d" />
        <div className="icon">
          <FiFileText />
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
}

export default function Insurance() {
  const [mainTab, setMainTab] = useState("claims");
  const [claimsSubTab, setClaimsSubTab] = useState("dashboard");
  const [settlementSubTab, setSettlementSubTab] = useState("claim");

  const [claimsSearchType, setClaimsSearchType] = useState("patient");
  const [settlementSearchType, setSettlementSearchType] = useState("name");

  return (
    <div className="insurance-page">
      <div className="ins-main-tabs">
        <button
          type="button"
          className={mainTab === "claims" ? "active" : ""}
          onClick={() => setMainTab("claims")}
        >
          <FiUsers /> Claims Process
        </button>
        <button
          type="button"
          className={mainTab === "settlement" ? "active" : ""}
          onClick={() => setMainTab("settlement")}
        >
          <FiFileText /> Insurance Settlement
        </button>
      </div>

      {mainTab === "claims" ? (
        <>
          <div className="ins-sub-tabs">
            <button
              type="button"
              className={claimsSubTab === "newEdit" ? "active" : ""}
              onClick={() => setClaimsSubTab("newEdit")}
            >
              Insurance New/Edit Claim
            </button>
            <button
              type="button"
              className={claimsSubTab === "dashboard" ? "active" : ""}
              onClick={() => setClaimsSubTab("dashboard")}
            >
              Insurance Claims Dashboard
            </button>
          </div>

          <div className="ins-filter-row">
            <div className="ins-search-type">
              <label>
                <input
                  type="radio"
                  checked={claimsSearchType === "patient"}
                  onChange={() => setClaimsSearchType("patient")}
                />
                Patient Name.
              </label>
              <label>
                <input
                  type="radio"
                  checked={claimsSearchType === "mr"}
                  onChange={() => setClaimsSearchType("mr")}
                />
                MR.No.
              </label>
              <label>
                <input
                  type="radio"
                  checked={claimsSearchType === "policy"}
                  onChange={() => setClaimsSearchType("policy")}
                />
                Policy No.
              </label>
              <input placeholder="Search By Name" />
            </div>
            <div className="ins-field">
              <label>From Date</label>
              <div className="ins-date">
                <input type="date" defaultValue="2026-02-11" />
                <FiCalendar />
              </div>
            </div>
            <div className="ins-field">
              <label>To Date</label>
              <div className="ins-date">
                <input type="date" defaultValue="2026-02-11" />
                <FiCalendar />
              </div>
            </div>
            <div className="ins-field">
              <label>Category</label>
              <select>
                <option>All</option>
                <option>CGHS</option>
                <option>ESI</option>
              </select>
            </div>
            <div className="ins-field">
              <label>Company Name</label>
              <select>
                <option>Select Company Name</option>
                <option>AB PMJAY-GJAY</option>
              </select>
            </div>
            <div className="ins-field">
              <label>Claim Status</label>
              <select>
                <option>All</option>
                <option>Intimate Claim</option>
              </select>
            </div>
            <button type="button" className="ins-btn search">
              Search
            </button>
            <button type="button" className="ins-btn export">
              <FiFileText /> Export
            </button>
          </div>

          {claimsSubTab === "dashboard" ? (
            <div className="ins-table-card">
              <div className="ins-card-head">Detail View</div>
              <div className="ins-table-wrap">
                <table className="ins-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Patient Details</th>
                      <th>Category/Company/TPA</th>
                      <th>Surgery</th>
                      <th>Initiated Dt/Initiated by</th>
                      <th>Intimation Dt/Intimated By</th>
                      <th>PreAuth. Amt</th>
                      <th>PreAuth Approv. Amt</th>
                      <th>Final Approval</th>
                      <th>Co-Pay</th>
                      <th>MOU Disc.</th>
                      <th>Claim Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {claimRows.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>
                          <div className="ins-patient-cell">
                            <p>{row.patient}</p>
                            <p className="code">{row.code}</p>
                            <p>{row.ref}</p>
                          </div>
                        </td>
                        <td>
                          <p className="blue">Category: {row.category}</p>
                          <p>Company: {row.company}</p>
                        </td>
                        <td className="blue">View</td>
                        <td>
                          <p>
                            <span className="blue">Initiated Dt:</span> {row.initiatedOn}
                          </p>
                          <p>
                            <span className="blue">Initiated By:</span> {row.initiatedBy}
                          </p>
                        </td>
                        <td>
                          <p className="blue">Intimation Dt:</p>
                          <p className="blue">Intimated By:</p>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td className="blue">Intimate Claim</td>
                        <td>
                          <div className="ins-actions">
                            <button type="button" aria-label="Edit">
                              <FiEdit2 />
                            </button>
                            <button type="button" aria-label="Delete">
                              <FiTrash2 />
                            </button>
                            <button type="button" aria-label="History">
                              <FiRefreshCcw />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="ins-pagination">
                <button type="button">First</button>
                <button type="button">Previous</button>
                <span className="active">1</span>
                <span>2</span>
                <button type="button">Next</button>
                <button type="button">Last</button>
              </div>
            </div>
          ) : (
            <div className="ins-table-card">
              <div className="ins-card-head">New/Edit Claims</div>
              <EmptyState label="No data added yet" />
            </div>
          )}
        </>
      ) : (
        <>
          <div className="ins-sub-tabs">
            <button
              type="button"
              className={settlementSubTab === "patient" ? "active" : ""}
              onClick={() => setSettlementSubTab("patient")}
            >
              Patient Wise
            </button>
            <button
              type="button"
              className={settlementSubTab === "claim" ? "active" : ""}
              onClick={() => setSettlementSubTab("claim")}
            >
              Claim wise
            </button>
            <button
              type="button"
              className={settlementSubTab === "tpa" ? "active" : ""}
              onClick={() => setSettlementSubTab("tpa")}
            >
              TPA wise
            </button>
          </div>

          <div className="ins-filter-row settlement">
            <div className="ins-search-type">
              <label>
                <input
                  type="radio"
                  checked={settlementSearchType === "name"}
                  onChange={() => setSettlementSearchType("name")}
                />
                Name
              </label>
              <label>
                <input
                  type="radio"
                  checked={settlementSearchType === "mr"}
                  onChange={() => setSettlementSearchType("mr")}
                />
                MR.No.
              </label>
              <label>
                <input
                  type="radio"
                  checked={settlementSearchType === "claim"}
                  onChange={() => setSettlementSearchType("claim")}
                />
                Claim No.
              </label>
              <label>
                <input
                  type="radio"
                  checked={settlementSearchType === "bill"}
                  onChange={() => setSettlementSearchType("bill")}
                />
                Bill No.
              </label>
              <input placeholder="Search By Name" />
            </div>
            <div className="ins-field">
              <label>From Date</label>
              <div className="ins-date">
                <input type="date" defaultValue="2026-02-11" />
                <FiCalendar />
              </div>
            </div>
            <div className="ins-field">
              <label>To Date</label>
              <div className="ins-date">
                <input type="date" defaultValue="2026-02-11" />
                <FiCalendar />
              </div>
            </div>
            <div className="ins-field wide">
              <label>Hospital</label>
              <select>
                <option>AESHRAT NURSING HOME EYE DIVISION</option>
              </select>
            </div>
            <div className="ins-field">
              <label>Category</label>
              <select>
                <option>All</option>
                <option>CGHS</option>
              </select>
            </div>
            <div className="ins-field">
              <label>Company</label>
              <select>
                <option>Select Company</option>
                <option>AB PMJAY-GJAY</option>
              </select>
            </div>
            <button type="button" className="ins-btn search">
              Search
            </button>
          </div>

          <div className="ins-table-card">
            <div className="ins-card-head">Claimwise List</div>
            <EmptyState label="No data added yet" />
          </div>
        </>
      )}
    </div>
  );
}
