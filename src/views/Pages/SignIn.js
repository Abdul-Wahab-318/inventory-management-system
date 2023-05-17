import React , {useState} from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Icon,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link  , useHistory  } from "react-router-dom";
// Assets
import signInImage from "assets/img/signInImage.png";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "api";
import { useAlert } from "react-alert";


function SignIn() {

  const history = useHistory()
  const alert = useAlert()
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");

  let [ email , setEmail ] = useState("")
  let [ password , setPassword ] = useState("")
  let [ errors , setErrors ] = useState({ email : "" , password : "" })

  let validate = () => {


    let emailError = ""
    let passwordError = ""

    if (  !email.includes("@") || !email.includes(".com") || email.length < 4)
      emailError = "Incorrect Email Format"

    if ( password.length < 8 )
      passwordError = "Password must be atleast 8 characters long"

      setErrors({ email : emailError , password : passwordError })
    
      // if no error then return true
      if ( !emailError && !passwordError )
        return true
      else
        return false

  }

  let fetchUser = async () => {

    try{
      let { data } = await axios.post(API_URL + "/login" , { email , password } , {withCredentials:true})
      return data.data
    }
    catch(error)
    {
      console.log(error)
      if ( error.response.status === 404 )
        alert.error("User not found")
      else
      alert.error("Could not login")
    }

  }


  let handleLogin = async () => {

    if( !validate() )
    {
      console.log("login failed")
      return 
    }
    
    let user = await fetchUser()
    localStorage.setItem("user",JSON.stringify(user))
    if ( user.roleId === 0 )
      history.push("/admin/dashboard")
    else
      history.push("/affiliate/placeOrder")


  }

  console.log(email + "   " + password )
  return (
    <Flex position='relative' mb='40px'>
      <Flex
        minH={{ md: "1000px" }}
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ md: "0px" }}>
        <Flex
          w='100%'
          h='100%'
          alignItems='center'
          justifyContent='center'
          mb='60px'
          mt={{ base: "50px", md: "20px" }}>
          <Flex
            zIndex='2'
            direction='column'
            w='445px'
            background='transparent'
            borderRadius='15px'
            p='40px'
            mx={{ base: "100px" }}
            m={{ base: "20px", md: "auto" }}
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
              Admin Login
            </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Email
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                placeholder='Your Email'
                mb='0px'
                size='lg'
                onChange={(e)=>setEmail(e.target.value)}
              />
              { errors.email ? <Text className="form-error-message" mb={'10px'} >{errors.email}</Text> : <></>}
              <FormLabel ms='4px' mt={'24px'} fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='password'
                placeholder='Your password'
                mb='0px'
                size='lg'
                onChange={(e)=>setPassword(e.target.value)}
              />
              { errors.password ? <Text className="form-error-message" mb={'10px'} >{errors.password}</Text> : <></>}
              <FormControl display='flex' alignItems='center' mb='24px' mt={'24px'}>
                <Switch id='remember-login' colorScheme='blue' me='10px' />
                <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                fontSize='18px'
                variant='dark'
                fontWeight='bold'
                w='100%'
                h='45'
                onClick={()=>handleLogin()}
                mb='24px'>
                LOGIN
              </Button>
            </FormControl>
            <Flex
              flexDirection='row'
              gap="10px"
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Dont have an account?
              </Text>
                <Link to="/auth/affiliate-signup">
                  <b>Sign Up</b>
                </Link>
            </Flex>
          </Flex>
        </Flex>
        <Box
          overflowX='hidden'
          h='100%'
          w='100%'
          left='0px'
          position='absolute'
          bgImage={signInImage}>
          <Box
            w='100%'
            h='100%'
            bgSize='cover'
            bg='blue.500'
            opacity='0.8'></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
