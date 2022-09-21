import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CidadesItem from "./CidadesItem";
import dataContinentes from '../../data/continentes.json';

interface cidadesProps {
  continente: string;
}

export default function Cidades({ continente }: cidadesProps) {
  const data = dataContinentes.filter(item => item.continente == continente)[0].cidades;

  return (
    <>
      <Box marginTop='80px' marginBottom='40px'>
        <Text color='white.200' fontSize='36px' fontWeight='500'>Cidades +100</Text>
      </Box>
      <Flex justifyContent={['center', 'space-between', 'space-between', 'space-between', 'space-between']} wrap='wrap'>
        {data.map(item => <CidadesItem cidade={item.cidade} pais={item.pais} />)}
      </Flex>
    </>

  )
}