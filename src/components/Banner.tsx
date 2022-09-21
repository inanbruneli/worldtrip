import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Box position='relative'>
      <Image
        src='/images/background.png'
        w='100%'
        position='absolute'
        zIndex='-1'
        h='100%'
      />
      <Flex
        paddingY='80px'
        paddingX={['10px', '10px', '100px', '140px', '140px']}
        justify='space-between'
        h='400px'
      >

        <Box>
          <Text
            color='white.50'
            fontWeight='500'
            fontSize={['26px', '30px', '36px', '36px', '36px']}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>

          <Text
            color='white.100'
            mt='20px'
            fontSize={['16px', '18px', '20px', '20px', '20px']}
          >
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Box>

        <Image
          src='/images/airplane.svg'
          zIndex='2'
          display={['none', 'none', 'none', 'none', 'block']}
        />

      </Flex>
      <Box w='100%' bg='white' h='120px' position='absolute' bottom='0' display={['none', 'none', 'none', 'block', 'block']}>
      </Box>
    </Box>
  )
}