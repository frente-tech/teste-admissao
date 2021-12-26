import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import logo from '../../assets/img/logo.png';

const Home = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    height="100vh"
    bg="green.300"
  >
    <Box borderRadius="10" p="10" bg="gray.200">
      <Box w={ ['50vw', '40vw', '30vw'] }>
        <Image src={ logo } w="100%" h="100%" />
      </Box>
      <Text textAlign="center">Authenticated Home</Text>
    </Box>
  </Flex>
);

export default Home;
