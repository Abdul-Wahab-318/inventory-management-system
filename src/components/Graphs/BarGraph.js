
import {
    Box,
    Flex,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
import BarChart from "components/Charts/BarChart";
import Card from "components/Card/Card";
import {useState , useEffect} from 'react'
import axios from "axios";
import { API_URL } from "api";


export default function BarGraph  ({barChartData , barChartOptions , heading=""})  {


    const textColor = useColorModeValue("gray.700", "white");

    return (
    <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
    <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
      <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
        PERFORMANCE
      </Text>
      <Text color={textColor} fontSize='lg' fontWeight='bold'>
        {heading}
      </Text>
    </Flex>
    <Box minH='300px'>
      <BarChart chartData={barChartData} chartOptions={barChartOptions} />
    </Box>
    </Card> )
}