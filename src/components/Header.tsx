import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      minW={1480}
      align='center'
      h='100px'
    >
      <Image
        src="/images/logo.svg"
        alt='logo'
        marginX='auto'
      />
    </Flex>
  )
}