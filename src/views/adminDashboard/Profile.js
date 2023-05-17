// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { API_URL } from "api";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import ImageArchitect1 from "assets/img/ImageArchitect1.png";
import ImageArchitect2 from "assets/img/ImageArchitect2.png";
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
import axios from "axios";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useEffect, useState } from "react";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

function Profile() {
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("blue.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");

  const [ user , setUser ] = useState({})
  const [ orders , setOrders ] = useState([])

  const fetchOrders = async ( id ) => {
  
    try{
      let { data } = await axios.get( API_URL + "/user/getOrders/" + id )
      console.log(data)
      setOrders( [...data.data] )
  }
    catch( error )
  {
    console.log(error)
  }


  }

  useEffect(()=>{

    let savedUser = JSON.parse( localStorage.getItem("user") )
    setUser( savedUser || {} )
    
    fetchOrders( savedUser.id )

  },[])

  console.log(user)
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px", lg: "100px" }}>
      <Flex
        direction={{ sm: "column", md: "row" }}
        mb='24px'
        maxH='330px'
        justifyContent={{ sm: "center", md: "space-between" }}
        align='center'
        backdropFilter='blur(21px)'
        boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.02)'
        border='1.5px solid'
        borderColor={borderProfileColor}
        bg={bgProfile}
        p='24px'
        borderRadius='20px'>
        <Flex
          align='center'
          mb={{ sm: "10px", md: "0px" }}
          direction={{ sm: "column", md: "row" }}
          w={{ sm: "100%" }}
          textAlign={{ sm: "center", md: "start" }}>
          <Avatar
            me={{ md: "22px" }}
            src={avatar5}
            w='80px'
            h='80px'
            borderRadius='15px'
          />
          <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
            <Text
              fontSize={{ sm: "lg", lg: "xl" }}
              color={textColor}
              fontWeight='bold'
              ms={{ sm: "8px", md: "0px" }}>
              {user.username}
            </Text>
            <Text
              fontSize={{ sm: "sm", md: "md" }}
              color={emailColor}
              fontWeight='semibold'>
              {user.email}
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction={{ sm: "column", lg: "row" }}
          w={{ sm: "100%", md: "50%", lg: "auto" }}>
          <Button p='0px' bg='transparent' variant='no-effects'>
            <Flex
              align='center'
              w={{ sm: "100%", lg: "135px" }}
              bg={colorMode === "dark" ? "navy.900" : "#fff"}
              borderRadius='8px'
              justifyContent='center'
              py='10px'
              boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.06)'
              cursor='pointer'>
              <Icon color={textColor} as={FaCube} me='6px' />
              <Text fontSize='xs' color={textColor} fontWeight='bold'>
                OVERVIEW
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>

      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <Card p='16px' my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Profile Information
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column'>
              <Flex align='center' mb='18px'>
                <Text
                  fontSize='md'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'>
                  Full Name:{ " " }
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400'>
                  {user.firstName + " " + user.lastName}
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Text
                  fontSize='md'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'>
                  Mobile:{" "}
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400'>
                  {user.mobile}
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Text
                  fontSize='md'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'>
                  Email:{" "}
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400'>
                  {user.email}
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Text
                  fontSize='md'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'>
                  Social Media:{" "}
                </Text>
                <Flex>
                  <Link
                    href='#'
                    color={iconColor}
                    fontSize='lg'
                    me='10px'
                    _hover={{ color: "blue.500" }}>
                    <Icon as={FaFacebook} />
                  </Link>
                  <Link
                    href='#'
                    color={iconColor}
                    fontSize='lg'
                    me='10px'
                    _hover={{ color: "blue.500" }}>
                    <Icon as={FaInstagram} />
                  </Link>
                  <Link
                    href='#'
                    color={iconColor}
                    fontSize='lg'
                    me='10px'
                    _hover={{ color: "blue.500" }}>
                    <Icon as={FaTwitter} />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
      <Card p='16px' my='24px'>
        <CardHeader p='12px 5px' mb='12px'>
          <Flex direction='column'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Orders
            </Text>
          </Flex>
        </CardHeader>
        { orders.length === 0 ? <p className="text-center">No orders placed</p> : <></>}
        <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        {
          orders.map( (order) => <OrderCard order={order} key={order.id} />)
        }
        </Grid>
      </Card>
    </Flex>
  );
}

const OrderCard = ( {order} ) => {

  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("blue.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");
    console.log("inside coimponent" , order)
  return (

    <Flex direction='column'>
    <Box mb='20px' position='relative' borderRadius='15px'>
      <Image src={ImageArchitect3} borderRadius='15px' />
      <Box
        w='100%'
        h='100%'
        position='absolute'
        top='0'
        borderRadius='15px'
        bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
    </Box>
    <Flex direction='column'>
      <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
        OrderID #{order.id}
      </Text>
      <Text
        fontSize='xl'
        color={textColor}
        fontWeight='bold'
        mb='10px'>
        Grand Total : { order.grandTotal } PKR
      </Text>
      <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
        { order.content }
      </Text>
      <Flex justifyContent='space-between'>
        <Button variant='dark' minW='110px' h='36px'>
          VIEW ALL
        </Button>
        <AvatarGroup size='xs'>
          <Avatar name='Ryan Florence' src={avatar6} />
          <Avatar name='Segun Adebayo' src={avatar2} />
          <Avatar name='Kent Dodds' src={avatar3} />
          <Avatar name='Prosper Otemuyiwa' src={avatar4} />
        </AvatarGroup>
      </Flex>
    </Flex>
  </Flex>

  )

}

export default Profile;
