import { useMemo, useRef, useState } from "react";
import {
  FiCalendar,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiEdit2,
  FiFileText,
  FiPlus,
  FiRefreshCw,
  FiSave,
  FiSearch,
  FiUpload
} from "react-icons/fi";
import "./Pharmacy.css";

const mainTabs = [
  "Dashboard",
  "Item Master",
  "Purchase",
  "Transfer",
  "Vendor",
  "Stocks",
  "Indent",
  "Stock & Adjustment",
  "Settings"
];

const reportGroups = [
  {
    title: "IOL",
    color: "#8aa5c7",
    items: [
      "IOL GRN Detail Report",
      "IOL Purchase Summary",
      "IOL Sales Summary Report",
      "IOL StockAdjustment Report",
      "IOL Ready To Expire Stock Report",
      "IOL Expiry Stock Report",
      "IOL Closing Stock Report",
      "Stock Report",
      "IOL Stock Movement Report",
      "IOL Consumable Report by Patient",
      "IOL Purchase Order Report",
      "IOL Purchase Order Details Report",
      "IOL Purchase Return Summary"
    ]
  },
  {
    title: "Inventory",
    color: "#4e8fc4",
    items: [
      "Closing Stock Report",
      "GRN Summary Report",
      "GRN Detail Report",
      "Inventory Expiry Stock Report",
      "Consumable Report by Patient",
      "Inventory Purchase Return Report",
      "Department Stock Report",
      "Inventory Reorder Level Report",
      "Inventory Ready to Expire Stock Report",
      "OTConsumeReport",
      "Inventory General Category Closing Stock Report",
      "Inventory General Category Consumption Report",
      "Hospital Stock Adjustment Report",
      "Inventory Stock Movement Report",
      "Inventory Vendor Payment",
      "Inventory INTransit Itemwise Details"
    ]
  }
];

const itemRows = Array.from({ length: 32 }, (_, i) => ({
  code: `IMED${String(1000 + i)}`,
  category: i % 4 === 0 ? "Surgicals" : "Medicine",
  subCategory: ["Drops", "Tablet", "Syringe", "Ointment", "Lens"][i % 5],
  name: ["BRINZOX", "LUBRISOFT", "EPITRATE", "SYMHYLO", "AQUASURGE", "DISPOVAN"][i % 6],
  manufacturer: ["AJANTA", "IPCA", "SUNWAYS", "NATARAJ", "ALKEM", "GLENMARK"][i % 6],
  hsn: `3004${100 + i}`,
  gst: [0, 5, 12][i % 3],
  price: (34 + i * 5.7).toFixed(2),
  minStock: 5 + (i % 5),
  maxStock: 20 + (i % 4) * 5,
  status: i % 6 !== 0
}));

const vendorRows = [
  ["Sunrise Medico", "VND901", "+91 98765 43210", "Active"],
  ["Al Noor Pharma LLC", "VND902", "+971 50 123 4567", "Active"],
  ["HealthBridge Supplies", "VND903", "+1 415 555 0112", "Active"],
  ["CareWell Agencies", "VND904", "+91 94370 55061", "Pending"],
  ["Omni Clinical Trade", "VND905", "+44 7700 900123", "Inactive"],
  ["MediKart Distributors", "VND906", "+91 88957 33040", "Active"],
  ["BlueWave Pharma", "VND907", "+61 412 345 678", "Active"]
];

const stockRows = Array.from({ length: 28 }, (_, i) => ({
  idx: i + 1,
  product: ["BIDIN-T", "BRINZOX", "CMC AQUASURGE", "CITIMET", "TRISOPT E/D"][i % 5],
  sub: ["Drops", "Tablet", "Ointment"][i % 3],
  exp: `${(i % 10) + 1}/202${6 + (i % 3)}`,
  batch: `BT${500 + i}`,
  stock: 2 + i,
  vendor: ["NATARAJ AGENCIES", "OMM SAI ENTERPRISES", "SS DISTRIBUTORS"][i % 3],
  price: (73 + i * 2.9).toFixed(2)
}));

export default function Inventory() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [itemSub, setItemSub] = useState("Medicine Item Master");
  const [purchaseSub, setPurchaseSub] = useState("Purchase Order");
  const [transferSub, setTransferSub] = useState("Transfer");
  const [vendorSub, setVendorSub] = useState("Vendor Creation");
  const [stocksSub, setStocksSub] = useState("Department Stock");
  const [indentSub, setIndentSub] = useState("Stock Requests");
  const [adjustSub, setAdjustSub] = useState("Stock Adjustment");
  const [settingsSub, setSettingsSub] = useState("Branch Detail");
  const [uploadedRows, setUploadedRows] = useState([]);
  const [uploadMessage, setUploadMessage] = useState("No upload yet");
  const uploadInputRef = useRef(null);

  const itemMasterRows = useMemo(() => itemRows, []);

  const handleTemplateDownload = () => {
    const csv = "product,batch,expiry,qty,price,hsn\nBRINZOX,BT100,07/2027,10,420.72,30042039\n";
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "inventory_stock_adjustment_template.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setUploadMessage("Template downloaded");
  };

  const handleUploadFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result || "").trim();
      const [headerLine, ...lines] = text.split("\n").filter(Boolean);
      if (!headerLine || lines.length === 0) {
        setUploadMessage("Uploaded file has no data");
        setUploadedRows([]);
        return;
      }
      const headers = headerLine.split(",").map((h) => h.trim());
      const parsed = lines.map((line, idx) => {
        const values = line.split(",").map((v) => v.trim());
        const row = { id: idx + 1 };
        headers.forEach((key, i) => {
          row[key] = values[i] || "";
        });
        return row;
      });
      setUploadedRows(parsed);
      setUploadMessage(`${parsed.length} row(s) uploaded from ${file.name}`);
    };
    reader.readAsText(file);
  };

  return (
    <div className="pharmacy-page">
      <div className="ph-main-tabs">
        {mainTabs.map((tab) => (
          <button key={tab} type="button" className={`ph-main-tab ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Dashboard" && (
        <div className="ph-card ph-stretch">
          <div className="inv-dash-top">
            <div className="inv-stat-card">
              <span className="inv-stat-label">Total Reports</span>
              <strong>29</strong>
            </div>
            <div className="inv-stat-card">
              <span className="inv-stat-label">Categories</span>
              <strong>2 Active</strong>
            </div>
            <label className="inv-search">
              Quick Find
              <input placeholder="Type report name..." />
            </label>
          </div>
          {reportGroups.map((group) => (
            <div key={group.title} className="ph-report-group">
              <div className="inv-group-head">
                <h3>{group.title}</h3>
                <span>{group.items.length} reports</span>
              </div>
              <div className="ph-report-grid">
                {group.items.map((item) => (
                  <button key={item} className="ph-report-card" type="button">
                    <span className="ph-report-icon" style={{ background: group.color }}>
                      <FiFileText />
                    </span>
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Item Master" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Medicine Item Master", "Lens Item Master", "IOL Item Master"].map((tab) => (
              <button key={tab} type="button" className={itemSub === tab ? "active" : ""} onClick={() => setItemSub(tab)}>{tab}</button>
            ))}
          </div>

          <div className="ph-section-head">
            <h3>New Master Product List</h3>
            <div className="ph-actions-row">
              <button type="button" className="ph-dark-btn"><FiUpload /> Upload Item Master</button>
              <button type="button" className="ph-outline-btn"><FiDownload /> Download Template</button>
              <button type="button" className="ph-dark-btn"><FiPlus /> Add New</button>
            </div>
          </div>

          <div className="ph-toolbar-grid">
            <label>Category<select><option>Select Type</option></select></label>
            <label>Stock Type<select><option>All</option></select></label>
            <label>Status Type<select><option>Active</option></select></label>
            <label>Budget Type<select><option>All</option></select></label>
            <label>Search Product<input placeholder="Search Product" /></label>
            <div className="ph-inline-actions"><button type="button" className="ph-search-btn"><FiSearch /> Search</button><button type="button" className="ph-reset-btn"><FiRefreshCw /> Reset</button></div>
          </div>

          <div className="ph-table-wrap wide tall">
            <table className="ph-table">
              <thead>
                <tr>
                  <th>Product Code</th><th>Category</th><th>Sub Category</th><th>Name Of Product</th><th>Manufacturer</th><th>HSN</th><th>GST</th><th>Price</th><th>Max Stock</th><th>Min Stock</th><th>Status</th><th>Action</th>
                </tr>
              </thead>
              <tbody>
                {itemMasterRows.map((row) => (
                  <tr key={row.code}>
                    <td>{row.code}</td><td>{row.category}</td><td>{row.subCategory}</td><td>{row.name}</td><td>{row.manufacturer}</td><td>{row.hsn}</td><td>{row.gst}%</td><td>{row.price}</td><td>{row.maxStock}</td><td>{row.minStock}</td><td><span className={`ph-toggle ${row.status ? "on" : ""}`} /></td><td className="ph-cell-icons"><FiEdit2 /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PaginationBar totalPages={8} />
        </div>
      )}

      {activeTab === "Purchase" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Purchase Order", "Purchase Order Approval", "Purchase Order List", "Purchase History", "Purchase Return List", "Vendor Payments"].map((tab) => (
              <button key={tab} type="button" className={purchaseSub === tab ? "active" : ""} onClick={() => setPurchaseSub(tab)}>{tab}</button>
            ))}
          </div>
          {purchaseSub === "Purchase Order" ? (
            <>
              <div className="ph-form-grid">
                <label>Indent Number<input placeholder="Search" /></label>
                <label>Supplier Name*<select><option>Select Supplier</option></select></label>
                <label>Order Date<div className="ph-input-icon"><input type="date" defaultValue="2026-02-11" /><FiCalendar /></div></label>
                <label>To Branch*<select><option>AESHRAT NURSING HOME EYE DIVISION</option></select></label>
                <label>Expected Delivery Date<div className="ph-input-icon"><input type="date" defaultValue="2026-02-11" /><FiCalendar /></div></label>
              </div>
              <div className="ph-form-grid second">
                <label>Category<select><option>Medicine</option></select></label>
                <label>Product*<input placeholder="Product" /></label>
                <label>Units/Strip*<input placeholder="Units/Strip" /></label>
                <label>No.Of Strips(Qty)*<input placeholder="Strips" /></label>
                <label>Tax Type<select><option>GST</option></select></label>
                <label>Price/Strip*<input placeholder="Price" /></label>
                <div className="ph-inline-actions"><button className="ph-reset-btn" type="button"><FiRefreshCw /> Reset</button><button className="ph-dark-btn" type="button"><FiPlus /> Add</button></div>
              </div>
              <EmptyData title="No Purchase OrderItems Detail was found!" subtitle="We couldn't find any data for the selected date." />
            </>
          ) : <EmptyData title={purchaseSub} subtitle="Module ready. Dummy data can be added on submit." />}
        </div>
      )}

      {activeTab === "Transfer" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Transfer", "Transfer History", "Transfer List", "Accepted", "Rejected"].map((tab) => (
              <button key={tab} type="button" className={transferSub === tab ? "active" : ""} onClick={() => setTransferSub(tab)}>{tab}</button>
            ))}
          </div>
          {transferSub === "Transfer" ? (
            <>
              <div className="ph-form-grid">
                <label>From Branch<select><option>AESHRAT NURSING HOME EYE DIVISION</option></select></label>
                <label>To Branch<select><option>Select</option></select></label>
                <label>Category<select><option>Medicine</option></select></label>
                <label>Product Name<input placeholder="Enter Medicine" /></label>
                <label>Batch<select><option>Select</option></select></label>
                <label>Strip(Qty)*<input placeholder="Strip" /></label>
              </div>
              <EmptyData title="No Transfer was found!" subtitle="We couldn't find any data for the selected date." />
            </>
          ) : <EmptyData title={transferSub} subtitle="No records in this sub tab yet." />}
        </div>
      )}

      {activeTab === "Vendor" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Vendor Creation", "Vendor Approvals", "Rejected List", "Vendor List"].map((tab) => (
              <button key={tab} type="button" className={vendorSub === tab ? "active" : ""} onClick={() => setVendorSub(tab)}>{tab}</button>
            ))}
          </div>

          {vendorSub === "Vendor Creation" && (
            <div className="ph-form-grid second">
              <label>Name Of The Company(*)<input placeholder="Vendor Name" /></label>
              <label>Mobile(*)<input placeholder="Mobile No" /></label>
              <label>LandLine<input placeholder="LandLine" /></label>
              <label>Email<input placeholder="Email" /></label>
              <label>DL No 1(*)<input placeholder="DL No 1" /></label>
              <label>DL No 2<input placeholder="DL No 2" /></label>
              <label>TIN No<input placeholder="TIN" /></label>
              <label>GSTIN No<input placeholder="GSTIN" /></label>
              <label>PAN No<input placeholder="PAN" /></label>
              <label>Address<input placeholder="Address" /></label>
              <label>State<input placeholder="State" /></label>
              <label>Country<input placeholder="Country" /></label>
            </div>
          )}

          {vendorSub !== "Vendor Creation" && (
            <div className="ph-table-wrap tall">
              <table className="ph-table small">
                <thead><tr><th>Name</th><th>Code</th><th>Mobile</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  {vendorRows.map((row) => (
                    <tr key={row[1]}>
                      <td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td className="ph-cell-icons"><FiEdit2 /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {activeTab === "Stocks" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Department Stock", "Department Return stock", "Consume Department Stock", "Department Consumed History", "Store Stock", "Library Stock"].map((tab) => (
              <button key={tab} type="button" className={stocksSub === tab ? "active" : ""} onClick={() => setStocksSub(tab)}>{tab}</button>
            ))}
          </div>
          <div className="ph-toolbar-grid">
            <label>Branch<select><option>AESHRAT NURSING HOME EYE DIVISION</option></select></label>
            <label>Department<select><option>All</option></select></label>
            <label>Stock<select><option>Non Expired</option></select></label>
            <label>Category<select><option>All</option></select></label>
            <label>Product Search<input placeholder="Product Name" /></label>
            <div className="ph-inline-actions"><button className="ph-search-btn" type="button"><FiSearch /> Search</button><button className="ph-reset-btn" type="button"><FiRefreshCw /> Reset</button><button className="ph-export-btn" type="button"><FiUpload /> Export</button></div>
          </div>
          <div className="ph-table-wrap tall wide">
            <table className="ph-table">
              <thead><tr><th>S.No</th><th>Product Name</th><th>Sub Category</th><th>Exp Date</th><th>Batch</th><th>Stock</th><th>Vendor</th><th>Price</th></tr></thead>
              <tbody>
                {stockRows.map((row) => (
                  <tr key={row.idx}><td>{row.idx}</td><td>{row.product}</td><td>{row.sub}</td><td>{row.exp}</td><td>{row.batch}</td><td>{row.stock}</td><td>{row.vendor}</td><td>{row.price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <PaginationBar totalPages={6} />
        </div>
      )}

      {activeTab === "Indent" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Stock Requests", "Stock Issued History", "Indent Request", "Indent Request History", "Pending Approvals", "Approvals History"].map((tab) => (
              <button key={tab} type="button" className={indentSub === tab ? "active" : ""} onClick={() => setIndentSub(tab)}>{tab}</button>
            ))}
          </div>
          <h3>Stock Request(s)</h3>
          <div className="ph-form-grid">
            <label>From<div className="ph-input-icon"><input type="date" defaultValue="2026-02-11" /><FiCalendar /></div></label>
            <label>To<div className="ph-input-icon"><input type="date" defaultValue="2026-02-11" /><FiCalendar /></div></label>
            <label>Branch<select><option>AESHRAT NURSING HOME EYE DIVISION</option></select></label>
            <label>Department<select><option>All</option></select></label>
            <label>Indent No.<input placeholder="Indent No." /></label>
            <div className="ph-inline-actions"><button className="ph-search-btn" type="button"><FiSearch /> Search</button><button className="ph-reset-btn" type="button"><FiRefreshCw /> Reset</button></div>
          </div>
          <EmptyData title={`No ${indentSub} Found`} subtitle="No records available with selected dates !!" />
        </div>
      )}

      {activeTab === "Stock & Adjustment" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Stock Adjustment", "Stock Adjustment List", "Settings", "Store Stock Adjustment"].map((tab) => (
              <button key={tab} type="button" className={adjustSub === tab ? "active" : ""} onClick={() => setAdjustSub(tab)}>{tab}</button>
            ))}
          </div>

          <div className="ph-form-grid">
            <label>Adjustment No<input placeholder="Adjustment No" /></label>
            <label>Adjustment Date<div className="ph-input-icon"><input type="date" defaultValue="2026-02-11" /><FiCalendar /></div></label>
            <label>Adjustment Type*<select><option>Select</option></select></label>
            <label>Branch<select><option>AESHRAT NURSING HOME EYE DIVISION</option></select></label>
            <div className="ph-inline-actions">
              <button type="button" className="ph-dark-btn" onClick={() => uploadInputRef.current?.click()}>
                <FiUpload /> Upload Stock Adjustment
              </button>
              <button type="button" className="ph-outline-btn" onClick={handleTemplateDownload}>
                <FiDownload /> Download Template
              </button>
              <input ref={uploadInputRef} type="file" accept=".csv" onChange={handleUploadFile} hidden />
            </div>
          </div>

          <div className="ph-form-grid second">
            <label>Category<select><option>Select</option></select></label>
            <label>Product*<input placeholder="Product" /></label>
            <label>Manufacturer<input placeholder="Manufacturer" /></label>
            <label>ExpiryDate*<input placeholder="MM/YYYY" /></label>
            <label>Qty*<input placeholder="Qty" /></label>
            <label>GST Total%<select><option>0</option></select></label>
            <label>HSN Code*<input placeholder="HSN" /></label>
            <label>Comments<input placeholder="Enter Comments" /></label>
            <div className="ph-inline-actions"><button className="ph-dark-btn" type="button"><FiPlus /> Add</button><button className="ph-reset-btn" type="button"><FiRefreshCw /> Reset</button></div>
          </div>

          <div className="ph-upload-note">{uploadMessage}</div>
          <div className="ph-table-wrap tall">
            <table className="ph-table small">
              <thead><tr><th>#</th><th>Product</th><th>Batch</th><th>Expiry</th><th>Qty</th><th>Price</th><th>HSN</th></tr></thead>
              <tbody>
                {uploadedRows.length === 0 ? (
                  <tr><td colSpan={7}>No uploaded rows yet. Upload a CSV to populate.</td></tr>
                ) : (
                  uploadedRows.map((row) => (
                    <tr key={row.id}><td>{row.id}</td><td>{row.product || "-"}</td><td>{row.batch || "-"}</td><td>{row.expiry || "-"}</td><td>{row.qty || "-"}</td><td>{row.price || "-"}</td><td>{row.hsn || "-"}</td></tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "Settings" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Branch Detail", "Other Setting", "Purchase Approval Users", "PO Approval Users", "PO Print"].map((tab) => (
              <button key={tab} type="button" className={settingsSub === tab ? "active" : ""} onClick={() => setSettingsSub(tab)}>{tab}</button>
            ))}
          </div>

          <div className="ph-form-grid second">
            <label>Name<input placeholder="Enter Name" /></label>
            <label>Mobile<input placeholder="Mobile" /></label>
            <label>Land Line<input placeholder="Landline" /></label>
            <label>Email<input placeholder="Email" /></label>
            <label>GST No<input placeholder="GST No" /></label>
            <label>TIN No<input placeholder="TIN No" /></label>
            <label>Address<input placeholder="Address" /></label>
            <label>Area/Town/Village<input placeholder="Area" /></label>
            <label>City<input placeholder="City" /></label>
            <label>State<input defaultValue="Odisha" /></label>
            <label>Country<input defaultValue="INDIA" /></label>
          </div>
          <div className="ph-footer-actions">
            <button type="button" className="ph-danger-btn">Cancel</button>
            <button type="button" className="ph-dark-btn"><FiSave /> Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

function EmptyData({ title, subtitle, emoji = "📦" }) {
  return (
    <div className="ph-empty-block">
      <div className="ph-empty-icon" aria-hidden="true">
        {emoji}
      </div>
      <p className="ph-empty-title">{title}</p>
      <p className="ph-empty-sub">{subtitle}</p>
    </div>
  );
}

function PaginationBar({ totalPages = 1 }) {
  const [activePage, setActivePage] = useState(1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goFirst = () => setActivePage(1);
  const goLast = () => setActivePage(totalPages);
  const goPrev = () => setActivePage((prev) => Math.max(1, prev - 1));
  const goNext = () => setActivePage((prev) => Math.min(totalPages, prev + 1));

  return (
    <div className="ph-pagination">
      <button type="button" className="ph-page-btn" onClick={goFirst}><FiChevronsLeft /> First</button>
      <button type="button" className="ph-page-btn" onClick={goPrev}><FiChevronLeft /> Prev</button>
      {pages.map((page) => (
        <button key={page} type="button" className={`ph-page-number ${activePage === page ? "active" : ""}`} onClick={() => setActivePage(page)}>
          {page}
        </button>
      ))}
      <button type="button" className="ph-page-btn" onClick={goNext}>Next <FiChevronRight /></button>
      <button type="button" className="ph-page-btn" onClick={goLast}>Last <FiChevronsRight /></button>
    </div>
  );
}
