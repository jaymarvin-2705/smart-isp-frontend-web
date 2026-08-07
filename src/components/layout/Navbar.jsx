import React from "react";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">
          Smart Internet Service Provider
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            A
          </div>
          <span className="font-semibold text-slate-700 text-sm">Admin</span>
        </div>
      </div>
    </header>
  );
}