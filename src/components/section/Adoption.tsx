import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Adoption = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      shadow="sm"
      height={{ base: '70px', lg: '95px' }}
    >
      <Flex
        color="brand.brown"
        justify="space-between"
        maxWidth={1440}
        width="full"
        height="full"
        alignItems="center"
        px={{ base: '20px', sm: '40px', lg: '150px' }}
      ></Flex>
    </Box>
  );
};

export default Adoption;
