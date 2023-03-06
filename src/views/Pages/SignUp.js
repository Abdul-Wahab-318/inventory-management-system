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
  Checkbox ,
  Textarea,
} from "@chakra-ui/react";
import { Link , history } from 'react-router-dom'
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignUp() {

  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const textColor = useColorModeValue("gray.700", "white");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  let affiliateDeals = []

  const formik = useFormik({
    initialValues: {
      name : '',
      email : '',
      phoneNumber : '', 
      address : '' , 
      refferalID : '' , 
      affiliateDeals : ['']
    },
    validationSchema: Yup.object({

      name: Yup.string()
        .min(2, 'Must be atleast 2 characters long')
        .required('Name is Required'),

      email: Yup.string().email("Email format is incorrect")
        .required('Email is Required'),

      phoneNumber: Yup.string().matches(phoneRegExp , 'Phone number is not valid')
      .required('Required'),

      address : Yup.string().min("Address must contain atleast 2 characters").max("Address can have at max 100 characters") , 

      refferalID : Yup.string() ,

      affiliateDeals : Yup.string().required()

    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  let handleCheckBox = ( value ) => {
    if ( affiliateDeals.includes(value) )
        affiliateDeals = affiliateDeals.filter( el => el !== value )
    else
      affiliateDeals.push(value)
      console.log(affiliateDeals)
  }
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
          w={'90%'}
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
            fontSize='28px'
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
                    Confirm Password
                  </FormLabel>
                  <Input
                    variant='auth'
                    fontSize='sm'
                    ms='4px'
                    type='password'
                    placeholder='Re Enter password'
                    mb='24px'
                    size='lg'
                  />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Phone Number
                </FormLabel>
                <Input
                  variant='auth'
                  fontSize='sm'
                  ms='4px'
                  type='text'
                  placeholder='Your Phone Number'
                  mb='24px'
                  size='lg'
                />

              </div>
              <div className="col-md-6">
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                    Referral ID ( optional )
                  </FormLabel>
                  <Input
                    variant='auth'
                    fontSize='sm'
                    ms='4px'
                    type='text'
                    placeholder='Enter Referral ID'
                    mb='24px'
                    size='lg'
                  />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Address
                </FormLabel>
                <Textarea
                  className="css-17ud39b"
                  pt="15px"
                  variant='auth'
                  rows="2"
                  fontSize='sm'
                  ms='4px'
                  type='text'
                  placeholder='Your Address'
                  mb='24px'
                  size='lg'
                />

              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <FormLabel ms='4px' fontSize='md' fontWeight='normal' mb="10px">
                  Choose An Affiliate Deal
                </FormLabel>

                {/* <div className="col-12 d-flex align-items-center">
                  <input type="checkbox" id="option1" value={"standard"} />
                  <label htmlFor="option1" className="ms-2">Standard: 20% Commission on every sale perform individually (Example: if a person sells 5 cards in a week worth of 12,500 his commission will be 2500).</label>

                </div>

                <div className="col-12 d-flex align-items-center my-2">
                <input type="checkbox" id="option2" value={"multi-affiliate"} />
                  <label htmlFor="option2" className="ms-2">Multi-Affiliate: Additional 10% commission on every sale performed by Affiliate you onboarded. (Example: if 2 people joined affiliate team with your referral whatever they sell you will 10% commission over there sell).</label>

                </div>

                <div className="col-12 d-flex align-items-center">
                  <input type="checkbox" id="option3" value={"influence"} />
                  <label htmlFor="option3" className="ms-2">Influence: Additional 10% commission on every lead generated by the influencer(youtuber, tiktoker, Instagramer) you collaborated with. (Example: you approached Ducky bhai to do a shoutout for TapitCard with your personal referral and 100 people bought the product. you will get 10% commission on those 100 sales).
                  </label>
                </div> */}
                
                <Checkbox value={'standard'} size="lg"
                onChange={(e) => handleCheckBox(e.target.value)} 
                >
                  <Text fontSize={'17px'}>Standard: 20% Commission on every sale perform individually (Example: if a person sells 5 cards in a week worth of 12,500 his commission will be 2500).</Text>
                </Checkbox>

                <Checkbox value={'multi-affiliate'} size="lg" my="10px"
                onChange={(e) => handleCheckBox(e.target.value)} 
                >
                  <Text fontSize={'17px'}>Multi-Affiliate: Additional 10% commission on every sale performed by Affiliate you onboarded. (Example: if 2 people joined affiliate team with your referral whatever they sell you will 10% commission over there sell).</Text>
                </Checkbox>

                <Checkbox value={'influence'} size="lg"
                onChange={(e) => handleCheckBox(e.target.value)} 
                >
                  <Text fontSize={'17px'}>Influence: Additional 10% commission on every lead generated by the influencer(youtuber, tiktoker, Instagramer) you collaborated with. (Example: you approached Ducky bhai to do a shoutout for TapitCard with your personal referral and 100 people bought the product. you will get 10% commission on those 100 sales).</Text>
                </Checkbox>
                

              </div>
            </div>



            <FormControl display='flex' alignItems='center' mb='24px' mt="24px">
              <Switch id='remember-login' colorScheme='blue' me='10px' />
              <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                Remember me
              </FormLabel>
            </FormControl>
            <Button
              fontSize='16px'
              variant='dark'
              fontWeight='bold'
              w='300px'
              className="mx-auto"
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
