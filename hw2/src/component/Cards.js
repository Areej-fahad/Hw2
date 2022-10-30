import {  Box, Image } from '@chakra-ui/react'
import { Stack} from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import React from 'react'

export default function Cards() {
  return (

    <SimpleGrid columns={4} spacing={10}>

  <Flex>
  <Box w='70px' h='10'  objectFit='cover' src='https://pbs.twimg.com/media/Ff562W7WQAIYK3T?format=jpg&name=medium'/>
  <Spacer />
  
  <Box  w='70px' h='10'objectFit='cover'src='https://pbs.twimg.com/media/FgEwwCTWQAIBxHm?format=jpg&name=large'/>
  <Spacer />
  
 
 <Box w='70px' h='10'    objectFit='cover' src='https://pbs.twimg.com/media/FgA0qioXoAAS4Wb?format=jpg&name=900x900'/>
 <Spacer />

 <Box w='70px' h='10'    objectFit='cover' src='https://pbs.twimg.com/media/FfyBLXEXoAA81Au?format=jpg&name=900x900'/>
 <Spacer />
 <Box w='70px' h='10'     objectFit='cover'
 src='https://pbs.twimg.com/media/Ff58dCqWIAAcgSS?format=jpg&name=900x900' ></Box>
  <Spacer />
 <Box w='70px' h='10'     objectFit='cover' src='https://pbs.twimg.com/media/Ff562W7WQAIYK3T?format=jpg&name=900x900' />
 <Spacer />
 </Flex>

</SimpleGrid>
  )
}



