import React , {useState , useEffect} from 'react'
import "./order/Order.css"
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
import { useRef } from 'react';
export default function Inventory() {

  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const { colorMode } = useColorMode();

  const alert = useAlert()
  let [ brands , setBrands ] = useState([])
  let [ suppliers , setSuppliers ] = useState([])
  let [ product , setProduct ] = useState([])
  let [ selectedBrand , setSelectedBrand ] = useState("")
  let [ selectedSupplier , setSelectedSupplier ] = useState("")
  let quantityRef = useRef(null) 
  let mrpRef = useRef(null)
  let salePriceRef = useRef(null)
  let skuRef = useRef(null)
  let titleRef = useRef(null)
  let summaryRef = useRef(null)

  let fetchBrandsAndSupplier = async () => {
    try{
      let { data } = await axios.get(`${API_URL}/getBrands`)
      let { data : items } = data 
      setBrands(items)
      setSuppliers( items )
    }
    catch( err )
    {
      console.log(err)
    }
  }

  const handleSelectChange = ( e , set ) => {
    console.log(e)
    let item = parseInt(e.target.value)
    set(item)
  }

  let createProduct = async () => {

    let title = titleRef.current.value
    let mrp = parseInt(mrpRef.current.value)
    let salePrice = parseInt(salePriceRef.current.value)
    let sku = skuRef.current.value
    let summary = summaryRef.current.value
    let quantity = parseInt(quantityRef.current.value)

    let payload = { 
        title ,
        mrp ,
        salePrice ,
        sku ,
        summary ,
        selectedBrand ,
        selectedSupplier ,
        quantity
    }

    console.log("submitting : " , payload)

    try{
      await axios.post(`${API_URL}/createProduct` , payload )
      alert.success("Order Placed ! ")
    }
    catch(err)
    {
      console.log(err)
      alert.error("Order Placement Failed ! ")
    }
  }


  useEffect(() => {
    fetchBrandsAndSupplier()

  },[])

  return (
    <Box pt={{ base: "120px", md: "75px" }} w={{base:"100%" , lg : "50%"}} className='mx-auto' >
      <Card>
      <div onSubmit={createProduct} className='order-form'>
        <h1 className="fs-2 mb-4">Create New Product </h1>
        <div className="row">
          <div className="col-md-8">
            <input
            id="title"
            type="text"
            placeholder='Title *'
            ref={titleRef}
            />
          </div>
          <div className="col-md-4">
            <input
            id="quantity"
            type="number"
            placeholder='Quantity *' ref={quantityRef}
            />
          </div>
        </div>

        <div className="row">
            <div className="col-md-8">
              <Form.Select aria-label="Default select example" onChange={(e)=>handleSelectChange(e,setSelectedBrand)}>
              <option value={0}>Select Brand</option>
              {
                brands.map( ( el , ind ) => <option value={el.id} key={ind} >{el.title}</option> )
              }
            </Form.Select>
            </div>
            <div className="col-md-4">
                <input type="text" placeholder='SKU *'  ref={skuRef}/>
            </div>
        </div>

        <div className="row">
            <div className="col-md-8">
              <Form.Select aria-label="Default select example" onChange={(e)=>handleSelectChange(e,setSelectedSupplier)}>
              <option value={0}>Select Supplier</option>
              {
                brands.map( ( el , ind ) => <option value={el.id} key={ind} >{el.title}</option> )
              }
            </Form.Select>
            </div>
            <div className="col-md-4">
                <input type="number" placeholder='Retail Price *'  ref={mrpRef} />
            </div>
        </div>

        <div className="row">
            <div className="col-md-8">
              <textarea name="summary" ref={summaryRef} id="summary" placeholder='Summary' className='p-2 border-1' cols="50" rows="4" width="100%"></textarea>
            </div>
            <div className="col-md-4">
                <input type="number" placeholder='Sale Price *' ref={salePriceRef} />
            </div>
        </div>



        {/* <div className="row">
          <div className="col-md-12">
            <Button variant="primary" fontSize={"14px"} onClick = {()=>{createProduct()}} >Create</Button>
          </div>
        </div> */}


        {/* <div className="row d-none">
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
        </div> */}
  

  
        <Button type="submit" onClick = {()=>{createProduct()}} >Submit</Button>
      </div>

      </Card>
    </Box>
  )
}

