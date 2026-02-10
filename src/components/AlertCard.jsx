const AlertCard = ({ level, message }) => {
  const color =
    level === "HIGH" ? "red" : level === "MEDIUM" ? "orange" : "green";

  return (
    <div style={{ borderLeft: `5px solid ${color}`, padding: "10px" }}>
      <h4>{level} Threat</h4>
      <p>{message}</p>
    </div>
  );
};

export default AlertCard;