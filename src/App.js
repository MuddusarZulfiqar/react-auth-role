import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/Login";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboard from "./views/Dashboard";
import AdminDashboard from "./views/AdminDashboard";
import RequireAuth from "./components/RequireAuth";
import NonRequireAuth from "./components/NonRequireAuth";
function App() {
  return (
    <Routes>
      <Route element={<NonRequireAuth />}>
        <Route path="/" element={<Login />} />
      </Route>

      {/* Private Routes  */}
      <Route element={<RequireAuth allowedRoles={["user", "admin","driver"]} />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route element={<RequireAuth allowedRoles={["user", "admin"]} />}>
            <Route path="home" element={<Dashboard />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={"/dashboard/home"} replace />} />
      </Route>
      {/* End Private Routes */}
      
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
}

export default App;
