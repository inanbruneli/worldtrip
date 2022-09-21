import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Container() {
  return (
    <Box
      w='100%'
      bg='white'
      zIndex='0'
      paddingX={['0', '0', '30px', '140px', '140px']}
      paddingY='100px'
    >

      <Flex h='145px' justifyContent='space-between' display={['none', 'none', 'flex', 'flex', 'flex']}>
        <Image src='/images/Nightlife.svg' />
        <Image src='/images/Beach.svg' />
        <Image src='/images/Modern.svg' />
        <Image src='/images/Classic.svg' />
        <Image src='/images/More.svg' />
      </Flex>

      <Flex display={['flex', 'flex', 'none', 'none', 'none']} w='100%' justifyContent='space-between' paddingX={['5%', '10%', '15%', '15%', '15%']} wrap='wrap'>
        <Flex justifyContent='center' alignItems='center' mb='27px' mr='15px'>
          <Box w='12px' h='12px' bg='yellow.900' borderRadius='50%' mr='2'></Box>
          <Text color='white.200' fontSize='28px' fontWeight='500'>vida noturna</Text>
        </Flex>
        <Flex justifyContent='center' alignItems='center' mb='27px' mr='15px'>
          <Box w='12px' h='12px' bg='yellow.900' borderRadius='50%' mr='2'></Box>
          <Text color='white.200' fontSize='28px' fontWeight='500'>praia</Text>
        </Flex>
        <Flex justifyContent='center' alignItems='center' mb='27px' mr='15px'>
          <Box w='12px' h='12px' bg='yellow.900' borderRadius='50%' mr='2'></Box>
          <Text color='white.200' fontSize='28px' fontWeight='500'>moderno</Text>
        </Flex>
        <Flex justifyContent='center' alignItems='center' mb='27px' mr='15px'>
          <Box w='12px' h='12px' bg='yellow.900' borderRadius='50%' mr='2'></Box>
          <Text color='white.200' fontSize='28px' fontWeight='500'>clássico</Text>
        </Flex>
        <Flex justifyContent='center' alignItems='center' mb='27px' mr='15px'>
          <Box w='12px' h='12px' bg='yellow.900' borderRadius='50%' mr='2'></Box>
          <Text color='white.200' fontSize='28px' fontWeight='500'>e mais...</Text>
        </Flex>
      </Flex>

      <Box borderTop='2px solid black' w='90px' h='2px' margin='0 auto' mt='80px'>

      </Box>

      <Text color='shite.200' textAlign='center' fontSize='36px' fontWeight='500' mt='52px'>
        Vamos nessa?<br />
        Então escolha seu continente
      </Text>

    </Box>
  )
}