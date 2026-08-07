// src/pages/dashboard/Dashboard.jsx
import { useQuery } from "@tanstack/react-query";
import { Users, UserCog, Wrench, CheckCircle } from "lucide-react";
import StatCard from "../../components/dashboard/StatCard";
import Spinner from "../../components/common/Spinner";
import { reportService } from "../../services/report.service";

export default function Dashboard() {
  const { data: stats, isLoading, isError } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const response = await reportService.getDashboardStats();
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>

      {/* Top 3 Stat Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Clients"
          value={stats?.clients_count ?? 0}
          icon={Users}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <StatCard
          title="Technicians"
          value={stats?.technicians_count ?? 0}
          icon={UserCog}
          iconBg="bg-indigo-50"
          iconColor="text-indigo-600"
        />

        <StatCard
          title="Pending Repairs"
          value={stats?.pending_repairs_count ?? 0}
          icon={Wrench}
          iconBg="bg-amber-50"
          iconColor="text-amber-600"
        />
      </div>

      {/* Bottom Completed Repairs Card */}
      <StatCard
        title="Completed Repairs"
        value={stats?.completed_repairs_count ?? 0}
        icon={CheckCircle}
        iconBg="bg-emerald-50"
        iconColor="text-emerald-600"
        className="max-w-md"
      />
    </div>
  );
}