import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "20px" }}>
          <StatsCard title="Active Threats" value="12" />
          <StatsCard title="Systems Online" value="98%" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;