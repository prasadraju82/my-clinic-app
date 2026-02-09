import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} />

      <div className="content">
        <Header onToggle={() => setCollapsed(!collapsed)} />

        <main className="page">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
