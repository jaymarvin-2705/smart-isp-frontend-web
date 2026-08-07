import React from "react";
import { Calendar, Clock, User, Wrench } from "lucide-react";

export default function ScheduleList() {
  const schedules = [
    {
      id: "SCH-001",
      client: "Alice Johnson",
      technician: "John Doe",
      issue: "Fiber Cable Connection Repair",
      date: "2026-08-08",
      time: "09:00 AM",
      status: "Scheduled",
    },
    {
      id: "SCH-002",
      client: "Bob Smith",
      technician: "Michael Cruz",
      issue: "Router Configuration & Upgrade",
      date: "2026-08-08",
      time: "01:30 PM",
      status: "In Progress",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Schedule Management</h1>
        <p className="text-gray-500 mt-2">
          Schedule repair visits, manage appointments, and view the repair calendar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-600">
          <p className="text-gray-500 text-sm">Today's Appointments</p>
          <h2 className="text-3xl font-bold mt-2">12</h2>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-amber-500">
          <p className="text-gray-500 text-sm">Pending Confirmation</p>
          <h2 className="text-3xl font-bold mt-2">4</h2>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-emerald-500">
          <p className="text-gray-500 text-sm">Completed Today</p>
          <h2 className="text-3xl font-bold mt-2">8</h2>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Schedules</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-3 text-gray-600 font-semibold">Schedule ID</th>
                <th className="p-3 text-gray-600 font-semibold">Client</th>
                <th className="p-3 text-gray-600 font-semibold">Technician</th>
                <th className="p-3 text-gray-600 font-semibold">Issue</th>
                <th className="p-3 text-gray-600 font-semibold">Date & Time</th>
                <th className="p-3 text-gray-600 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{item.id}</td>
                  <td className="p-3">{item.client}</td>
                  <td className="p-3">{item.technician}</td>
                  <td className="p-3">{item.issue}</td>
                  <td className="p-3">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar size={14} /> {item.date} <Clock size={14} className="ml-2" /> {item.time}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Scheduled"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}