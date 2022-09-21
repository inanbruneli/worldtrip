import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import NextLink from "next/link";

import { Pagination } from "swiper";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function Carrosel() {
  return (
    <Flex
      w='100%'
      h='450px'
      bg='white'
      paddingX={['0', '0', '100px', '100px', '100px']}
      zIndex='2'
      mb='40px'
    >
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >Europa</Text>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais antigo</Text>
          <NextLink href='../../detalhes/europa' passHref>
            <Image src='/images/europa1.png' objectFit='cover' boxSize='100%' zIndex='0' position='relative' filter='brightness(0.8)' cursor='pointer' />
          </ NextLink >
        </SwiperSlide>
        <SwiperSlide>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >América do Norte</Text>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais globalizado</Text>
          <NextLink href='../../detalhes/americadonorte' passHref>
            <Image src='/images/americanorte1.png' objectFit='cover' boxSize='100%' filter='brightness(0.8)' cursor='pointer' />
          </ NextLink >
        </SwiperSlide>
        <SwiperSlide>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >América do Sul</Text>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais pobre</Text>
          <NextLink href='../../detalhes/americadosul' passHref>
            <Image src='/images/americasul1.png' objectFit='cover' boxSize='100%' filter='brightness(0.8)' cursor='pointer' />
          </ NextLink >
        </SwiperSlide>
        <SwiperSlide>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >Ásia</Text>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais rico</Text>
          <NextLink href='../../detalhes/asia' passHref>
            <Image src='/images/asia1.png' objectFit='cover' boxSize='100%' filter='brightness(0.8)' cursor='pointer' />
          </ NextLink >
        </SwiperSlide>
        <SwiperSlide>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >África</Text>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais quente</Text>
          <NextLink href='../../detalhes/africA' passHref>
            <Image src='/images/africa1.png' objectFit='cover' boxSize='100%' filter='brightness(0.8)' cursor='pointer' />
          </NextLink>
        </SwiperSlide>
        <SwiperSlide>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >Oceania</Text>
          <Text w='100%' textAlign='center' position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais pika</Text>
          <NextLink href='../../detalhes/oceania' passHref>
            <Image src='/images/oceania1.png' objectFit='cover' boxSize='100%' filter='brightness(0.8)' cursor='pointer' />
          </NextLink>
        </SwiperSlide>
      </Swiper>


    </Flex >
  );
}
