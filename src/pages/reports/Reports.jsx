import { FileBarChart2 } from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Reports & Analytics
        </h1>

        <p className="text-gray-500 mt-2">
          View system reports and technician performance.
        </p>
      </div>

      {/* Report Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex flex-col items-center justify-center h-80">
          <FileBarChart2
            size={70}
            className="text-blue-600"
          />

          <h2 className="text-xl font-semibold mt-4">
            Reports Module
          </h2>

          <p className="text-gray-500 mt-2">
            Reports and analytics will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}