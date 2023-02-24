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
import IconBox from "components/Icons/IconBox";
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

      {/* DASH BOARD TOP CARDS */}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' mb='20px'>

        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Total Affiliates
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    45 Affiliates
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </Flex>
        </Card>

        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Account Requestions Pending
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    12
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.400' fontSize='sm'>
              <Text as='span' color='green.400' fontWeight='bold'>
                +15% {" "}
              </Text>
              Since last month
            </Text>
          </Flex>
        </Card>

        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Orders This Month
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    +125
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.400' fontSize='sm'>
              <Text as='span' color='green.400' fontWeight='bold'>
                +2.82%{" "}
              </Text>
              Since last month
            </Text>
          </Flex>
        </Card>

        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Pending Orders
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={'red.400'} fontWeight='bold'>
                    65
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </Flex>
        </Card>

      </SimpleGrid>

      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        className="admin-grid"
        gap='20px'>
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
        </Card>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }} h={"400px"} overflowY={"scroll"}>
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Affiliate Account Requests
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
                      Referral
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {pageVisits.map((el, index, arr) => {
                    return (
                      <Tr key={index}>
                        <Td
                          color={textTableColor}
                          fontSize='sm'
                          fontWeight='bold'
                          borderColor={borderColor}
                          border={index === arr.length - 1 ? "none" : null}>
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
                          {el.bounceRate}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
        
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
                  {pageVisits.map((el, index, arr) => {
                    return (
                      <Tr key={index}>
                        <Td
                          color={textTableColor}
                          fontSize='sm'
                          fontWeight='bold'
                          borderColor={borderColor}
                          border={index === arr.length - 1 ? "none" : null}>
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
                          {<Button variant='primary' fontSize={12}>Profile</Button>}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>

      </Grid>
    </Flex>
  );
}
