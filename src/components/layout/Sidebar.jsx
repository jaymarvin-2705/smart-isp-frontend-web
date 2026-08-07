import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserCog,
  Wrench,
  MapPinned,
  CalendarDays,
  FileBarChart2,
  MessageSquare,
  User,
} from "lucide-react";

const menus = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Clients", path: "/clients", icon: Users },
  { name: "Techs", path: "/technicians", icon: UserCog },
  { name: "Issues", path: "/issues", icon: Wrench },
  { name: "GPS", path: "/gps", icon: MapPinned },
  { name: "Schedule", path: "/schedules", icon: CalendarDays },
  { name: "Reports", path: "/reports", icon: FileBarChart2 },
  { name: "Feedback", path: "/feedback", icon: MessageSquare },
  { name: "Profile", path: "/settings", icon: User },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 min-h-[calc(100vh-4rem-3.5rem)]">
      <div className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800">
        Navigation
      </div>
      <nav className="p-3 space-y-1">
        {menus.map((menu) => {
          const Icon = menu.icon;
          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                  isActive
                    ? "bg-blue-600 text-white font-medium shadow"
                    : "hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              <span>{menu.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}