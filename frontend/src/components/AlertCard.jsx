import { Box, Text, Badge } from "@chakra-ui/react";

const severityColor = {
  Low: "green",
  Medium: "orange",
  High: "red",
  Critical: "red",
};

const AlertCard = ({ threat, severity, source }) => {
  return (
    <Box
      bg="gray.800"
      p={5}
      borderRadius="lg"
      border="1px solid"
      borderColor="red.500"
    >
      <Text fontWeight="bold">{threat}</Text>

      <Badge colorScheme={severityColor[severity]} mt={2}>
        {severity}
      </Badge>

      <Text fontSize="sm" color="gray.400" mt={2}>
        Source: {source}
      </Text>
    </Box>
  );
};

export default AlertCard;
