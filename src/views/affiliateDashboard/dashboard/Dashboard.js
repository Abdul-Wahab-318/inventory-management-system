import React from 'react'
import {Link} from 'react-router-dom'
// Chakra imports
import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Progress,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorMode,
    useColorModeValue,
  } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import LineGraph  from 'components/Graphs/LineGraph';
import BarGraph from 'components/Graphs/BarGraph';

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import InfoCard from "components/Card/InfoCard";
// Variables
import {
  barChartData,
  barChartOptions,
  lineChartData,
  lineChartOptions,
} from "variables/charts";
import { pageVisits, socialTraffic } from "variables/general";

export default function Dashboard() {

    // Chakra Color Mode
    const iconBlue = useColorModeValue("blue.500", "blue.500");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textTableColor = useColorModeValue("gray.500", "white");
    const { colorMode } = useColorMode();

  return (
    <Box pt={{ base: "120px", md: "75px" }} >

      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' mb='20px'>

        <InfoCard heading="Cards sold this month" body="45" footerNumber="+15%" footerText = "Since last month" Icon={WalletIcon} />
        <InfoCard heading="Total Sale" body="25000" footerNumber="+15%" footerText="Since last month" Icon={GlobeIcon} />
        <InfoCard heading="Monthly Commission" body={25000*0.20} footerNumber="+9%" footerText="Since last month" Icon={DocumentIcon} />
        <InfoCard heading="Balance Remaining" body="2500" Icon={CartIcon} />

      </SimpleGrid>

      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        className="admin-grid"
        gap='20px'>

        <LineGraph lineChartData={lineChartData} heading="Commission Overview" />
        
        <BarGraph barChartData = {barChartData} barChartOptions={barChartOptions} heading="Monthly Orders" />

        <Box>cock</Box>
      </Grid>


    </Box>
  )
}
