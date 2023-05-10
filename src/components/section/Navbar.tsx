import { Box, Flex, Text } from '@chakra-ui/react';
import Logo from '@/assets/logo.svg';
import Search from '@/assets/search.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
const Navbar = () => {
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
      >
        <img src={Logo} alt="Logo" />
        <Flex
          fontSize="14px"
          justifyContent="space-between"
          gap="54px"
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          <Text cursor="pointer">About Us</Text>
          <Text cursor="pointer">Puppies</Text>
          <Text cursor="pointer">Process</Text>
          <Text cursor="pointer">What We Do?</Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          gap="40px"
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          <Text as="button">Login</Text>
          <Text as="button">Account</Text>
          <img src={Search} alt="search" />
        </Flex>
        <Box display={{ md: 'none' }}>
          <RxHamburgerMenu size={25} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
