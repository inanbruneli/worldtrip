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

  let continenteImagem = '/images/' + continente.replaceAll(' ', '').toLowerCase() + '.png';
  continenteImagem = continenteImagem.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

  return (
    <Box>
      <Header />

      <Box w='100%' h={['250px', '300px', '400px', '500px', '500px']} position='relative'>
        <Image src={continenteImagem} objectFit='cover' boxSize='100%' filter='brightness(0.8)' />
        <Text color='white' fontWeight='600' fontSize='48px' position='absolute' zIndex='1' bottom='59' left='140'>{data.continenteTitle}</Text>
      </Box>

      <Box paddingX={['10px', '10px', '20px ', '35px', '140']}>

        <Flex marginY='80px' justifyContent='space-between' alignItems='center' display={['block', 'block', 'block', 'block', 'flex']}>
          <Text w={['90%', '90%', '600px', '600px', '600px']} fontSize={['18px', '20px', '24px', '24px', '24px']} fontWeight='500' color='white.200' textAlign='justify' marginX='auto' mb={['10', '10', '10', '10', '0']}>
            {data.texto}
          </Text>
          <Flex w={['90%', '90%', '490px', '490px', '490px']} justifyContent='space-between' alignItems='center' marginX='auto'>
            <Box textAlign='center'>
              <Text fontSize={['40px', '42px', '48px', '48px', '48px']} color='yellow.900' fontWeight='600'>{data.nPaises}</Text>
              <Text color='white.200' fontSize={['18px', '20px', '24px', '24px', '24px']} fontWeight='600'>países</Text>
            </Box>
            <Box textAlign='center'>
              <Text fontSize={['40px', '42px', '48px', '48px', '48px']} color='yellow.900' fontWeight='600'>{data.nLinguas}</Text>
              <Text color='white.200' fontSize={['18px', '20px', '24px', '24px', '24px']} fontWeight='600'>línguas</Text>
            </Box>
            <Box textAlign='center'>
              <Text fontSize={['40px', '42px', '48px', '48px', '48px']} color='yellow.900' fontWeight='600'>{data.nCidades}</Text>
              <Text color='white.200' fontSize={['18px', '20px', '24px', '24px', '24px']} fontWeight='600'>cidades +100</Text>
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