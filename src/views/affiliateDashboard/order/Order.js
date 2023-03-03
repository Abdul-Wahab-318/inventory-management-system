import React from 'react'
import "./Order.css"
import { useFormik , Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
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


export default function Order() {

  const handleFormSubmit = ( values ) => {
    console.log("submitting : " , values )

    let standardCardPrice = 1799 
    let customCardPrice = 2499 
    let businessCardPrice = 3799

    let saleBy ="affiliateId123" , amountPaid = 0 
    let { name , email , phoneNumber , city , street  , cardType } = values 
    
    if ( cardType == 'standard' )
      amountPaid = standardCardPrice * 0.50 
    else if ( cardType == 'custom' )
      amountPaid = customCardPrice * 0.50 
    else
      amountPaid = businessCardPrice * 0.50

    let statusDetails = { orderStatus : 'pending' , paymentStatus : 'advance paid' , amountPaid : amountPaid }
    let customerDetails = { name , email , phoneNumber , city , street }
    let orderDetails = { statusDetails , customerDetails , saleBy : 'affiliateID123' , dateSold : new Date() , cardType , saleBy } 
    console.log("order details : " , orderDetails)

  }

  const orderSchema = Yup.object({

      name: Yup.string()
        .min(2, 'Name is Too Short!')
        .max(50, 'name is Too Long!')
        .required('Name is required'),

      email: Yup.string().email('Invalid email').required('Email is required'),

      phoneNumber : Yup.string().length(10 , "Phone Number must contain 11 digits").required("Phone Number is required") , 
      street : Yup.string().min(4 , "Street must be at least 4 characters long").max(60 , "Street can be max 60 characters long") ,
      city : Yup.string().required(), 

      cardType : Yup.string().required().default('standard') 

  });

  const formik = useFormik({

    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      street: '',
      city: '',
      cardType: ''
    },

    validationSchema: orderSchema ,

    onSubmit: values => {
      handleFormSubmit(values)
    },

  });

  return (
    <Box pt={{ base: "120px", md: "75px" }} w={{base:"100%" , lg : "50%"}} className='mx-auto' >
      <Card>
      <form onSubmit={formik.handleSubmit} className='order-form'>
        <h1 className="fs-2 mb-4">Order Details </h1>
        <div className="row">
          <div className="col-md-6">
            <input
              id="name"
              type="text"
              placeholder='Customer Name *'
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='form-error-message'>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="col-md-6">
            <input
              id="email"
              type="text"
              placeholder='Email *'
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='form-error-message'>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <input
              id="phoneNumber"
              type="number"
              placeholder='Phone Number *'
              {...formik.getFieldProps('phoneNumber')}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className='form-error-message'>{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
          <div className="col-md-6"  >
            <select
              id="cardType"
              placeholder='Select Card Type'
              {...formik.getFieldProps('cardType')}
            >
              <option value="standard">Standard Card</option>
              <option value="custom">Custom Card</option>
              <option value="business">Business Card</option>
            </select>
            {formik.touched.cardType && formik.errors.cardType ? (
              <div className='form-error-message'>{formik.errors.cardType}</div>
            ) : null}
          </div>
        </div>

        <div className="row">
        <div className="col-md-6">
            <input
                id="street"
                type="text"
                placeholder='Street Address'
                {...formik.getFieldProps('street')}
              />
            {formik.touched.street && formik.errors.street ? (
              <div className='form-error-message'>{formik.errors.street}</div>
            ) : null}
          </div>
          <div className="col-md-6">
            <select
              id="city"
              placeholder='city'
              {...formik.getFieldProps('city')}
            >
              <option value="null">Select city</option>
              <option value="islamabad">Islamabad</option>
              </select>
            {formik.touched.city && formik.errors.city ? (
              <div className='form-error-message'>{formik.errors.city}</div>
            ) : null}
          </div>
        </div>
  

  
        <Button type="submit">Submit</Button>
      </form>

      </Card>
    </Box>
  )
}

