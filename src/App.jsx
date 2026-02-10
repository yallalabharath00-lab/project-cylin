import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Alert from "./pages/Alert";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
      <Route path="/alerts" element={<ProtectedRoutes><Alert /></ProtectedRoutes>} />
      <Route path="/logs" element={<ProtectedRoutes><Logs /></ProtectedRoutes>} />
      <Route path="/reports" element={<ProtectedRoutes><Reports /></ProtectedRoutes>} />
      <Route path="/Settings" element={<ProtectedRoutes><Settings /></ProtectedRoutes>} />
    </Routes>
  </BrowserRouter>
);

export default App;