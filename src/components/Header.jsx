import React from "react";
import { AiOutlineSearch, AiOutlineBell, AiOutlineQuestionCircle } from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-label">
          <span className="label-dot" />
          <span>Name/Mobile No/Old-New MR No</span>
        </div>
        <div className="header-search">
          <input placeholder="Search By Name/Mobile No/Old" />
          <button aria-label="Search">
            <AiOutlineSearch />
          </button>
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn" aria-label="Help">
          <AiOutlineQuestionCircle />
        </button>
        <div className="divider" />
        <button className="icon-btn" aria-label="Notifications">
          <AiOutlineBell />
        </button>

        <div className="profile">
          <div className="profile-text">
            <div className="profile-name">Dr. Sayed Aejaz Hussein (Admin Doctor)</div>
            <div className="profile-org">(ANH) AESHRAT NURSING H...</div>
          </div>
          <div className="avatar">
            <FaUserMd />
          </div>
        </div>
      </div>
    </header>
  );
}
