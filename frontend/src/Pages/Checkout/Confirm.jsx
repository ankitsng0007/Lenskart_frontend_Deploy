import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar, {} from "../../Components/Navbar/Navbar";
import Footer, {} from "../../Components/Footer/Footer";
import { Box, Flex, Image } from '@chakra-ui/react';


const Confirm = () => {
     const navigate = useNavigate();
     setTimeout(() => {
        navigate("/orderhistory");
     },3000);

  return (
    <>
      <Navbar />
      <br />
      <Flex>
      <Box w={400}>
          <Image src="https://static.vecteezy.com/system/resources/previews/006/900/704/original/green-tick-checkbox-illustration-isolated-on-white-background-free-vector.jpg" />
        </Box>
        <h1>
            Your Order has been palced Successfully
        </h1>
      </Flex>
      <br />

      <Footer />
    </>
  );
}

export default Confirm;
