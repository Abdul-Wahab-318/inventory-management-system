import React , { useState } from 'react'
import "./AffiliateOverview.css"
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
import {default as ModalButton} from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'components/Card/Card';
import { Avatar } from '@chakra-ui/react';
import InfoCard from 'components/Card/InfoCard';
import { GlobeIcon } from 'components/Icons/Icons';
import {BiEdit , BiSave} from 'react-icons/bi'


export default function AffiliateOverview() {
  
  //state for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [ disabled , setDisabled ] = useState(true)
  let [ newCommission , setNewCommission ] = useState(20)

  let handleCopy = (event) => {
    navigator.clipboard.writeText(event.target.innerText)
  }

  let toggleDisable = () => {
    setDisabled( state => !state )
  }

  let updateCommission = () => {
    toggleDisable()
  }

  let handleDeleteAccount = () => {

  }

  return (
    <div className='affiliate-page page-spacing-top'>

    <Grid templateColumns={ "1fr 1fr 1fr  1fr "} gap='26px'>

      <InfoCard heading={'Total cards sold'} body={"13"}   Icon={GlobeIcon} />
      <InfoCard heading={'Cards Sold This Month'} body={"13"} footerNumber="+12%" footerText="This month"  Icon={GlobeIcon} />
      <InfoCard heading={'Revenue'} body={"13000"} footerNumber="+12%" footerText="This month"  Icon={GlobeIcon} />
      <InfoCard heading={'Balance Remaining'} body={"1300"} Icon={GlobeIcon} />

    </Grid>

      <Card mt='26px'>
        <Flex direction={"row"} alignItems={'center'} justifyContent='space-between' gap="20px" >
          <Flex className="affiliate-header-info" gap={'20px'}>
            <Avatar size={'lg'} />
            <Flex w={'100%'} direction={'row'} alignItems='center' justifyContent='space-between' className="affiliate-info-header">
              <Box  as='h1' fontSize={'30px'} >Shaharyar Raja  </Box>
              <Box as='h1' ms={"20px"} fontSize={'30px'} color={'#4A5568'} onClick={(e)=>handleCopy(e)}> #ID322 </Box>
            </Flex>
          </Flex>

          <ModalButton variant={'danger'} onClick={handleShow}>Delete Account</ModalButton>
          
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Warning !</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete this Affiliate's Account ? </Modal.Body>
            <Modal.Footer>
              <ModalButton variant="secondary" onClick={handleClose}>
                Cancel
              </ModalButton>
              <ModalButton variant="danger" onClick={()=> {ModalButton() ; handleDeleteAccount() }}>
                Delete
              </ModalButton>
            </Modal.Footer>
          </Modal>
        </Flex>
      </Card>

        <Card mt='26px'>
          <Grid templateColumns={"1fr 1fr 1fr"}>
            <Box>
              <h1  className='fs-3 '>Personal Details</h1>
              <h3 className='mt-4 mb-3'>Email : Shaharyar@gmail.com</h3>
              <h3 className='my-3'>Phone Number : 03115163419</h3>
              <h3 className='my-3'>Address: Islamabad , Pakistan</h3>
              <h3 className='my-3'>Affiliate Deal: Standard</h3>
            </Box>
            <Box>
              <h1  className='fs-3 '>Commission</h1>
              <Flex className='mt-4'>
                <Box>
                  <input disabled={disabled} className='commission-input'
                   onChange={(e)=>setNewCommission(Number(e.target.value))}
                   type="number" value={newCommission} 
                   width={"3ch"} min={0} max = {"50"}
                   onKeyUp={(e)=> {if(e.target.value>100) e.target.value=0}}
                   style={{"width":"4ch" , "padding":"0 5px"}}/>
                  <span>%</span>
                </Box>
                {
                  disabled ? 
                  <button onClick={()=>toggleDisable()}><BiEdit fontSize={"22px"} className="ms-5" /></button>
                  :
                  <button onClick={()=>updateCommission()}><BiSave fontSize={"22px"} className="ms-5" /></button>
                }
              </Flex>
            </Box>

          </Grid>
        </Card>
    </div>
  )
}
