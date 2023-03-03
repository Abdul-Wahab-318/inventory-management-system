import React , { useState } from 'react'
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
import Card from 'components/Card/Card';
import { Avatar } from '@chakra-ui/react';
import InfoCard from 'components/Card/InfoCard';
import { GlobeIcon } from 'components/Icons/Icons';
import {BiEdit , BiSave} from 'react-icons/bi'


export default function Profile() {
  
  let handleCopy = (event) => {
    navigator.clipboard.writeText(event.target.innerText)
  }

  return (
    <div className='affiliate-page page-spacing-top'>

    <Grid templateColumns={ "1fr 1fr 1fr  1fr "} gap='26px'>

      <InfoCard heading={'Total cards sold'} body={"13"}   Icon={GlobeIcon} />
      <InfoCard heading={'Cards Sold This Month'} body={"13"} footerNumber="+12%" footerText="This month"  Icon={GlobeIcon} />
      <InfoCard heading={'Revenue'} body={"13000"} footerNumber="+12%" footerText="This month"  Icon={GlobeIcon} />
      <InfoCard heading={'Balance Remaining'} body={"1300"} Icon={GlobeIcon} />

    </Grid>
    <Grid templateColumns={"1fr 2fr"}>

      <Card mt='26px'>

        <Flex direction={"row"} alignItems={'center'} justifyContent='space-between' gap="20px" >
          <Flex className="affiliate-header-info" gap={'20px'}>
            <Avatar size={'lg'} />
            <Flex w={'100%'} direction={'row'} alignItems='center' justifyContent='space-between' className="affiliate-info-header">
              <Box  as='h1' fontSize={'30px'} >Shaharyar Raja  </Box>
              <Box as='h1' ms={"20px"} fontSize={'30px'} color={'#4A5568'} onClick={(e)=>handleCopy(e)}> #ID322 </Box>
            </Flex>
          </Flex>
        </Flex>

        <Card mt='26px'>
            <Box>

              <h3 className='mt-4 mb-3'>Email : Shaharyar@gmail.com</h3>
              <h3 className='my-3'>Phone Number : 03115163419</h3>
              <h3 className='my-3'>Address: Islamabad , Pakistan</h3>
              <h3 className='my-3'>Affiliate Deal: Standard</h3>
            </Box>
        </Card>

      </Card>

    </Grid>
    </div>
  )
}
