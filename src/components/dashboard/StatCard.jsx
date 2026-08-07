// src/components/dashboard/StatCard.jsx
export default function StatCard({ title, value, icon: Icon, iconBg, iconColor, className = "" }) {
  return (
    <div className={`bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between ${className}`}>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h2 className="text-3xl font-bold text-slate-800 mt-1">{value}</h2>
      </div>
      <div className={`p-3 rounded-lg ${iconBg} ${iconColor}`}>
        <Icon size={24} />
      </div>
    </div>
  );
}