import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AdminLayout from "@/layouts/AdminLayout";

import Dashboard from "@/pages/dashboard/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<AdminLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

        </Route>

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}