import React from "react";
import "./Header.css";

export default function Header({ onToggle }) {
  return (
    <header className="header">
      <div className="left-section">
        {/* <button className="toggle-btn" onClick={onToggle}>
          ☰
        </button> */}

        <div className="search-bar">
          <input placeholder="Search by Name / Mobile No / Old MR No" />
          <button>🔍</button>
        </div>
      </div>

      <div className="profile">
        <span>Dr. Sayed Aejaz Hussein (Admin Doctor)</span>
        <div className="avatar">👤</div>
      </div>
    </header>
  );
}
