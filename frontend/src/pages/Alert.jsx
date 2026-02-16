import AlertCard from "../components/AlertCard";

const Alerts = () => {
  return (
    <div>
      <h2>Detected Threats</h2>
      <AlertCard level="HIGH" message="DDoS Attack Detected" />
      <AlertCard level="MEDIUM" message="Suspicious Login Attempt" />
      <AlertCard level="LOW" message="Port Scan Detected" />
    </div>
  );
};

export default Alerts;