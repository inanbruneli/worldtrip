import { Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      minW={1480}
      align='center'
      h='100px'
    >
      <img src={require('../images/logo.svg')} />
    </Flex>
  )
}