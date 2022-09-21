import { Box, Flex, Image } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { AiOutlineLeft } from 'react-icons/ai';
import NextLink from "next/link";

export default function Header() {

  const { asPath } = useRouter();
  console.log(asPath)

  return (
    <Flex
      as='header'
      w='100%'
      align='center'
      h='100px'
    >
      {asPath != '/' && (
        <NextLink href='../../' passHref>
          <Box ml='10%' cursor='pointer'>
            <AiOutlineLeft color='#47585B' fontSize='24px' fontWeight='bold' />
          </Box>
        </NextLink>
      )
      }


      <Image
        src="/images/logo.svg"
        alt='logo'
        marginX='auto'

      />
    </Flex>
  )
}