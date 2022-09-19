import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Container() {
  return (
    <Box
      w='100%'
      bg='white'
      h='100vh'
      position='absolute'
      top='45vh'
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

      <Text color='shite.200' textAlign='center' fontSize='36px' fontWeight='500' mt='132px'>
        Vamos nessa?<br />
        Então escolha seu continente
      </Text>

    </Box>
  )
}