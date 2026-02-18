import { Box, Text } from "@chakra-ui/react";

const colorMap = {
  danger: "red.400",
  success: "green.400",
  warning: "orange.400",
  primary: "cyan.400",
};

const StatsCard = ({ title, value, type }) => {
  return (
    <Box
      bg="gray.800"
      p={5}
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.700"
    >
      <Text fontSize="sm" color="gray.400">
        {title}
      </Text>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color={colorMap[type]}
      >
        {value}
      </Text>
    </Box>
  );
};

export default StatsCard;
