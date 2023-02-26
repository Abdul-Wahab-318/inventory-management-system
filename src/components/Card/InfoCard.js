import React from 'react'
import {
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import IconBox from "components/Icons/IconBox";

export default function InfoCard( { heading , body , footerNumber = "" , footerText = "" , Icon }) {

  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");

  return (
    <Card minH='125px'>
    <Flex direction='column'>
      <Flex
        flexDirection='row'
        align='center'
        justify='center'
        w='100%'
        mb='25px'>
        <Stat me='auto'>
          <StatLabel
            fontSize='xs'
            color='gray.400'
            fontWeight='bold'
            textTransform='uppercase'>
             {heading}
          </StatLabel>
          <Flex>
            <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
              {body}
            </StatNumber>
          </Flex>
        </Stat>
        <IconBox
          borderRadius='50%'
          as='box'
          h={"45px"}
          w={"45px"}
          bg={iconBlue}>
          <Icon h={"24px"} w={"24px"} color={iconBoxInside} />
        </IconBox>
      </Flex>
      <Text color='gray.400' fontSize='sm'>
        <Text as='span' color='green.400' fontWeight='bold'>
          {footerNumber} {" "}
        </Text>
        {footerText}
      </Text>
    </Flex>
  </Card>
  )
}
