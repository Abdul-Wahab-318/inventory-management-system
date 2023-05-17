import React , {useState , useEffect} from 'react'
import "./Order.css"
// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
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
import axios from 'axios';
import { API_URL } from 'api';
import Form from 'react-bootstrap/Form';
import { useAlert } from 'react-alert';
export default function Order() {

  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const { colorMode } = useColorMode();

  const alert = useAlert()
  let [user , setUser] = useState({});
  let usernameRef = React.useRef(null)
  let [ orderItems , setOrderItems ] = useState([])
  let [ products , setProducts ] = useState([])
  let [ quantity , setQuantity ] = useState(1)
  let [ currentItem , setCurrentItem ] = useState({})
  let [ totalAmount , setTotalAmount ] = useState(0)

  let fetchProducts = async () => {
    try{
      let { data } = await axios.get(`${API_URL}/getItems`)
      let { data : items } = data 
      setProducts(items)
    }
    catch( err )
    {
      console.log(err)
    }

  }

  let handleAddItem = () => {
    console.log("adding : " , currentItem)
    let stock = currentItem.available 

    if ( Object.keys(currentItem).length === 0)
    return 
    
    if ( stock < quantity )
    {
      alert.error("Quantity exceeds stock")
      return
    }
    let newOrderItems = [ ...orderItems , { title : currentItem.title, itemId : currentItem.itemId , productId : currentItem.productId , price : currentItem.price , quantity}  ]
    setOrderItems( newOrderItems )
    setCurrentItem({})
    setQuantity(1)
    setTotalAmount( newOrderItems.reduce(( prev , currVal) => prev + currVal.price * currVal.quantity , 0) )

  }

  let handleItemChange = (e) => {
    let item = JSON.parse(e.target.value)
    setCurrentItem(item)
  }

  let handleSubmit = async () => {
    let payload 

    //if admin is placing order then get the user name from text field
    if ( user.roleId === 0 )
    payload = { orderItems , totalAmount , username : usernameRef.current.value }
    else //otherwise no need to enter username , the username of logged in user is automatically entered
    payload = { orderItems , totalAmount , username : user.username }

    console.log("submitting : " , payload)

    try{
      await axios.post(`${API_URL}/placeOrder` , payload )
      alert.success("Order Placed ! ")
      setOrderItems([])
      setTotalAmount(0)
    }
    catch(err)
    {
      console.log(err)
      alert.error("Order Placement Failed ! ")
    }
  }


  useEffect(() => {
    fetchProducts()
    setUser(JSON.parse(localStorage.getItem("user")))

  },[])
  console.log(orderItems)
  console.log("user" , user)
  return (
    <Box pt={{ base: "120px", md: "75px" }} w={{base:"100%" , lg : "50%"}} className='mx-auto' >
      <Card>
      <div onSubmit={handleSubmit} className='order-form'>
        <h1 className="fs-2 mb-4">Order Details </h1>
        <div className="row">
          <div className="col-md-12">
            { 
              user?.roleId === 1 ?
              <></> 
              :
              <input
                id="name"
                type="text"
                placeholder='Customer Username *'
                ref={usernameRef}
              />
            
            }
          </div>
        </div>

        <div className="row">
            <div className="col-md-8">
              <Form.Select aria-label="Default select example" onChange={(e)=>handleItemChange(e)}>
              <option value={0}>Select Item</option>
              {
                products.map( ( el , ind ) => <option value={JSON.stringify(el)} key={ind} >{el.title}</option> )
              }
            </Form.Select>

            </div>
          <div className="col-md-4">
          <input type="number" placeholder='Quantity' value={quantity} onChange={(e)=> setQuantity(parseInt(e.target.value))} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Button variant="primary" fontSize={"14px"} onClick = {()=>{handleAddItem()}} >Add new Item</Button>
          </div>
        </div>


        <div className="row">
          <h1 className="fs-4 my-4">Cart : </h1>
          {orderItems.length == 0 ? 

            <p className='text-center'>Cart is Empty</p> 
            :
            <div className="col-12">
              <Table>
              <Thead>
                <Tr bg={tableRowColor}>
                  <Th color='gray.400' borderColor={borderColor}>
                    Item Name
                  </Th> 
                  <Th color='gray.400' borderColor={borderColor}>
                    Quantity
                  </Th>
                  <Th color='gray.400' borderColor={borderColor}>
                    Total Price
                  </Th>
                </Tr>
              </Thead>
              <Tbody>

                { orderItems.map( (el , index , arr ) => {
                  return (
                  <Tr key={el.title}>
                    <Td
                      fontSize='sm'
                      fontWeight='bold'
                      border={index === arr.length - 1 ? "none" : null}
                      borderColor={borderColor}
                      >
                      { el.title }
                    </Td>
                    <Td
                      fontSize='sm'
                      border={index === arr.length - 1 ? "none" : null}
                      borderColor={borderColor}>
                      {el.quantity}
                    </Td>

                    <Td
  
                      fontSize='sm'
                      border={index === arr.length - 1 ? "none" : null}
                      borderColor={borderColor}>
                      {el.price * el.quantity}
                    </Td>
                  </Tr>
                  )
                })}

              </Tbody>
              
              </Table>
              <h1 className='text-end fs-5 mt-2'>Grand Total : $ {totalAmount} </h1>
            </div>
            

          }
        </div>
  

  
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </div>

      </Card>
    </Box>
  )
}

