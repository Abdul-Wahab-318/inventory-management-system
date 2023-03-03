import React , {useState} from 'react'
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
import { pageVisits, socialTraffic } from "variables/general";

export default function History() {

    let [ query , setQuery ] = useState("")
    let [ category , setCategory ] = useState("")

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
      <Card>
          <Flex align={'center'} justify='space-between'>
            <Text as='h1' fontSize="32px">Order History</Text>
            <Box>
                <input type="text"  className='search-filter-field' placeholder='Search By Name' onChange={(e)=>setQuery(e.target.value)} />
            </Box>
          </Flex>

          <Box overflow={{ sm: "scroll", lg: "hidden" }} mt="16px" >
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color='gray.400' borderColor={borderColor}>
                      Order ID
                    </Th> 
                    <Th color='gray.400' borderColor={borderColor}>
                      Customer Name
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Order Status
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Payment Status
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    pageVisits.map((el, index, arr) => {
                    
                      if ( el.pageName.toLowerCase().includes(query.toLowerCase()) )
                      return <OrderRow el = {el} index={index} arr={arr} /> 
                      else return <></>
                    }

                  )}
                </Tbody>
              </Table>
            </Box>

      </Card>
    </Box>
  )
}


const OrderRow = ( { el , index , arr } ) => {
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
    </Tr>
  )
}