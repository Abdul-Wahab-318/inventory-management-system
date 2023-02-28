import React , {useState} from 'react'
import {
    Box,
    Button,
    Flex,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr ,
    useColorModeValue
  } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Card from 'components/Card/Card';
import { pageVisits } from 'variables/general';
import {BsCheckLg , BsX} from 'react-icons/bs'

export default function AffiliateRequestTable() {
    const textColor = useColorModeValue("gray.700", "white");
    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textTableColor = useColorModeValue("gray.500", "white");

    const [ searchName , setSearchName ] = useState("")

    let searchFilterStyle = {
      "backgroundColor" : "#F7FAFC" ,
      "padding" : "8px 20px" ,
      "borderRadius" : "5px"
    }

  return (
    <section className='affiliate-request-table'>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }} h={"400px"} overflowY={"scroll"}>
          <Flex direction='column'>
            <Flex align='center' justify={'space-between'} gap='20px' p='22px'>
              <Box>
                <Text as={'span'} fontSize='lg' color={textColor} fontWeight='bold'>
                  Affiliate Account Requests
                </Text>
                <Text as={'span'}  fontSize={'lg'} className='text-danger fw-bold ms-2' >
                  {pageVisits.length}
                </Text>
              </Box>
              <Box>
                <input type="text" onChange={(e) => setSearchName(e.target.value)} 
                placeholder='Search A Name' className='search-filter-field' style={searchFilterStyle} />
              </Box>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color='gray.400' borderColor={borderColor}>
                      Affiliate name
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Phone
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Referral
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Actions
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {pageVisits.map((el, index, arr) => {
                    
                    if ( el.pageName.toLowerCase().includes(searchName.toLowerCase()) )
                    return (
                      <Tr key={index}>
                        <Td
                          color={textTableColor}
                          fontSize='sm'
                          fontWeight='bold'
                          borderColor={borderColor}
                          border={index === arr.length - 1 ? "none" : null}>
                          { <Link to={`/admin/affiliateOverview/id123`} >{el.pageName}</Link> }
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
                        <Td
                          color={textTableColor}
                          fontSize='sm'
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}>
                          { 
                            <>
                              <Button variant="primary"><BsCheckLg/></Button> 
                              <Button variant="danger" ms={4}><BsX fontSize={17}/></Button> 
                            </>
                          }
                          
                        </Td>
                        
                      </Tr>
                    )

                  })}
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
    </section>
  )
}
