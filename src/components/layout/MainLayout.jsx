import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar - Persistent across all pages */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Dynamic Main Section */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        <Navbar />

        {/* Content Area - Swaps dynamically when clicking sidebar links */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}