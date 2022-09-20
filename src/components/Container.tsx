import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Container() {
  return (
    <Box
      w='100%'
      bg='white'
      zIndex='0'
      paddingX='140px'
      paddingY='100px'
    >

      <Flex h='145px' justifyContent='space-between'>
        <Image src='/images/Nightlife.svg' />
        <Image src='/images/Beach.svg' />
        <Image src='/images/Modern.svg' />
        <Image src='/images/Classic.svg' />
        <Image src='/images/More.svg' />
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