import { NavLink } from "react-router-dom";

import {
  FaChartPie,
  FaUsers,
  FaUserCog,
  FaTools,
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaChartBar,
  FaBullhorn,
  FaCommentDots,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FaChartPie,
  },
  {
    name: "Clients",
    path: "/clients",
    icon: FaUsers,
  },
  {
    name: "Technicians",
    path: "/technicians",
    icon: FaUserCog,
  },
  {
    name: "Issues",
    path: "/issues",
    icon: FaTools,
  },
  {
    name: "GPS Monitoring",
    path: "/gps",
    icon: FaMapMarkedAlt,
  },
  {
    name: "Schedules",
    path: "/schedules",
    icon: FaCalendarAlt,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: FaChartBar,
  },
  {
    name: "Announcements",
    path: "/announcements",
    icon: FaBullhorn,
  },
  {
    name: "Feedback",
    path: "/feedback",
    icon: FaCommentDots,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: FaUserCircle,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FaCog,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-2xl font-bold">

          Smart ISP

        </h1>

        <p className="text-sm text-slate-400">

          Admin Portal

        </p>

      </div>

      <nav className="flex-1">

        {menus.map((menu) => {

          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-4 transition ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon />

              {menu.name}

            </NavLink>
          );
        })}

      </nav>

      <button className="flex items-center gap-3 p-6 hover:bg-red-600 transition">

        <FaSignOutAlt />

        Logout

      </button>

    </aside>
  );
}