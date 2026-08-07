
import { MessageSquare } from "lucide-react";

export default function FeedbackManagement() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Feedback Management</h1>
        <p className="text-gray-500 mt-2">
          View client ratings, review technician feedback, and resolve customer complaints.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center h-64">
        <MessageSquare size={48} className="text-blue-600 mb-2" />
        <p className="text-gray-500">Feedback management module is ready for implementation.</p>
      </div>
    </div>
  );
}