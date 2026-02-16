const StatsCard = ({ title, value }) => {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

const styles = {
  card: {
    padding: "20px",
    background: "#222",
    color: "#0f0",
    borderRadius: "8px",
  },
};

export default StatsCard;