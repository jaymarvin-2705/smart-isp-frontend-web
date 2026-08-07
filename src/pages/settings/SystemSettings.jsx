import React from "react";
import { Settings } from "lucide-react";

export default function SystemSettings() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Account & System Settings</h1>
        <p className="text-gray-500 mt-2">
          Manage administrator profile details, update password, and adjust portal settings.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center h-64">
        <Settings size={48} className="text-slate-600 mb-2" />
        <p className="text-gray-500">Account settings module is ready for implementation.</p>
      </div>
    </div>
  );
}