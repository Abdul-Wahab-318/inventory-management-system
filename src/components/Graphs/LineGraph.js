
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
import {useState,useEffect} from 'react'
import axios from "axios";
import { API_URL } from "api";
export default function LineGraph  ({lineChartData , heading = "Overview" }) {

    const { colorMode } = useColorMode();
   
    let [ data , setData ] = useState(lineChartData)

    let fetchGraphData = async () => {

      try{
        let { data } = await axios.get(API_URL + "/dashboardStats") 

        let monthWiseSales = data.data.monthWiseSales

        let newData = [ {
          name : "Sales" ,
          data : monthWiseSales
        } ]

        setData( newData )

      }
      catch(err) {
        console.log(err)
      }
      
    }

    useEffect(() =>{

      fetchGraphData()
      
    },[])


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
          chartData={data}
          chartOptions={lineChartOptions}
        />
      </Box>
    </Card> 
    )
  }