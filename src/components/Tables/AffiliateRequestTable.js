import React from 'react'
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

export default function AffiliateRequestTable() {
    const textColor = useColorModeValue("gray.700", "white");
    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textTableColor = useColorModeValue("gray.500", "white");

  return (
    <section className='affiliate-request-table'>
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
                    <Th color='gray.400' borderColor={borderColor}>
                      Actions
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
                        <Td
                          color={textTableColor}
                          fontSize='sm'
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}>
                          { 
                            <>
                              <Button variant="primary">Approve</Button> 
                              <Button variant="danger" ms={4}>Decline</Button> 
                            </>
                          }
                          
                        </Td>
                        
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
    </section>
  )
}
