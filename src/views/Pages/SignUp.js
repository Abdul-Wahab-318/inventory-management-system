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
import { useHistory } from "react-router-dom";

function SignUp() {

  const history = useHistory() 
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const textColor = useColorModeValue("gray.700", "white");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ // Minimum eight characters, at least one letter and one number:
  let affiliateDeals = []

  const formik = useFormik({
    initialValues: {
      name : '',
      email : '',
      password : '' , 
      confirmPassword : '' , 
      phoneNumber : '', 
      address : '' , 
      refferalID : '' , 
      bankAccountNo : '' ,
      affiliateDeals : []
    },
    validationSchema: Yup.object({

      name: Yup.string()
        .min(2, 'Must be atleast 2 characters long')
        .required('Name is Required'),

      email: Yup.string().email("Email format is incorrect")
        .required('Email is Required'),

      phoneNumber: Yup.string().matches(phoneRegExp , 'Phone number is not valid')
      .required('Phone number is Required'),

      password : Yup.string()
      .max(30,"Password must not exceed 30 characters")
      .matches( passwordRegExp , "Password must contain 8 characters , a number and a letter ")
      .required("Password is required") ,

      confirmPassword : Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match') , 

      address : Yup.string().max(100,"Address can have at max 180 characters") , 

      refferalID : Yup.string() ,

      affiliateDeals : Yup.array().of( Yup.string() ).min(1, "Select an Affiliate Deal").required("You can't leave this blank.") , 

      bankAccountNo : Yup.string().min(11,"Minimum length of account No. is 11 characters ")
      .max(32 , "Account Number must not exceed 32 characters")
      .required("Bank account number is required")

    }),
    onSubmit: values => {
      console.log("submitting" , values)
      history.push("/affiliate/dashboard")
    },
  });


  let handleCheckBox = ( value ) => {
    if ( affiliateDeals.includes(value) )
        affiliateDeals = affiliateDeals.filter( el => el !== value )
    else
      affiliateDeals.push(value)
      console.log(affiliateDeals)

      formik.values.affiliateDeals = affiliateDeals
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
          maxW={"1200px"}
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
            Affiliate Registration
          </Text>
          <form onSubmit={formik.handleSubmit}>
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
                  mb='14px'
                  size='lg'
                  {...formik.getFieldProps('name')}
                />
                   {
                    formik.touched.name && formik.errors.name ? 
                    (<div className="form-error-message">{formik.errors.name}</div>) : null
                   }
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
                  mb='14px'
                  size='lg'
                  {...formik.getFieldProps('email')}
                />
                    {
                      formik.touched.email && formik.errors.email ? 
                      (<div className="form-error-message">{formik.errors.email}</div>) : null
                    }
              </div>
            </div>

            <div className="row mt-2">
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
                  mb='14px'
                  size='lg'
                  {...formik.getFieldProps('password')}
                  />

                  {
                    formik.touched.password && formik.errors.password ? 
                    (<div className="form-error-message">{formik.errors.password}</div>) : null
                  }

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
                    mb='14px'
                    size='lg'
                    {...formik.getFieldProps('confirmPassword')}
                    />
  
                    {
                      formik.touched.confirmPassword && formik.errors.confirmPassword ? 
                      (<div className="form-error-message">{formik.errors.confirmPassword}</div>) : null
                    }
              </div>
            </div>

            <div className="row mt-2">
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
                  mb='14px'
                  size='lg'
                  {...formik.getFieldProps('phoneNumber')}
                  />
  
                  {
                    formik.touched.phoneNumber && formik.errors.phoneNumber ? 
                    (<div className="form-error-message">{formik.errors.phoneNumber}</div>) : null
                  }

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
                    mb='14px'
                    size='lg'
                  />
              </div>
            </div>

            <div className="row mt-2 ">
              <div className="col-md-6">
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Address
                </FormLabel>
                <Input
                  variant='auth'
                  fontSize='sm'
                  ms='4px'
                  type='text'
                  placeholder='Your Address'
                  mb='14px'
                  size='lg'
                  {...formik.getFieldProps('address')}
                  />
  
                  {
                    formik.touched.address && formik.errors.address ? 
                    (<div className="form-error-message">{formik.errors.address}</div>) : null
                  }

              </div>

              <div className="col-md-6">
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Bank Account Number
                </FormLabel>
                <Input
                  variant='auth'
                  fontSize='sm'
                  ms='4px'
                  type='text'
                  placeholder='Your Bank Account Number'
                  mb='14px'
                  size='lg'
                  {...formik.getFieldProps('bankAccountNo')}
                  />
  
                  {
                    formik.touched.bankAccountNo && formik.errors.bankAccountNo ? 
                    (<div className="form-error-message">{formik.errors.bankAccountNo}</div>) : null
                  }

              </div>

            </div>

            <div className="row mt-2">
              <div className="col-md-12">
                <FormLabel ms='4px' fontSize='md' fontWeight='normal' mb="10px">
                  Choose An Affiliate Deal
                </FormLabel>
                
                <Checkbox value={'standard'} size="md"
                onChange={(e) => handleCheckBox(e.target.value)} 
                >
                  <Text fontSize={'16px'}>Standard: 20% Commission on every sale perform individually (Example: if a person sells 5 cards in a week worth of 12,500 his commission will be 2500).</Text>
                </Checkbox>

                <Checkbox value={'multi-affiliate'} size="md" my="10px"
                onChange={(e) => handleCheckBox(e.target.value)} 
                >
                  <Text fontSize={'16px'}>Multi-Affiliate: Additional 10% commission on every sale performed by Affiliate you onboarded. (Example: if 2 people joined affiliate team with your referral whatever they sell you will 10% commission over there sell).</Text>
                </Checkbox>

                <Checkbox value={'influence'} size="md"
                onChange={(e) => handleCheckBox(e.target.value)} 
                >
                  <Text fontSize={'16px'}>Influence: Additional 10% commission on every lead generated by the influencer(youtuber, tiktoker, Instagramer) you collaborated with. (Example: you approached Ducky bhai to do a shoutout for TapitCard with your personal referral and 100 people bought the product. you will get 10% commission on those 100 sales).</Text>
                </Checkbox>
                
                {
                    formik.touched.affiliateDeals && formik.errors.affiliateDeals ? 
                    (<div className="form-error-message">{formik.errors.affiliateDeals}</div>) : null
                  }

              </div>
            </div>

            <Button
              display={'block'}
              fontSize='16px'
              variant='dark'
              fontWeight='bold'
              w='300px'
              className="mx-auto"
              h='45'
              type='submit'
              mb='14px'>
              SIGN UP
            </Button>
          </form>
          <Flex
            flexDirection='row'
            gap={'10px'}
            justifyContent='center'
            alignItems='center'
            maxW='100%'
            mt='5px'>
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
