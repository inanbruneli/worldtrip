import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Cidades from "../../components/Cidades";
import Header from "../../components/Header";
import dataContinentes from '../../data/continentes.json';

interface detalhesProps {
  continente: string;
}

export default function Detalhes({ continente }: detalhesProps) {

  const data = dataContinentes.filter(item => item.continente == continente)[0];

  return (
    <Box>
      <Header />

      <Box w='100%' h='500px' position='relative'>
        <Image src='/images/europa.png' objectFit='cover' boxSize='100%' filter='brightness(0.8)' />
        <Text color='white' fontWeight='600' fontSize='48px' position='absolute' zIndex='1' bottom='59' left='140'>{data.continenteTitle}</Text>
      </Box>

      <Box paddingX='140'>

        <Flex marginY='80px' justifyContent='space-between'>
          <Text w='600px' fontSize='24px' fontWeight='500' color='white.200' textAlign='justify'>
            {data.texto}
          </Text>
          <Flex w='490px' justifyContent='space-between' alignItems='center'>
            <Box textAlign='center'>
              <Text fontSize='48px' color='yellow.900' fontWeight='600'>{data.nPaises}</Text>
              <Text color='white.200' fontSize='24px' fontWeight='600'>países</Text>
            </Box>
            <Box textAlign='center'>
              <Text fontSize='48px' color='yellow.900' fontWeight='600'>{data.nLinguas}</Text>
              <Text color='white.200' fontSize='24px' fontWeight='600'>línguas</Text>
            </Box>
            <Box textAlign='center'>
              <Text fontSize='48px' color='yellow.900' fontWeight='600'>{data.nCidades}</Text>
              <Text color='white.200' fontSize='24px' fontWeight='600'>cidades +100</Text>
            </Box>
          </Flex>
        </Flex>

        <Cidades continente={continente} />
      </Box>
    </Box >
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  return {
    props: {
      continente: params.continente
    }
  }
}