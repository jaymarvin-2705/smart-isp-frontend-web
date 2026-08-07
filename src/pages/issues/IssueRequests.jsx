
import { AlertCircle } from "lucide-react";

export default function IssueRequests() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Issue Management</h1>
        <p className="text-gray-500 mt-2">
          View, verify, prioritize, and update the status of repair requests.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center h-64">
        <AlertCircle size={48} className="text-amber-500 mb-2" />
        <p className="text-gray-500">Issue management module is ready for implementation.</p>
      </div>
    </div>
  );
}