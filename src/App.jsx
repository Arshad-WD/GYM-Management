import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RoleSelection from "./components/RoleSelection";
import AdminLogin from "./modules/Admin/pages/Login";
import MemberLogin from "./modules/Member/pages/Login";
import UserLogin from "./modules/User/pages/Login";
import Registration from "./modules/User/pages/Register";
import UserDashboard from "./modules/User/pages/Dashboard";
import MemberDashboard from "./modules/Member/pages/Dashboard";
import AdminDashboard from "./modules/Admin/pages/Dashboard";
import MemberManagement from "./modules/Admin/pages/MemberManagement";

function App() {
  return (
    <Router>
      <Routes>
        {/* Role Selection Page */}
        <Route path="/" element={<RoleSelection />} />

        {/* Login Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/member/login" element={<MemberLogin />} />
        <Route path="/user/login" element={<UserLogin />} />

        {/* Registration */}
        <Route path="/register" element={<Registration />} />

        {/* Dashboard Routes */}
        <Route path="/user/dashboard/*" element={<UserDashboard />} />
        <Route path="/member/dashboard/*" element={<MemberDashboard />} />
        <Route path="/admin/dashboard/*" element={<AdminDashboard />} />

        {/* Admin Sub-Routes */}
        <Route path="/admin/members" element={<MemberManagement />} />

        {/* Catch-All for Unknown Routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
