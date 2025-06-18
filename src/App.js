import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPaasword from "./Components/ResetPassword/ResetPaasword";
import UserHome from "./Components/User/UserHome/UserHome";
import AdminHome from "./Components/Admin/AdminHome/AdminHome";
import ProtectedRoute from "./Components/ProtectedRoute"; 
import AdminDashboard from "./Components/Admin/AdminDashboard/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPaasword />} />
        <Route path="/user-dashboard" element={ <ProtectedRoute role="User"><UserHome /> </ProtectedRoute> }/>
        <Route path="/admin-home" element={<ProtectedRoute role="Admin"><AdminHome /></ProtectedRoute>}/>
        <Route path="/admin-dashboard" element={<ProtectedRoute role="Admin"><AdminDashboard /></ProtectedRoute>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
