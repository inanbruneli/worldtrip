import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface cidadesProps {
  cidade: string;
  pais: string;
}

export default function CidadesItem({ cidade, pais }: cidadesProps) {
  let cidadeImage = '/images/' + cidade.replaceAll(' ', '').toLowerCase() + '.png';
  let paisImage = '/images/' + pais.replaceAll(' ', '').toLowerCase() + '.png';

  cidadeImage = cidadeImage.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  paisImage = paisImage.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

  return (
    <Box w='256px' borderRadius='4px' border='1px solid rgba(255, 186, 8, 0.5)' marginBottom='48px'>
      <Image src={cidadeImage} objectFit='cover' h='173px' w='100%' />
      <Flex h='106px' paddingX='24px' paddingTop='18px' justifyContent='space-between' alignItems='center'>
        <Box>
          <Text fontSize='20px' fontWeight='600' color='white.200' marginBottom='12px'>{cidade}</Text>
          <Text fontSize='16px' fontWeight='50' color='#999999'>{pais}</Text>
        </Box>
        <Image src={paisImage} borderRadius='50%' boxSize='30px' objectFit='fill' />
      </Flex>
    </Box>
  )
}