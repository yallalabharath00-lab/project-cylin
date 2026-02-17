import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alert";
import Logs from "./pages/Logs";
import Reports from "./pages/Reports";
import Settings from "./pages/settings";

import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/alerts"
        element={
          <ProtectedRoutes>
            <Alerts />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/logs"
        element={
          <ProtectedRoutes>
            <Logs />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoutes>
            <Reports />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoutes>
            <Settings />
          </ProtectedRoutes>
        }
      />
    </Routes>

  );
}

export default App;
