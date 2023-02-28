
import {
    Box,
    Flex,
    Text,
    useColorMode
  } from "@chakra-ui/react";
  // Variables
import {
    lineChartData,
    lineChartOptions,
  } from "variables/charts";
import Card from "components/Card/Card.js";
import LineChart from "components/Charts/LineChart";

export default function LineGraph  ({lineChartData , heading = "Overview" }) {

    const { colorMode } = useColorMode();
  
    return (
    <Card
    bg={
      colorMode === "dark"
        ? "navy.800"
        : "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
    }
    p='0px'
    maxW={{ sm: "320px", md: "100%" }}>
      <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
        <Text color='#fff' fontSize='lg' fontWeight='bold' mb='6px'>
          {heading}
        </Text>
      </Flex>
      <Box minH='300px'>
        <LineChart
          chartData={lineChartData}
          chartOptions={lineChartOptions}
        />
      </Box>
    </Card> 
    )
  }