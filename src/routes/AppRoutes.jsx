import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout
import AdminLayout from "@/layouts/AdminLayout"; // Adjust path to match your folder structure

// Pages
import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import ClientList from "@/pages/clients/ClientList";
import TechnicianList from "@/pages/technicians/TechnicianList";
import IssueRequests from "@/pages/issues/IssueRequests";
import LiveTracking from "@/pages/gps/LiveTracking";
import ScheduleList from "@/pages/schedules/ScheduleList";
import Reports from "@/pages/reports/Reports";
import AnnouncementList from "@/pages/announcements/AnnouncementList";
import FeedbackManagement from "@/pages/feedback/FeedbackManagement";
import SystemSettings from "@/pages/settings/SystemSettings";

// Route Guards
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Protected Dashboard Shell with Persistent Sidebar/Navbar */}
        <Route
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          {/* Default redirect to /dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Child Pages rendered inside <Outlet /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/technicians" element={<TechnicianList />} />
          <Route path="/issues" element={<IssueRequests />} />
          <Route path="/gps" element={<LiveTracking />} />
          <Route path="/schedules" element={<ScheduleList />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/announcements" element={<AnnouncementList />} />
          <Route path="/feedback" element={<FeedbackManagement />} />
          <Route path="/settings" element={<SystemSettings />} />
        </Route>

        {/* Fallback redirect for unknown routes */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}