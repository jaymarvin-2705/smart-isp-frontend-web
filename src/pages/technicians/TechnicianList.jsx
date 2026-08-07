import React from "react";
import { Wrench } from "lucide-react";

export default function TechnicianList() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Technician Management</h1>
        <p className="text-gray-500 mt-2">
          Manage technician profiles, assign service areas, and monitor work availability.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center h-64">
        <Wrench size={48} className="text-blue-600 mb-2" />
        <p className="text-gray-500">Technician management module is ready for implementation.</p>
      </div>
    </div>
  );
}