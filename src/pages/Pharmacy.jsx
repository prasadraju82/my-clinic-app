import { useMemo, useRef, useState } from "react";
import {
  FiCalendar,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
  FiDownload,
  FiEdit2,
  FiEye,
  FiFileText,
  FiPlus,
  FiRefreshCw,
  FiSave,
  FiSearch,
  FiTrash2,
  FiUpload
} from "react-icons/fi";
import "./Pharmacy.css";

const mainTabs = [
  "Dashboard",
  "Item Master",
  "Purchase",
  "Transfer",
  "Sales",
  "Vendor",
  "Stocks",
  "Indent",
  "Stock Adjustment",
  "Settings"
];

const itemMasterRows = [
  {
    category: "Medicine",
    subCategory: "Drops",
    name: "CMC ( AQUASURGE )",
    gst: 5,
    unit: "ml",
    hsn: "300490",
    strip: 1,
    price: 70.05,
    generic: "Carboxymethylcellulose",
    manufacturer: "IPCA LAB",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Tablet",
    name: "RVGRAIN ( RENASCENT ) TAB",
    gst: 5,
    unit: "pcs",
    hsn: "30049093",
    strip: 1,
    price: 37,
    generic: "Vitamin Blend",
    manufacturer: "RENASCI",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Eye Drops",
    name: "BRINZOX",
    gst: 5,
    unit: "ml",
    hsn: "30042039",
    strip: 1,
    price: 420.72,
    generic: "Brinzolamide",
    manufacturer: "AJANTA LIMITED",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Drops",
    name: "VORIZONE",
    gst: 5,
    unit: "ml",
    hsn: "30041090",
    strip: 1,
    price: 257.15,
    generic: "Voriconazole",
    manufacturer: "BIOMARK LAB",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Tablet",
    name: "ACELOFENAC PLUS",
    gst: 5,
    unit: "mg",
    hsn: "30045090",
    strip: 1,
    price: 183.21,
    generic: "Aceclofenac + Paracetamol",
    manufacturer: "BERRY AI PHARMA",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Ointment",
    name: "TALIMUS OINTMENT",
    gst: 5,
    unit: "g",
    hsn: "30049099",
    strip: 1,
    price: 300,
    generic: "Tacrolimus",
    manufacturer: "AJANTA LIMITED",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Drops",
    name: "MOXIFLOXACIN GEL",
    gst: 5,
    unit: "ml",
    hsn: "300049087",
    strip: 1,
    price: 150.39,
    generic: "Moxifloxacin",
    manufacturer: "KILITCH HEALTHCARE",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Tablet",
    name: "CITIMET TABLET",
    gst: 5,
    unit: "pcs",
    hsn: "30049099",
    strip: 1,
    price: 500,
    generic: "Citicoline 500 mg",
    manufacturer: "SUNWAY",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Drops",
    name: "TRISOPT E/D",
    gst: 5,
    unit: "ml",
    hsn: "30049033",
    strip: 1,
    price: 382.86,
    generic: "Dorzolamide",
    manufacturer: "MICRO LABS",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Drops",
    name: "SYMHYLO EYE DROP",
    gst: 5,
    unit: "ml",
    hsn: "30045039",
    strip: 1,
    price: 253.71,
    generic: "Hyaluronic Acid",
    manufacturer: "BERRY AI PHARMA",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Capsule",
    name: "NEUROZEN PLUS",
    gst: 12,
    unit: "pcs",
    hsn: "30049021",
    strip: 10,
    price: 128.4,
    generic: "Methylcobalamin Complex",
    manufacturer: "HEALIX BIO",
    status: true
  },
  {
    category: "Surgical",
    subCategory: "Consumables",
    name: "STERILE GAUZE PAD",
    gst: 12,
    unit: "pcs",
    hsn: "30059010",
    strip: 20,
    price: 85.5,
    generic: "Sterile Gauze",
    manufacturer: "MEDICARE SUPPLY",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Syrup",
    name: "VITAZINC SYRUP",
    gst: 5,
    unit: "ml",
    hsn: "30049055",
    strip: 1,
    price: 112.9,
    generic: "Multivitamin + Zinc",
    manufacturer: "APEX LIFESCIENCE",
    status: false
  },
  {
    category: "Medicine",
    subCategory: "Tablet",
    name: "GLUCOBALANCE TAB",
    gst: 5,
    unit: "pcs",
    hsn: "30049018",
    strip: 15,
    price: 94.2,
    generic: "Metformin Blend",
    manufacturer: "ZENCARE PHARMA",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Eye Drops",
    name: "LUBRISOFT EYE DROP",
    gst: 5,
    unit: "ml",
    hsn: "30042031",
    strip: 1,
    price: 220.4,
    generic: "Polyethylene Glycol",
    manufacturer: "OCUVISION LABS",
    status: true
  },
  {
    category: "Medicine",
    subCategory: "Injection",
    name: "CEFTRIAX INJ",
    gst: 12,
    unit: "vial",
    hsn: "30041011",
    strip: 1,
    price: 178.6,
    generic: "Ceftriaxone",
    manufacturer: "RIVA BIOCARE",
    status: false
  },
  {
    category: "Medicine",
    subCategory: "Drops",
    name: "BIDIN-LS",
    gst: 5,
    unit: "ml",
    hsn: "30042090",
    strip: 1,
    price: 196.43,
    generic: "Bimatoprost",
    manufacturer: "NATARAJ AGENCIES",
    status: true
  }
];

const vendorRows = [
  {
    name: "ABHISHEK AND CO",
    code: "VND001",
    mobile: "9000000000",
    email: "info@abhishekco.in",
    dl1: "GAI-3749W",
    dl2: "3750WC",
    tin: "N/A",
    gstin: "21GCKPS5738H1Z8",
    pan: "AAAPL9034B",
    status: "Active"
  },
  {
    name: "AMBICA PHARMA",
    code: "VND002",
    mobile: "9376673748",
    email: "support@ambica.co",
    dl1: "GAI-91W/92WC",
    dl2: "3750WC",
    tin: "N/A",
    gstin: "21AAJFA5550C1Z2",
    pan: "AAVFA2930M",
    status: "Active"
  },
  {
    name: "CITY PHARMACEUTICALS",
    code: "VND003",
    mobile: "6802250014",
    email: "sales@citypharma.in",
    dl1: "GAI123W",
    dl2: "GAI124WC",
    tin: "N/A",
    gstin: "21AACFCS012A1ZG",
    pan: "AAQFC3331D",
    status: "Active"
  },
  {
    name: "BERRY AND HERBS PHARMA PVT LTD",
    code: "VND004",
    mobile: "9337663748",
    email: "ops@berryherbs.in",
    dl1: "JPR/2014/27250-27251",
    dl2: "JPR/2014/27252",
    tin: "N/A",
    gstin: "08AAFCH6726L1ZC",
    pan: "AAFCH6726L",
    status: "Active"
  },
  {
    name: "ASMALYA HEALTHCARE",
    code: "VND005",
    mobile: "7978673734",
    email: "contact@asmalya.com",
    dl1: "21APCPB3296E1ZH",
    dl2: "21APCPB3296E2ZH",
    tin: "N/A",
    gstin: "21APCPB3296E1ZH",
    pan: "APCPB3296E",
    status: "Active"
  },
  {
    name: "K.P.S AGENCIES",
    code: "VND006",
    mobile: "7681000541",
    email: "kps@agencies.in",
    dl1: "SLGAI415W",
    dl2: "SLGAI416W",
    tin: "N/A",
    gstin: "21AAEFK1028L1ZP",
    pan: "AAEFK1028L",
    status: "Inactive"
  },
  {
    name: "OMM SAI ENTERPRISES",
    code: "VND007",
    mobile: "9861123344",
    email: "sales@ommsai.in",
    dl1: "ORS-4552W",
    dl2: "ORS-4553W",
    tin: "N/A",
    gstin: "21AAXFO9021L1ZV",
    pan: "AAXFO9021L",
    status: "Active"
  },
  {
    name: "NATARAJ AGENCIES",
    code: "VND008",
    mobile: "9007766554",
    email: "desk@natarajagencies.in",
    dl1: "NAT-2261W",
    dl2: "NAT-2262W",
    tin: "N/A",
    gstin: "21AALFN1182E1ZA",
    pan: "AALFN1182E",
    status: "Active"
  },
  {
    name: "SUNRISE MEDICOS",
    code: "VND009",
    mobile: "9881122334",
    email: "sunrise@medicos.in",
    dl1: "SUN-8743W",
    dl2: "SUN-8744W",
    tin: "N/A",
    gstin: "29ABCFM4567L1Z1",
    pan: "ABCFM4567L",
    status: "Pending"
  },
  {
    name: "GLOBAL PHARMA HOUSE",
    code: "VND010",
    mobile: "8765432109",
    email: "global@pharmahouse.com",
    dl1: "GLB-9102W",
    dl2: "GLB-9103W",
    tin: "N/A",
    gstin: "27AACFG3345H1ZT",
    pan: "AACFG3345H",
    status: "Pending"
  },
  {
    name: "HEALIX BIO LLP",
    code: "VND011",
    mobile: "9911887766",
    email: "info@healixbio.com",
    dl1: "HLX-3500W",
    dl2: "HLX-3501W",
    tin: "N/A",
    gstin: "24AACFH3321P1ZG",
    pan: "AACFH3321P",
    status: "Active"
  },
  {
    name: "ZENCARE DISTRIBUTORS",
    code: "VND012",
    mobile: "9090112233",
    email: "orders@zencare.in",
    dl1: "ZEN-8080W",
    dl2: "ZEN-8081W",
    tin: "N/A",
    gstin: "30AAAFZ2200N1Z7",
    pan: "AAAFZ2200N",
    status: "Active"
  }
];

const stocksRows = [
  {
    code: "ALCASENT",
    name: "ALCASENT EYE DROP ML",
    sub: "Drops",
    exp: "07/2026",
    batch: "HE12490",
    stock: 5,
    date: "08-10-2025",
    invoice: "167",
    vendor: "OMM SAI ENTERPRISES",
    transferId: 280,
    mrp: 280,
    price: 199.98,
    branch: "AESHRAT NURSING HOME EYE DIVISION"
  },
  {
    code: "BIDIN-T",
    name: "BIDIN-T",
    sub: "Drops",
    exp: "04/2027",
    batch: "GT10555",
    stock: 4,
    date: "09-10-2025",
    invoice: "NAT-E014726",
    vendor: "NATARAJ AGENCIES",
    transferId: 252,
    mrp: 252,
    price: 180,
    branch: "AESHRAT NURSING HOME EYE DIVISION"
  },
  {
    code: "BRINZOX",
    name: "BRINZOX",
    sub: "Drops",
    exp: "08/2027",
    batch: "GT17275",
    stock: 12,
    date: "16-01-2026",
    invoice: "NAT-E022193",
    vendor: "NATARAJ AGENCIES",
    transferId: 589,
    mrp: 420.72,
    price: 420.72,
    branch: "AESHRAT NURSING HOME EYE DIVISION"
  }
];

function EmptyData({ title, subtitle, emoji = "📦" }) {
  return (
    <div className="ph-empty">
      <div className="ph-empty-icon" aria-hidden="true">{emoji}</div>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
}

export default function Pharmacy() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [purchaseSub, setPurchaseSub] = useState("GRN");
  const [transferSub, setTransferSub] = useState("Transfer");
  const [salesSub, setSalesSub] = useState("Sales");
  const [vendorSub, setVendorSub] = useState("Vendor List");
  const [stocksSub, setStocksSub] = useState("Store Stock");
  const [indentSub, setIndentSub] = useState("Stock Requests");
  const [adjustSub, setAdjustSub] = useState("Stock Adjustment");
  const [settingsSub, setSettingsSub] = useState("Other");
  const [uploadedRows, setUploadedRows] = useState([]);
  const [uploadMessage, setUploadMessage] = useState("No upload yet");
  const uploadInputRef = useRef(null);

  const stockRowsLong = useMemo(() => {
    const rows = [];
    for (let i = 0; i < 28; i += 1) {
      const base = stocksRows[i % stocksRows.length];
      rows.push({
        ...base,
        code: `${base.code}-${100 + i}`,
        stock: base.stock + i,
        transferId: base.transferId + i,
        price: Number((base.price + i * 2.35).toFixed(2))
      });
    }
    return rows;
  }, []);

  const handleTemplateDownload = () => {
    const csv = "product,batch,expiry,units,strips,price,hsn\nBRINZOX,BT100,07/2027,ml,2,420.72,30042039\n";
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "stock_adjustment_template.csv");
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
          <button
            key={tab}
            type="button"
            className={`ph-main-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Dashboard" && (
        <div className="ph-center-wrap">
          <div className="ph-card ph-dashboard-card">
            <div className="ph-grid-2">
              <label>
                From
                <div className="ph-input-icon">
                  <input type="date" defaultValue="2026-02-11" />
                  <FiCalendar />
                </div>
              </label>
              <label>
                To
                <div className="ph-input-icon">
                  <input type="date" defaultValue="2026-02-11" />
                  <FiCalendar />
                </div>
              </label>
            </div>
            <label>
              Branch
              <select>
                <option>AESHRAT NURSING HOME EYE DIVISION</option>
              </select>
            </label>
            <button className="ph-primary-btn" type="button">
              Search
            </button>
          </div>
        </div>
      )}

      {activeTab === "Item Master" && (
        <div className="ph-card ph-stretch">
          <div className="ph-section-head">
            <h3>New Product List</h3>
            <div className="ph-actions-row">
              <button type="button" className="ph-dark-btn">
                <FiUpload /> Upload Item Master
              </button>
              <button type="button" className="ph-outline-btn">
                <FiDownload /> Download Template
              </button>
              <button type="button" className="ph-dark-btn">
                <FiPlus /> Add New
              </button>
            </div>
          </div>

          <div className="ph-toolbar-grid">
            <label>
              Sub Category
              <select>
                <option>Select Sub Category</option>
              </select>
            </label>
            <label>
              Stock Type
              <select>
                <option>All</option>
              </select>
            </label>
            <label>
              Status Type
              <select>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </label>
            <label>
              Search Product
              <input placeholder="Search Product" />
            </label>
            <label>
              Search ProductCode
              <input placeholder="Search Product" />
            </label>
            <div className="ph-inline-actions">
              <button type="button" className="ph-search-btn"><FiSearch /> Search</button>
              <button type="button" className="ph-reset-btn"><FiRefreshCw /> Reset</button>
              <button type="button" className="ph-light-btn"><FiCopyProxy /> Copy</button>
              <button type="button" className="ph-export-btn"><FiUpload /> Export</button>
            </div>
          </div>

          <div className="ph-table-wrap wide">
            <table className="ph-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Sub Category</th>
                  <th>Rx Combo</th>
                  <th>Name Of Product</th>
                  <th>Drug Form</th>
                  <th>Product Code</th>
                  <th>GST %</th>
                  <th>Strength</th>
                  <th>Units</th>
                  <th>Scheduled</th>
                  <th>No Of Strips For Scheme</th>
                  <th>Free Strips For Scheme</th>
                  <th>HSN Code</th>
                  <th>Units/Strip</th>
                  <th>Price/Strips</th>
                  <th>Generic Name</th>
                  <th>Manufac</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {itemMasterRows.map((row, index) => (
                  <tr key={`${row.name}-${index}`}>
                    <td>{row.category}</td>
                    <td>{row.subCategory}</td>
                    <td />
                    <td>{row.name}</td>
                    <td />
                    <td />
                    <td>{row.gst}</td>
                    <td />
                    <td>{row.unit}</td>
                    <td />
                    <td />
                    <td />
                    <td>{row.hsn}</td>
                    <td>{row.strip}</td>
                    <td>{row.price}</td>
                    <td>{row.generic}</td>
                    <td>{row.manufacturer}</td>
                    <td><span className={`ph-toggle ${row.status ? "on" : ""}`} /></td>
                    <td className="ph-cell-icons"><FiEdit2 /> <FiTrash2 /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PaginationBar totalPages={5} />
        </div>
      )}

      {activeTab === "Purchase" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {[
              "Purchase Order",
              "Purchase Order Approvals",
              "Purchase Order History",
              "GRN",
              "GRN History",
              "GRN Cancel List",
              "Return List",
              "Credit Note",
              "Vendor Payments"
            ].map((tab) => (
              <button
                key={tab}
                type="button"
                className={purchaseSub === tab ? "active" : ""}
                onClick={() => setPurchaseSub(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {purchaseSub === "GRN" ? (
            <>
              <div className="ph-form-grid">
                <label>GR Number<input placeholder="" /></label>
                <label>Search PO Number<input placeholder="Search" /></label>
                <label>Invoice Value*<input placeholder="Invoice Value" /></label>
                <label>Vendor Name*<select><option>Select Vendor</option></select></label>
                <label>Invoice Number*<input placeholder="Invoice Number" /></label>
                <label>Invoice Date*<div className="ph-input-icon"><input type="date" defaultValue="2026-02-11" /><FiCalendar /></div></label>
              </div>

              <div className="ph-form-grid second">
                <label>Product/Product Code*<input placeholder="Product/ProductCode" /></label>
                <label>StockType<select><option>Purchased</option></select></label>
                <label>Batch*<input placeholder="Batch" /></label>
                <label>Expiry*<input placeholder="MM/YYYY" /></label>
                <label>Units/Strip*<input placeholder="Units/Strip" /></label>
                <label>No. Of Strips(Qty)*<input placeholder="Strips" /></label>
                <label>Free Strips(Qty)<input placeholder="Free Strips" /></label>
                <label>Tax Type*<select><option>GST</option></select></label>
                <label>GST Total%*<select><option>Select</option></select></label>
                <label>Price/Strip*<input placeholder="Price" /></label>
                <label>MRP/Strip*<input placeholder="MRP" /></label>
                <label>Sale Price<input placeholder="Sale Price" /></label>
                <label>HSN Code*<input placeholder="HSN Code" /></label>
                <label>Rack No<input placeholder="Rack No" /></label>
                <label>Box No<input placeholder="Box No" /></label>
                <label>Disc(In)<input placeholder="%" /></label>
                <label>Remarks<input placeholder="Enter Remarks" /></label>
                <div className="ph-inline-actions"><button className="ph-dark-btn" type="button"><FiPlus /> Add</button><button className="ph-reset-btn" type="button"><FiRefreshCw /> Reset</button></div>
              </div>

              <div className="ph-split">
                <textarea placeholder="Enter Comments" />
                <div className="ph-summary-box">
                  <div><span>Sub Total</span><strong>0.00</strong></div>
                  <div><span>Discount</span><strong>0.00</strong></div>
                  <div><span>Total</span><strong>0.00</strong></div>
                  <div><span>Charges</span><strong>Select</strong></div>
                  <div><span>Round Off</span><strong>0</strong></div>
                  <div><span>Net Value</span><strong className="red">0.00</strong></div>
                  <div><span>Payment</span><button type="button" className="ph-light-btn"><FiCheck /> Pay</button></div>
                  <div><span>TotalReceived</span><strong>0.00</strong></div>
                </div>
              </div>

              <div className="ph-footer-actions">
                <button type="button" className="ph-danger-btn">Cancel</button>
                <button type="button" className="ph-primary-btn">Add Stock</button>
              </div>
            </>
          ) : (
            <EmptyData title={`${purchaseSub} Panel`} subtitle="Dummy section available for navigation." />
          )}
        </div>
      )}

      {activeTab === "Transfer" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Transfer", "Transfer History", "Transfer List", "Accepted", "Rejected"].map((tab) => (
              <button
                key={tab}
                type="button"
                className={transferSub === tab ? "active" : ""}
                onClick={() => setTransferSub(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {transferSub === "Transfer" ? (
            <>
              <div className="ph-form-grid">
                <label>From Branch<select><option>AESHRAT NURSING HOME EYE DIVISION</option></select></label>
                <label>To Branch<select><option>Select</option></select></label>
              </div>
              <div className="ph-inline-radio">
                <span>Search By :</span>
                <label><input type="radio" defaultChecked /> PRODUCT</label>
                <label><input type="radio" /> PRODUCT CODE</label>
              </div>
              <div className="ph-form-grid second">
                <label>Product Name*<input placeholder="Min 3 letters" /></label>
                <label>Batch No<select><option>Select</option></select></label>
                <label>Strips(Qty)*<input placeholder="Strip" /></label>
                <label>Expiry Date<input placeholder="" /></label>
                <label>Hsn Code<input /></label>
                <label>Price/Strip<input defaultValue="0.00" /></label>
                <label>MRP/Strip<input defaultValue="0.00" /></label>
                <label>TaxType<select><option>Select</option></select></label>
                <label>Disc(%)<input defaultValue="0.00" /></label>
                <label>Total Tax Amount<input defaultValue="0.00" /></label>
                <label>Net Amount<input defaultValue="0.00" /></label>
                <div className="ph-inline-actions"><button className="ph-dark-btn" type="button"><FiPlus /> Add</button><button className="ph-reset-btn" type="button"><FiRefreshCw /> Reset</button></div>
              </div>
              <EmptyData title="No Products Detail Found" subtitle="No Products Detail available with selected dates !!" />
              <textarea placeholder="Enter Comments" />
              <div className="ph-footer-actions">
                <button type="button" className="ph-danger-btn">Cancel</button>
                <button type="button" className="ph-primary-btn">Transfer</button>
              </div>
            </>
          ) : (
            <EmptyData title={`${transferSub} List`} subtitle="Records will appear here." />
          )}
        </div>
      )}

      {activeTab === "Sales" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Advised Prescription", "Sales", "Sales History", "Sales Return List", "Sales Cancel List", "Settlement Screen"].map((tab) => (
              <button key={tab} type="button" className={salesSub === tab ? "active" : ""} onClick={() => setSalesSub(tab)}>{tab}</button>
            ))}
          </div>
          {salesSub === "Sales" ? (
            <>
              <div className="ph-sale-banner">
                <div className="ph-inline-radio ph-sales-search">
                  <label><input type="radio" /> Name</label>
                  <label><input type="radio" /> Mobile</label>
                  <label><input type="radio" defaultChecked /> MR.No</label>
                  <input placeholder="Search Mr.No" />
                  <button type="button" className="ph-outline-btn">Add New</button>
                </div>
                <button type="button" className="ph-outline-btn"><FiEye /> Surgery View</button>
              </div>
              <div className="ph-form-grid ph-sales-top-grid">
                <label>Invoice Date<input type="date" defaultValue="2026-02-11" /></label>
                <label>GST<input placeholder="GST No" /></label>
                <label>Doctor Name<select><option>Select Doctor</option></select></label>
                <label>Doctor Mobile No.<input placeholder="Enter Number" /></label>
                <div className="ph-inline-actions"><button className="ph-reset-btn" type="button"><FiRefreshCw /> Reset</button></div>
              </div>
              <div className="ph-inline-radio">
                <span>Search By</span>
                <label><input type="radio" defaultChecked /> PRODUCT</label>
                <label><input type="radio" /> PRODUCT CODE</label>
                <label><input type="checkbox" defaultChecked /> Generic Name</label>
              </div>
              <div className="ph-form-grid second ph-sales-line-grid">
                <label>Product<input placeholder="Enter Medicine" /></label>
                <label>Batch<select><option></option></select></label>
                <label>Qty<input placeholder="Qty" /></label>
                <label>Expiry<input /></label>
                <label>HSN Code<input /></label>
                <label>Price<input /></label>
                <label>Discount<input /></label>
                <label>GST%<select><option>Select</option></select></label>
                <label>Total<input defaultValue="0.00" /></label>
                <div className="ph-inline-actions"><button type="button" className="ph-primary-btn">Add</button></div>
              </div>

              <div className="ph-split ph-sales-split">
                <div className="ph-table-wrap">
                  <table className="ph-table small">
                    <thead>
                      <tr>
                        <th>Product</th><th>Product Code</th><th>Batch</th><th>Qty</th><th>Expiry</th><th>HSN code</th><th>Price</th><th>Discount(%)</th><th>GST</th><th>Total Amount</th><th>Wavie Off</th><th>Round Off</th><th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td colSpan={13}>No lines added yet.</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="ph-summary-box sales">
                  <div><span>Invoice Discount</span><strong>Add Discount</strong></div>
                  <div><span>Sub Total:</span><strong>0.00</strong></div>
                  <div><span>Discount value (INR):</span><strong>0.00</strong></div>
                  <div><span>Wavie Off Amount:</span><strong>0.00</strong></div>
                  <div><span>Gst Total:</span><strong>0.00</strong></div>
                  <div><span>Round Off</span><strong>0.00</strong></div>
                  <div><span>Payment</span><button type="button" className="ph-light-btn"><FiCheck /> Pay</button></div>
                  <div><span>Net value:</span><strong>0.00</strong></div>
                  <div><span>Balance:</span><strong>0.00</strong></div>
                  <div><span>TotalReceived:</span><strong>0.00</strong></div>
                </div>
              </div>
              <div className="ph-footer-actions">
                <button type="button" className="ph-danger-btn">Cancel</button>
                <button type="button" className="ph-primary-btn">Complete Sale</button>
              </div>
            </>
          ) : (
            <EmptyData title={`${salesSub}`} subtitle="Records will appear in this section." />
          )}
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
              <label>Vendor Name<input placeholder="Vendor Name" /></label>
              <label>Mobile<input placeholder="Mobile" /></label>
              <label>Email<input placeholder="Email" /></label>
              <label>Drug License No(1)<input /></label>
              <label>Drug License No(2)<input /></label>
              <label>GSTIN<input /></label>
              <label>PAN<input /></label>
              <label>Address<textarea placeholder="Address" /></label>
              <div className="ph-inline-actions"><button className="ph-dark-btn" type="button"><FiPlus /> Create Vendor</button></div>
            </div>
          )}

          {vendorSub === "Vendor Approvals" && (
            <div className="ph-table-wrap">
              <table className="ph-table small">
                <thead><tr><th>Name</th><th>Mobile</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  <tr><td>Sunrise Medicos</td><td>9881122334</td><td>Pending</td><td><button className="ph-primary-btn" type="button">Approve</button></td></tr>
                  <tr><td>Global Pharma House</td><td>8765432109</td><td>Pending</td><td><button className="ph-primary-btn" type="button">Approve</button></td></tr>
                </tbody>
              </table>
            </div>
          )}

          {vendorSub === "Rejected List" && (
            <div className="ph-table-wrap">
              <table className="ph-table small">
                <thead><tr><th>Name</th><th>Reason</th><th>Date</th></tr></thead>
                <tbody>
                  <tr><td>Fast Heal Distributors</td><td>Incomplete license docs</td><td>10-02-2026</td></tr>
                  <tr><td>MediCube Supplies</td><td>Invalid GSTIN</td><td>08-02-2026</td></tr>
                </tbody>
              </table>
            </div>
          )}

          {vendorSub === "Vendor List" && (
            <>
              <div className="ph-toolbar-grid">
                <label>Status<select><option>Active</option><option>Inactive</option></select></label>
                <label>Search Vendor<input placeholder="Vendor Name" /></label>
                <div className="ph-inline-actions"><button className="ph-search-btn" type="button"><FiSearch /> Search</button><button className="ph-reset-btn" type="button"><FiRefreshCw /> Reset</button><button className="ph-export-btn" type="button"><FiUpload /> Export</button></div>
              </div>
              <div className="ph-table-wrap wide">
                <table className="ph-table">
                  <thead>
                    <tr>
                      <th>Name</th><th>Vendor Code</th><th>Mobile</th><th>Email</th><th>Drug License No(1)</th><th>Drug License No(2)</th><th>TIN No</th><th>GSTIN No</th><th>PAN No</th><th>Status</th><th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendorRows.map((row) => (
                      <tr key={row.code}>
                        <td>{row.name}</td>
                        <td>{row.code}</td>
                        <td>{row.mobile}</td>
                        <td>{row.email}</td>
                        <td>{row.dl1}</td>
                        <td>{row.dl2}</td>
                        <td>{row.tin}</td>
                        <td>{row.gstin}</td>
                        <td>{row.pan}</td>
                        <td>{row.status}</td>
                        <td className="ph-cell-icons"><FiEdit2 /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <PaginationBar totalPages={2} />
            </>
          )}
        </div>
      )}

      {activeTab === "Stocks" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Department Stock", "Consume Department Stock", "Department Consumed History", "Store Stock"].map((tab) => (
              <button key={tab} type="button" className={stocksSub === tab ? "active" : ""} onClick={() => setStocksSub(tab)}>{tab}</button>
            ))}
          </div>

          <div className="ph-toolbar-grid">
            <label>Stock<select><option>Non Expired</option></select></label>
            <label>Organization*<select><option>All Hospitals</option></select></label>
            <label>Sub Category*<select><option>All Sub Categories</option></select></label>
            <div className="ph-inline-radio"><label><input type="radio" defaultChecked /> PRODUCT</label><label><input type="radio" /> PRODUCT CODE</label></div>
            <div className="ph-inline-actions"><button className="ph-search-btn" type="button"><FiSearch /> Search</button><button className="ph-reset-btn" type="button"><FiRefreshCw /> Reset</button><button className="ph-export-btn" type="button"><FiUpload /> Export</button></div>
          </div>

          <div className="ph-table-wrap tall wide">
            <table className="ph-table">
              <thead>
                <tr>
                  <th>S.No</th><th>Product Code</th><th>Product Name</th><th>Sub Category</th><th>Rx Combo</th><th>Exp Dt.</th><th>Batch</th><th>Stock</th><th>Purchase Dt.</th><th>Invoice No</th><th>Vendor Name</th><th>Transfer Id</th><th>MRP</th><th>Price</th><th>BranchName</th>
                </tr>
              </thead>
              <tbody>
                {stockRowsLong.map((row, idx) => (
                  <tr key={`${row.code}-${idx}`} className={idx === 6 ? "highlight" : ""}>
                    <td>{idx + 1}</td><td>{row.code}</td><td>{row.name}</td><td>{row.sub}</td><td></td><td>{row.exp}</td><td>{row.batch}</td><td>{row.stock}</td><td>{row.date}</td><td>{row.invoice}</td><td>{row.vendor}</td><td>{row.transferId}</td><td>{row.mrp}</td><td>{row.price}</td><td>{row.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PaginationBar totalPages={4} />
        </div>
      )}

      {activeTab === "Indent" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Stock Requests", "Stock Issued History", "Indent Request", "Indent Request History", "Pending Approvals", "Approvals History"].map((tab) => (
              <button key={tab} type="button" className={indentSub === tab ? "active" : ""} onClick={() => setIndentSub(tab)}>{tab}</button>
            ))}
          </div>
          <h3>Indent Request(s)</h3>
          <div className="ph-form-grid">
            <label>From<div className="ph-input-icon"><input type="date" defaultValue="2026-02-11" /><FiCalendar /></div></label>
            <label>To<div className="ph-input-icon"><input type="date" defaultValue="2026-02-11" /><FiCalendar /></div></label>
            <label>Branch<select><option>AESHRAT NURSING HOME EYE DIVISION</option></select></label>
            <label>DepartMent<select><option>All</option></select></label>
            <div className="ph-inline-actions"><button className="ph-search-btn" type="button"><FiSearch /> Search</button><button className="ph-reset-btn" type="button"><FiRefreshCw /> Reset</button></div>
          </div>
          <EmptyData title="No Indent(s) Found" subtitle="No Indent(s) available with selected dates !!" />
        </div>
      )}

      {activeTab === "Stock Adjustment" && (
        <div className="ph-card ph-stretch">
          <div className="ph-subtabs">
            {["Stock Adjustment", "Stock Adjustment List", "Settings", "Store Stock Adjustment"].map((tab) => (
              <button key={tab} type="button" className={adjustSub === tab ? "active" : ""} onClick={() => setAdjustSub(tab)}>{tab}</button>
            ))}
          </div>

          <div className="ph-form-grid">
            <label>Stock Adjustment No<input placeholder="Stock Adjustment No" /></label>
            <label>Stock Adjustment Date<div className="ph-input-icon"><input type="date" defaultValue="2026-02-11" /><FiCalendar /></div></label>
            <label>Stock Adjustment Type*<select><option>Select</option></select></label>
            <label>Branch<select><option>AESHRAT NURSING HOME EYE DIVISION</option></select></label>
            <div className="ph-inline-actions">
              <button type="button" className="ph-dark-btn" onClick={() => uploadInputRef.current?.click()}>
                <FiUpload /> Upload Stock Adjustment
              </button>
              <button type="button" className="ph-outline-btn" onClick={handleTemplateDownload}>
                <FiDownload /> Download Template
              </button>
              <input
                ref={uploadInputRef}
                type="file"
                accept=".csv"
                onChange={handleUploadFile}
                hidden
              />
            </div>
          </div>

          <div className="ph-inline-radio">
            <span>Search By</span>
            <label><input type="radio" defaultChecked /> PRODUCT</label>
            <label><input type="radio" /> PRODUCT CODE</label>
          </div>

          <div className="ph-form-grid second">
            <label>Product*<input placeholder="Enter Medicine" /></label>
            <label>Batch*<input placeholder="Batch" /></label>
            <label>ExpiryDate*<input placeholder="MM/YYYY" /></label>
            <label>Units/Strip*<input placeholder="Units/strip" /></label>
            <label>No.Of Strips(Qty)*<input placeholder="strips" /></label>
            <label>Price*<input placeholder="Price" /></label>
            <label>GST Total%<select><option>0</option><option>5</option><option>12</option></select></label>
            <label>MRP/Strip*<input placeholder="MRP" /></label>
            <label>HSN Code<input placeholder="HSN Code" /></label>
            <label>Comments<input placeholder="Enter Comments" /></label>
            <div className="ph-inline-actions"><button className="ph-dark-btn" type="button"><FiPlus /> Add</button></div>
          </div>

          <div className="ph-upload-note">{uploadMessage}</div>

          <div className="ph-table-wrap tall">
            <table className="ph-table small">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Batch</th>
                  <th>Expiry</th>
                  <th>Units</th>
                  <th>Strips</th>
                  <th>Price</th>
                  <th>HSN</th>
                </tr>
              </thead>
              <tbody>
                {uploadedRows.length === 0 ? (
                  <tr>
                    <td colSpan={8}>No uploaded rows yet. Upload a CSV to populate.</td>
                  </tr>
                ) : (
                  uploadedRows.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.product || "-"}</td>
                      <td>{row.batch || "-"}</td>
                      <td>{row.expiry || "-"}</td>
                      <td>{row.units || "-"}</td>
                      <td>{row.strips || "-"}</td>
                      <td>{row.price || "-"}</td>
                      <td>{row.hsn || "-"}</td>
                    </tr>
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
            {["Kits Create", "Kits list", "Other", "Print", "GRN Approval Users", "Branch Details", "Discount Approval", "PO Approval Users"].map((tab) => (
              <button key={tab} type="button" className={settingsSub === tab ? "active" : ""} onClick={() => setSettingsSub(tab)}>{tab}</button>
            ))}
          </div>

          <div className="ph-settings-grid">
            {[
              ["GST Print", "With GST", "Without GST"],
              ["CESS", "With CESS", "Without CESS"],
              ["Duplicate Print", "Yes", "No"],
              ["IGST", "With IGST", "Without IGST"],
              ["GRN Level Approval", "Without Level", "Level 1"],
              ["Discount Range Based OTP", "Yes", "No"],
              ["Amount Based PO Approval", "Yes", "No"],
              ["Level Based PO Approval", "Yes", "No"],
              ["GRN", "GRN With Out PO", "GRN WIth PO"],
              ["System Round Off", "Yes", "No"],
              ["Manual Entry For GRN Invoice Value", "Yes", "No"]
            ].map((item) => (
              <div key={item[0]} className="ph-setting-row">
                <strong>{item[0]}</strong>
                <label><input type="radio" name={item[0]} defaultChecked /> {item[1]}</label>
                <label><input type="radio" name={item[0]} /> {item[2]}</label>
              </div>
            ))}
          </div>

          <div className="ph-footer-actions">
            <button type="button" className="ph-dark-btn"><FiSave /> Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

function FiCopyProxy() {
  return <FiFileText />;
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
      <button type="button" className="ph-page-btn" onClick={goFirst} title="First">
        <FiChevronsLeft /> <span>🏁 First</span>
      </button>
      <button type="button" className="ph-page-btn" onClick={goPrev} title="Previous">
        <FiChevronLeft /> <span>◀ Prev</span>
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`ph-page-number ${activePage === page ? "active" : ""}`}
          onClick={() => setActivePage(page)}
          aria-label={`Page ${page}`}
        >
          {page}
        </button>
      ))}
      <button type="button" className="ph-page-btn" onClick={goNext} title="Next">
        <span>Next ▶</span> <FiChevronRight />
      </button>
      <button type="button" className="ph-page-btn" onClick={goLast} title="Last">
        <span>Last 🏁</span> <FiChevronsRight />
      </button>
    </div>
  );
}
