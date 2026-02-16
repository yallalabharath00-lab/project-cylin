import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/alerts">Alerts</Link>
      <Link to="/logs">Logs</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    background: "#1a1a1a",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "15px",
  },
};

export default Sidebar;