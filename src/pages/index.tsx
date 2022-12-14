import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Carrosel from "../components/Carrosel";
import Container from "../components/Container";
import Header from "../components/Header";

export default function Home() {
  return (
    <Box overflowX='hidden'>
      <Header />
      <Banner />
      <Container />
      <Carrosel />
    </Box>
  )
}