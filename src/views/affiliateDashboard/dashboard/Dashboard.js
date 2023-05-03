import React , { useState , useEffect } from 'react'
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
import axios from 'axios';
import { API_URL } from 'api';
import { useAlert } from 'react-alert'

export default function Dashboard() {

    // Chakra Color Mode
    const iconBlue = useColorModeValue("blue.500", "blue.500");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textTableColor = useColorModeValue("gray.500", "white");
    const { colorMode } = useColorMode();

    let [ monthlyOrders , setMonthlyOrders ] = useState(0)
    let [ totalSale , setTotalSale ] = useState(0)
    let [ ordersDelivered , setOrdersDelivered ] = useState(0)
    let [ totalProducts , setTotalProducts ] = useState(0)
    
    let [lineGraph , setLineGraph] = useState(lineChartData)
    let [barGraph , setBarGraph] = useState(barChartData)

    let fetchDashboardStats = async () =>
    {
      let { data } = await axios.get(`${API_URL}/dashboardStats`)
      let dashBoardStats = data.data
      let { monthlyOrders , totalSale , ordersDelivered , totalProducts } = dashBoardStats
      setMonthlyOrders( monthlyOrders )
      setTotalSale( totalSale )
      setOrdersDelivered( ordersDelivered )
      setTotalProducts( totalProducts )

    }

    let fetchGraphStats = async () => {
      let { data } = await axios.get(`${API_URL}/graphStats`)
      let graphStats = data.data
      console.log(graphStats)

      let lineData = [ {
        name : "Sales Overview" ,
        data : graphStats.monthWiseSales
      } ]

      let barData = [ {
        name : "Monthly Orders" ,
        data : graphStats.monthWiseOrders
      } ]
      setBarGraph( barData )
      setLineGraph( lineData )
      
    }

    useEffect( () => {

      try{

        fetchDashboardStats()
        fetchGraphStats()
        
      }
      catch( error )
      {
        console.log(error)
      } 

    } , [] )


  return (
    <Box pt={{ base: "120px", md: "75px" }} >
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' mb='20px'>
        <InfoCard heading="Order This Month" body={monthlyOrders}  Icon={WalletIcon} />
        <InfoCard heading="Total Sale" body={ ` $ ${parseInt(totalSale)}`}  Icon={GlobeIcon} />
        <InfoCard heading= "Total Orders delivered" body={ordersDelivered}  Icon={DocumentIcon} />
        <InfoCard heading="Total Products" body={totalProducts} Icon={CartIcon} />

      </SimpleGrid>

      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        className="admin-grid"
        gap='20px'>

        <LineGraph lineChartData={lineGraph} heading="Sales Overview" />
        
        <BarGraph barChartData = {barGraph} barChartOptions={barChartOptions} heading="Monthly Orders" />


        

        <Box></Box>
      </Grid>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Pending Orders
              </Text>
            </Flex>
          </Flex>
          <Box overflow={{ sm: "scroll", lg: "hidden" }}>
                <OrderList/>
          </Box>
        </Card>


    </Box>
  )
}


const OrderList = () => {

  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const { colorMode } = useColorMode();
  let [ orders , setOrders ] = useState(pageVisits)

  let fetchOrders = async () => {
    try{

      let { data } = await axios.get(`${API_URL}/getPendingOrders`)
      let {data : pendingOrders} = data 
      console.log(pendingOrders)
      setOrders(pendingOrders)

    }
    catch(err)
    {
      console.log(err)
    }
  }

  useEffect(()=>{

    fetchOrders()

  },[])

  return (
    <>
    <Table>
      <Thead>
        <Tr bg={tableRowColor}>
        <Th color='gray.400' borderColor={borderColor}>
          Customer Name
        </Th> 
        <Th color='gray.400' borderColor={borderColor}>
          Phone
        </Th>
        <Th color='gray.400' borderColor={borderColor}>
          Order Status
        </Th>
        <Th color='gray.400' borderColor={borderColor}>
          Grand Total
        </Th>
        <Th color='gray.400' borderColor={borderColor}></Th>
      </Tr>
      </Thead>
      <Tbody>
          {
            orders.map((el, index, arr) => <OrderItem el = {el} index={index} arr={arr} key={index} fetchOrders={fetchOrders} /> )
          }
      </Tbody>
    </Table>
    </>
  )
}

const OrderItem = ( { el , index , arr , fetchOrders } ) => {
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const alert = useAlert()

  let handleOrderCompletion = async () => {

    try{
      await axios.put(`${API_URL}/completeOrder/${el.id}`)
      await fetchOrders()
      alert.success("Order completed")
    }
    catch(err)
    {
      console.log(err)
      alert.error("Request Failed")
    }

  }

  let handleOrderCancellation = async () => {
    try{
      await axios.put(`${API_URL}/cancelOrder/${el.id}`)
      await fetchOrders()
      alert.info("Order cancelled")
    }
    catch(err)
    {
      console.log(err)
      alert.error("Request Failed")
    }
  }


  return (
    <Tr key={index}>
      <Td
        color={textTableColor}
        fontSize='sm'
        fontWeight='bold'
        border={index === arr.length - 1 ? "none" : null}
        borderColor={borderColor}
         >
        { el.firstName }
      </Td>
      <Td
        color={textTableColor}
        fontSize='sm'
        border={index === arr.length - 1 ? "none" : null}
        borderColor={borderColor}>
        {el.mobile}
      </Td>
      <Td
        color={textTableColor}
        fontSize='sm'
        border={index === arr.length - 1 ? "none" : null}
        borderColor={borderColor}>
        {el.status}
      </Td>
      <Td
        color={textTableColor}
        fontSize='sm'
        border={index === arr.length - 1 ? "none" : null}
        borderColor={borderColor}>
        {el.grandTotal}
      </Td>
      <Td
        color={textTableColor}
        fontSize='sm'
        border={index === arr.length - 1 ? "none" : null}
        borderColor={borderColor}>
        {<Button variant='primary'  fontSize={12} onClick={()=> { handleOrderCompletion() } }>Complete</Button>}
        {<Button variant='danger' marginLeft={"10px"}  fontSize={12} onClick={()=> { handleOrderCancellation() } } >Cancel</Button>}
      </Td>
    </Tr>
    
  )
}









