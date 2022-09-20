import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Box position='relative'>
      <Image
        src='/images/background.png'
        w='100%'
        position='absolute'
        zIndex='-1'
      />
      <Flex
        paddingY='80px'
        paddingX='140px'
        justify='space-between'
      >

        <Box>
          <Text
            color='white.50'
            fontWeight='500'
            fontSize='36px'
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>

          <Text
            color='white.100'
            mt='20px'
          >
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Box>

        <Image
          src='/images/airplane.svg'
          zIndex='2'
        />

      </Flex>
      <Box w='100%' bg='white' h='120px' position='absolute' bottom='0'>
      </Box>
    </Box>
  )
}