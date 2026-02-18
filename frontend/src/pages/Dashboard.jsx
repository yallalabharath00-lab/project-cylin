import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import StatsCard from "../components/StatsCard";
import AlertCard from "../components/AlertCard";

const Dashboard = () => {
  return (
    <Box p={6} bg="gray.900" minH="100vh" color="white">
      
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Threat Detection Overview
      </Text>

      {/* Stats Section */}
      <Grid
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap={6}
        mb={8}
      >
        <StatsCard title="Active Threats" value="12" type="danger" />
        <StatsCard title="System Health" value="Good" type="success" />
        <StatsCard title="Blocked Attacks" value="342" type="warning" />
        <StatsCard title="Monitoring Status" value="Live" type="primary" />
      </Grid>

      {/* Alerts Section */}
      <Text fontSize="xl" fontWeight="semibold" mb={4}>
        Live Threat Alerts
      </Text>

      <Grid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={6}
      >
        <AlertCard
          threat="Malware Detected"
          severity="High"
          source="192.168.0.21"
        />
        <AlertCard
          threat="Suspicious Network Activity"
          severity="Medium"
          source="Firewall"
        />
        <AlertCard
          threat="Unauthorized Access Attempt"
          severity="Critical"
          source="Admin Panel"
        />
      </Grid>
    </Box>
  );
};

export default Dashboard;
