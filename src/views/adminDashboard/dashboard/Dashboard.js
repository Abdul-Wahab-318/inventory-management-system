// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
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
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import "./Dashboard.css"
import { Link } from "react-router-dom";
// Variables
import {
  barChartData,
  barChartOptions,
  lineChartData,
  lineChartOptions,
} from "variables/charts";
import { pageVisits, socialTraffic } from "variables/general";
import AffiliateRequestTable from "components/Tables/AffiliateRequestTable";
import InfoCard from "components/Card/InfoCard";

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
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>

      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' mb='20px'>

        <InfoCard heading="Total Affiliates" body="45 Affiliates" Icon={WalletIcon} />
        <InfoCard heading="Requests Pending" body="12" footerNumber="+15%" footerText="Since last month" Icon={GlobeIcon} />
        <InfoCard heading="Orders This Month" body="+125" footerNumber="+2.82%" footerText="Since last month" Icon={DocumentIcon} />
        <InfoCard heading="Pending Orders" body="65" Icon={CartIcon} />

      </SimpleGrid>

      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        className="admin-grid"
        gap='20px'>

        <LineGraph lineChartData heading="Sales Overview" />
        
        <TopAffiliateGraph barChartData = {barChartData} />

        <AffiliateRequestTable textColor tableRowColor borderColor textTableColor />
        
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Top Affiliates
              </Text>
            </Flex>
          </Flex>
          <Box overflow={{ sm: "scroll", lg: "hidden" }}>
            <Table>
              <Thead>
                <Tr bg={tableRowColor}>
                  <Th color='gray.400' borderColor={borderColor}>
                    Affiliate Name
                  </Th>
                  <Th color='gray.400' borderColor={borderColor}>
                    Sales
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {socialTraffic.map((el, index, arr) => {
                  return (
                    <Tr key={index}>
                      <Td
                        color={textTableColor}
                        fontSize='sm'
                        fontWeight='bold'
                        borderColor={borderColor}
                        border={index === arr.length - 1 ? "none" : null}>
                        {el.referral}
                      </Td>
                      <Td
                        color={textTableColor}
                        fontSize='sm'
                        borderColor={borderColor}
                        border={index === arr.length - 1 ? "none" : null}>
                        {el.visitors}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        </Card>


        <Card p='0px' maxW={{ sm: "320px", md: "100%" }} >
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                All Affiliate Accounts
              </Text>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color='gray.400' borderColor={borderColor}>
                      Affiliate name
                    </Th> 
                    <Th color='gray.400' borderColor={borderColor}>
                      Email
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Phone
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Comission
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {pageVisits.map((el, index, arr) => <AffiliateRow el = {el} index={index} arr={arr} /> )}
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>

      </Grid>
    </Flex>
  );
}

const LineGraph = ({lineChartData}) => {

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
        Orders Overview
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

const TopAffiliateGraph = ({barChartData}) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
  <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
  <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
    <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
      PERFORMANCE
    </Text>
    <Text color={textColor} fontSize='lg' fontWeight='bold'>
      Monthly Affiliates
    </Text>
  </Flex>
  <Box minH='300px'>
    <BarChart chartData={barChartData} chartOptions={barChartOptions} />
  </Box>
  </Card> )
}

const AffiliateRow = ( { el , index , arr } ) => {
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  return (
    <Tr key={index}>
      <Td
        color={textTableColor}
        fontSize='sm'
        fontWeight='bold'
        border={index === arr.length - 1 ? "none" : null}
        borderColor={borderColor}
         >
        { <Link to="">{el.pageName}</Link> }
      </Td>
      <Td
        color={textTableColor}
        fontSize='sm'
        border={index === arr.length - 1 ? "none" : null}
        borderColor={borderColor}>
        {el.visitors}
      </Td>
      <Td
        color={textTableColor}
        fontSize='sm'
        border={index === arr.length - 1 ? "none" : null}
        borderColor={borderColor}>
        {el.uniqueUsers}
      </Td>
      <Td
        color={textTableColor}
        fontSize='sm'
        border={index === arr.length - 1 ? "none" : null}
        borderColor={borderColor}>
        {el.commission}
      </Td>
      <Td
        color={textTableColor}
        fontSize='sm'
        border={index === arr.length - 1 ? "none" : null}
        borderColor={borderColor}>
        {<Button variant='primary'  fontSize={12}><Link to={`/admin/affiliateOverview/id123`}>Profile</Link></Button>}
      </Td>
    </Tr>
  )
}


