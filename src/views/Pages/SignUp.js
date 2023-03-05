// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Switch,
  Text,
  useColorModeValue,
  LightMode,
  Select,
} from "@chakra-ui/react";
import { Link , history } from 'react-router-dom'
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

function SignUp() {
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const textColor = useColorModeValue("gray.700", "white");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");
  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        maxH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        maxW={{ md: "calc(100vw - 50px)" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={BgSignUp}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
        borderRadius={{ base: "0px", md: "20px" }}>
        <Box w='100vw' h='100vh' bg='blue.500' opacity='0.8'></Box>
      </Box>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='30px'>
        <Flex
          direction='column'
          w={'auto'}
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
          bg={bgForm}
          boxShadow={useColorModeValue(
            "0px 5px 14px rgba(0, 0, 0, 0.05)",
            "unset"
          )}>
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            Register As An Affiliate
          </Text>
          <FormControl>
            <div className="row">
              <div className="col-md-6">
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Name
                </FormLabel>
                <Input
                  variant='auth'
                  fontSize='sm'
                  ms='4px'
                  type='text'
                  placeholder='Your full name'
                  mb='24px'
                  size='lg'
                />

              </div>
              <div className="col-md-6">
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Email
                </FormLabel>
                <Input
                  variant='auth'
                  fontSize='sm'
                  ms='4px'
                  type='email'
                  placeholder='Your email address'
                  mb='24px'
                  size='lg'
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Password
                </FormLabel>
                <Input
                  variant='auth'
                  fontSize='sm'
                  ms='4px'
                  type='password'
                  placeholder='Your password'
                  mb='24px'
                  size='lg'
                />

              </div>
              <div className="col-md-6">
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                    Password
                  </FormLabel>
                  <Input
                    variant='auth'
                    fontSize='sm'
                    ms='4px'
                    type='password'
                    placeholder='Your password'
                    mb='24px'
                    size='lg'
                  />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Password
                </FormLabel>
                <Input
                  variant='auth'
                  fontSize='sm'
                  ms='4px'
                  type='password'
                  placeholder='Your password'
                  mb='24px'
                  size='lg'
                />

              </div>
              <div className="col-md-6">
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                    Password
                  </FormLabel>
                  <Input
                    variant='auth'
                    fontSize='sm'
                    ms='4px'
                    type='password'
                    placeholder='Your password'
                    mb='24px'
                    size='lg'
                  />
              </div>
            </div>

            <FormControl display='flex' alignItems='center' mb='24px'>
              <Switch id='remember-login' colorScheme='blue' me='10px' />
              <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                Remember me
              </FormLabel>
            </FormControl>
            <Button
              fontSize='16px'
              variant='dark'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'>
              SIGN UP
            </Button>
          </FormControl>
          <Flex
            flexDirection='row'
            gap={'10px'}
            justifyContent='center'
            alignItems='center'
            maxW='100%'
            mt='0px'>
            <Text color={textColor} fontWeight='medium'>
              Already have an account?
            </Text>
            <b> <Link to="/auth/affiliate-signin">Sign In</Link> </b>
            
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
