import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function Carrosel() {
  return (
    <Flex
      w='100%'
      h='450px'
      bg='white'
      paddingX='100px'
      zIndex='2'
      mb='40px'
    >
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <Text position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >Europa</Text>
          <Text position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais antigo</Text>
          <Image src='/images/europa1.png' objectFit='cover' boxSize='100%' zIndex='0' position='relative' filter='brightness(0.8)' />
        </SwiperSlide>
        <SwiperSlide>
          <Text position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >América do Norte</Text>
          <Text position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais globalizado</Text>
          <Image src='/images/americanorte1.png' objectFit='cover' boxSize='100%' filter='brightness(0.8)' />
        </SwiperSlide>
        <SwiperSlide>
          <Text position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >América do Sul</Text>
          <Text position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais pobre</Text>
          <Image src='/images/americasul1.png' objectFit='cover' boxSize='100%' filter='brightness(0.8)' />
        </SwiperSlide>
        <SwiperSlide>
          <Text position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >Ásia</Text>
          <Text position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais rico</Text>
          <Image src='/images/asia1.png' objectFit='cover' boxSize='100%' filter='brightness(0.8)' />
        </SwiperSlide>
        <SwiperSlide>
          <Text position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >África</Text>
          <Text position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais quente</Text>
          <Image src='/images/africa1.png' objectFit='cover' boxSize='100%' filter='brightness(0.8)' />
        </SwiperSlide>
        <SwiperSlide>
          <Text position='absolute' color='white' fontWeight='700' fontSize='48px' zIndex='1' top='50%' left='50%' transform='translate(-50%, -50%)' >Oceania</Text>
          <Text position='absolute' color='white' fontWeight='700' fontSize='24px' zIndex='1' top='62%' left='50%' transform='translate(-50%, -50%)' >O continente mais pika</Text>
          <Image src='/images/oceania1.png' objectFit='cover' boxSize='100%' filter='brightness(0.8)' />
        </SwiperSlide>
      </Swiper>


    </Flex>
  );
}
