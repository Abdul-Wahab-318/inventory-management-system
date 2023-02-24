import React from 'react'
import { Link } from 'react-router-dom';
// Chakra imports
import {
    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Spacer,
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
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import { HSeparator } from "components/Separator/Separator";
import {
    FaPaypal,
    FaPencilAlt,
    FaRegCalendarAlt,
    FaWallet,
  } from "react-icons/fa";
import {
CartIcon,
DocumentIcon,
GlobeIcon,
WalletIcon,
} from "components/Icons/Icons.js";
import {
billingData,
invoicesData,
newestTransactions,
olderTransactions,
pageVisits
} from "variables/general";

export default function Finance() {

    // Chakra color mode
    const iconBlue = useColorModeValue("blue.500", "blue.500");
    const textColor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue("#dee2e6", "transparent");
    const iconBoxInside = useColorModeValue("white", "white");
    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const textTableColor = useColorModeValue("gray.500", "white");
    const { colorMode } = useColorMode();

  return (
    <Box className='finance-page' >
        <Grid
            mt={"80px"}
            gap = "26px"
            templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
        }}>

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
                    Total Cards Sold
                    </StatLabel>
                    <Flex>
                    <StatNumber  fontSize='lg' color={textColor} fontWeight='bold'>
                        45 
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
                    Requests Pending
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
                    Monthly Revenue
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
                    Pending Amount
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
                    Monthly Revenue
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
                    Monthly New Affiliates
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
        

        </Grid>
        <Card mt="26px" >
            <Flex direction='column'>
                <Flex align='center' justify='space-between' p='22px'>
                <Text fontSize='lg' color={textColor} fontWeight='bold'>
                    Affiliate Payments Remaining
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
                            {<Button variant='primary'  fontSize={12}><Link to={`/admin/affiliateOverview/id123`}>Profile</Link></Button>}
                            </Td>
                        </Tr>
                        );
                    })}
                    </Tbody>
                </Table>
                </Box>
            </Flex>
        </Card>
    </Box>
  )
}
