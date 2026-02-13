import { useMemo, useState } from "react";
import { FiCalendar, FiEdit2, FiPackage, FiSearch } from "react-icons/fi";
import "./Counsellor.css";

const patientRows = [
  {
    id: 1,
    name: "Mr. Rakesh Kumar Nayak",
    mrNo: "ANH0007424",
    meta: "Male-57Y | OM | OD",
    phone: "8249796124",
    advisedBy: "ConsultantOphthalmologist"
  },
  {
    id: 2,
    name: "Mrs. Sunita Patra",
    mrNo: "ANH0007423",
    meta: "Female-64Y | OM | OD",
    phone: "8456810343",
    advisedBy: "ConsultantOphthalmologist"
  },
  {
    id: 3,
    name: "Mrs. Gouri Bishoyi",
    mrNo: "ANH0007422",
    meta: "Female-57Y | OM | OD",
    phone: "7985707552",
    advisedBy: "ConsultantOphthalmologist"
  },
  {
    id: 4,
    name: "Mr. Debaraj Pradhan",
    mrNo: "ANH0007421",
    meta: "Male-70Y | OM | OD",
    phone: "7854990273",
    advisedBy: "ConsultantOphthalmologist"
  },
  {
    id: 5,
    name: "Mrs. Sarita Sahu",
    mrNo: "ANH0007420",
    meta: "Female-58Y | OM | OD",
    phone: "7735047756",
    advisedBy: "ConsultantOphthalmologist"
  },
  {
    id: 6,
    name: "Mr. Kailash Behera",
    mrNo: "ANH0007419",
    meta: "Male-56Y | OM | OD",
    phone: "9040494872",
    advisedBy: "ConsultantOphthalmologist"
  },
  {
    id: 7,
    name: "Mrs. Lakshmi Dora",
    mrNo: "ANH0007418",
    meta: "Female-51Y | OM | OD",
    phone: "9937766754",
    advisedBy: "ConsultantOphthalmologist"
  },
  {
    id: 8,
    name: "Mrs. Nirmala Gouda",
    mrNo: "ANH0007417",
    meta: "Female-63Y | OM | OD",
    phone: "9938684239",
    advisedBy: "ConsultantOphthalmologist"
  },
  {
    id: 9,
    name: "Miss. Priya Patro",
    mrNo: "ANH0007058",
    meta: "Female-23Y | OM | OD",
    phone: "9937481049",
    advisedBy: "ConsultantOphthalmologist"
  },
  {
    id: 10,
    name: "Mr. Anupam Mohanty",
    mrNo: "ANH0007059",
    meta: "Male-45Y | OM | OD",
    phone: "9776654321",
    advisedBy: "ConsultantOphthalmologist"
  },
  {
    id: 11,
    name: "Mrs. Kavita Jena",
    mrNo: "ANH0007060",
    meta: "Female-49Y | OM | OD",
    phone: "9437128765",
    advisedBy: "ConsultantOphthalmologist"
  },
  {
    id: 12,
    name: "Mr. Prakash Mishra",
    mrNo: "ANH0007061",
    meta: "Male-62Y | OM | OD",
    phone: "9898456123",
    advisedBy: "ConsultantOphthalmologist"
  }
];

const counsellorStatuses = ["All", "Open", "Booked", "Closed"];
const surgeons = ["Select Surgeon...", "Dr. Consultant Ophthalmologist", "Dr. Rahman"];
const coSurgeons = ["Select", "Dr. A", "Dr. B"];
const counsellors = ["Select Counsellor...", "Counsellor A", "Counsellor B"];

function EmptyArt({ label }) {
  return (
    <div className="cs-empty-box">
      <div className="cs-empty-art">
        <span className="dot dot-a" />
        <span className="dot dot-b" />
        <span className="dot dot-c" />
        <span className="dot dot-d" />
        <div className="icon">
          <FiCalendar />
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
}

export default function Counsellor() {
  const [detailTab, setDetailTab] = useState("add");
  const [filters, setFilters] = useState({
    fromDate: "2026-02-11",
    toDate: "2026-02-11",
    hospital: "AESHRAT NURSING HOME EYE DIVISION",
    status: "All",
    searchType: "name",
    searchText: ""
  });
  const [iolFilters, setIolFilters] = useState({
    fromDate: "2026-02-11",
    toDate: "2026-02-11",
    branch: "AESHRAT NURSING HOME EYE DIVISION",
    manufacturer: "All",
    iol: "All",
    stock: "All"
  });
  const [selectedPatientId, setSelectedPatientId] = useState(1);
  const [selectType, setSelectType] = useState("All");
  const [paymentType, setPaymentType] = useState("cash");
  const [primarySurgeon, setPrimarySurgeon] = useState(surgeons[0]);
  const [coSurgeon, setCoSurgeon] = useState(coSurgeons[0]);
  const [counsellor, setCounsellor] = useState(counsellors[0]);

  const selectedPatient = useMemo(
    () => patientRows.find((patient) => patient.id === selectedPatientId) ?? patientRows[0],
    [selectedPatientId]
  );

  return (
    <div className="counsellor-page">
      <div className="cs-detail-tabs">
        <button
          type="button"
          className={detailTab === "add" ? "active" : ""}
          onClick={() => setDetailTab("add")}
        >
          <FiEdit2 /> Add Details
        </button>
        <button
          type="button"
          className={detailTab === "iol" ? "active" : ""}
          onClick={() => setDetailTab("iol")}
        >
          <FiPackage /> IOL Details
        </button>
      </div>

      {detailTab === "add" ? (
        <>
          <div className="cs-filter-bar">
            <div className="cs-field">
              <label>From Date</label>
              <div className="cs-date-input">
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

            <div className="cs-field">
              <label>To Date</label>
              <div className="cs-date-input">
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

            <div className="cs-field wide">
              <label>Hospital/Clinic</label>
              <select
                value={filters.hospital}
                onChange={(event) =>
                  setFilters((prev) => ({ ...prev, hospital: event.target.value }))
                }
              >
                <option>AESHRAT NURSING HOME EYE DIVISION</option>
                <option>AESHRAT OPD</option>
                <option>AESHRAT MAIN</option>
              </select>
            </div>

            <div className="cs-field">
              <label>Counselor Status</label>
              <select
                value={filters.status}
                onChange={(event) =>
                  setFilters((prev) => ({ ...prev, status: event.target.value }))
                }
              >
                {counsellorStatuses.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </div>

            <div className="cs-search-wrap">
              <div className="cs-radio">
                <label>
                  <input
                    type="radio"
                    name="searchType"
                    checked={filters.searchType === "name"}
                    onChange={() =>
                      setFilters((prev) => ({ ...prev, searchType: "name" }))
                    }
                  />
                  Name
                </label>
                <label>
                  <input
                    type="radio"
                    name="searchType"
                    checked={filters.searchType === "mrNo"}
                    onChange={() =>
                      setFilters((prev) => ({ ...prev, searchType: "mrNo" }))
                    }
                  />
                  MR.No
                </label>
              </div>

              <div className="cs-search-box">
                <input
                  value={filters.searchText}
                  onChange={(event) =>
                    setFilters((prev) => ({ ...prev, searchText: event.target.value }))
                  }
                  placeholder={
                    filters.searchType === "name" ? "Search By Name" : "Search By MR.No"
                  }
                />
                <button type="button" aria-label="Search">
                  <FiSearch />
                </button>
              </div>
              <button className="cs-search-btn" type="button">
                Search
              </button>
            </div>
          </div>

          <div className="cs-main">
            <section className="cs-patient-list">
              <header>Patient List</header>
              <div className="cs-patients-scroll">
                {patientRows.map((patient) => (
                  <button
                    key={patient.id}
                    className={`cs-patient-item ${
                      selectedPatient.id === patient.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedPatientId(patient.id)}
                    type="button"
                  >
                    <div className="cs-patient-index">{patient.id}.</div>
                    <div className="cs-patient-details">
                      <p className="cs-name">{patient.name}</p>
                      <p className="cs-advised">
                        <strong>Advised By:</strong> {patient.advisedBy}
                      </p>
                      <p className="cs-mr">MR.No : {patient.mrNo}</p>
                      <p className="cs-meta">
                        {patient.meta} {patient.phone}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="cs-pagination">
                <button type="button">First</button>
                <button type="button">Previous</button>
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
                <button type="button">Next</button>
                <button type="button">Last</button>
              </div>
            </section>

            <section className="cs-content">
              <div className="cs-top-actions">
                <div className="cs-field tiny">
                  <label>Select Type</label>
                  <select
                    value={selectType}
                    onChange={(event) => setSelectType(event.target.value)}
                  >
                    <option>All</option>
                    <option>Surgery</option>
                    <option>Procedure</option>
                  </select>
                </div>
                <button className="green" type="button">
                  Create Surgery
                </button>
                <button className="teal" type="button">
                  Add Insurance
                </button>
                <button className="outline-orange" type="button">
                  Upload Consents
                </button>
                <button className="doc-material" type="button">
                  Document & Material
                </button>
              </div>

              <div className="cs-form-row">
                <div className="cs-payment">
                  <label>
                    <input
                      type="radio"
                      name="paymentType"
                      checked={paymentType === "cash"}
                      onChange={() => setPaymentType("cash")}
                    />
                    Cash
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentType"
                      checked={paymentType === "credit"}
                      onChange={() => setPaymentType("credit")}
                    />
                    Credit
                  </label>
                </div>

                <div className="cs-field grow">
                  <label>
                    Primary <span>*</span>
                  </label>
                  <select
                    value={primarySurgeon}
                    onChange={(event) => setPrimarySurgeon(event.target.value)}
                  >
                    {surgeons.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="cs-field grow">
                  <label>Co Surgeon</label>
                  <select
                    value={coSurgeon}
                    onChange={(event) => setCoSurgeon(event.target.value)}
                  >
                    {coSurgeons.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="cs-field grow">
                  <label>Counsellor</label>
                  <select
                    value={counsellor}
                    onChange={(event) => setCounsellor(event.target.value)}
                  >
                    {counsellors.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <EmptyArt label="No Surgeries Found" />

              <div className="cs-table-card">
                <div className="cs-table-header">
                  <h4>Investigations List</h4>
                  <div className="cs-table-actions">
                    <label>
                      <input type="checkbox" />
                      Select All
                    </label>
                    <button type="button">Send To</button>
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Select</th>
                      <th>Date</th>
                      <th>Investigation</th>
                      <th>Doctor</th>
                      <th>Status</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>11-02-2026</td>
                      <td>
                        <strong>A SCAN For One Eye</strong>
                        <p>Opth Investigation</p>
                      </td>
                      <td>Dr. Consultant Ophthalmologist</td>
                      <td>Advised</td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="cs-section-card">
                <h4>Procedures List</h4>
                <EmptyArt label="No Procedures Found" />
              </div>

              <div className="cs-section-card">
                <h4>Contact Lens Items</h4>
                <EmptyArt label="No ContactLens Found" />
              </div>
            </section>
          </div>
        </>
      ) : (
        <section className="cs-iol-page">
          <div className="cs-iol-filter">
            <div className="cs-field">
              <label>From Date</label>
              <div className="cs-date-input">
                <input
                  type="date"
                  value={iolFilters.fromDate}
                  onChange={(event) =>
                    setIolFilters((prev) => ({ ...prev, fromDate: event.target.value }))
                  }
                />
                <FiCalendar />
              </div>
            </div>
            <div className="cs-field">
              <label>To Date</label>
              <div className="cs-date-input">
                <input
                  type="date"
                  value={iolFilters.toDate}
                  onChange={(event) =>
                    setIolFilters((prev) => ({ ...prev, toDate: event.target.value }))
                  }
                />
                <FiCalendar />
              </div>
            </div>
            <div className="cs-field wide">
              <label>Branch</label>
              <select
                value={iolFilters.branch}
                onChange={(event) =>
                  setIolFilters((prev) => ({ ...prev, branch: event.target.value }))
                }
              >
                <option>AESHRAT NURSING HOME EYE DIVISION</option>
                <option>AESHRAT OPD</option>
                <option>AESHRAT MAIN</option>
              </select>
            </div>
            <div className="cs-field">
              <label>Manufacturer</label>
              <select
                value={iolFilters.manufacturer}
                onChange={(event) =>
                  setIolFilters((prev) => ({ ...prev, manufacturer: event.target.value }))
                }
              >
                <option>All</option>
                <option>Aurolab</option>
                <option>Appasamy</option>
              </select>
            </div>
            <div className="cs-field">
              <label>IOL</label>
              <select
                value={iolFilters.iol}
                onChange={(event) =>
                  setIolFilters((prev) => ({ ...prev, iol: event.target.value }))
                }
              >
                <option>All</option>
                <option>Monofocal</option>
                <option>Multifocal</option>
              </select>
            </div>
            <div className="cs-field">
              <label>STOCK</label>
              <select
                value={iolFilters.stock}
                onChange={(event) =>
                  setIolFilters((prev) => ({ ...prev, stock: event.target.value }))
                }
              >
                <option>All</option>
                <option>Available</option>
                <option>Low</option>
                <option>Out</option>
              </select>
            </div>
            <button type="button" className="cs-search-btn iol">
              Search
            </button>
          </div>

          <div className="cs-table-card iol-card">
            <div className="cs-table-header">
              <h4>IOL Company List</h4>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Manufacturer</th>
                  <th>IOL Name</th>
                  <th>IOL Power</th>
                  <th>Allocated To</th>
                </tr>
              </thead>
            </table>
            <div className="cs-iol-empty">
              <EmptyArt label="No IOL Details available with selected dates !!" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
