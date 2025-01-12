import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Route path="/" element={<RoleSelection />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/member/login" element={<MemberLogin />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/register" element={<Registration />} />
        <Route path='/user/dashboard' element={<UserDashboard />} />
        <Route path='/Member/dashboard' element={<MemberDashboard />} />
        <Route path='/Admin/dashboard' element={<AdminDashboard />} />
        <Route path="/admin/members" element={<MemberManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
