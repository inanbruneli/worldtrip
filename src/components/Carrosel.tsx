import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function Carrosel() {
  return (
    <Flex
      w='100%'
      h='450px'
      bg='white'
      position='absolute'
      top='105vh'
      paddingX='100px'
      zIndex='2'
      border='2px solid red'
    >
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <Image src='/images/europa1.png' objectFit='cover' boxSize='100%' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/europa1.png' objectFit='cover' boxSize='100%' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/europa1.png' objectFit='cover' boxSize='100%' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/europa1.png' objectFit='cover' boxSize='100%' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/europa1.png' objectFit='cover' boxSize='100%' />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
