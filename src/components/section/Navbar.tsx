import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import Logo from '@/assets/logo.svg';
import Search from '@/assets/search.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Image,
  DrawerCloseButton,
} from '@chakra-ui/react';

const DATA_NAVBAR = [
  {
    name: 'About Us',
  },
  {
    name: 'Puppies',
  },
  {
    name: 'Process',
  },
  {
    name: 'What We Do?',
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <Image src={Logo} alt="Logo" />
        <Flex
          fontSize="14px"
          justifyContent="space-between"
          gap="54px"
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          {DATA_NAVBAR.map((data, key) => (
            <Text cursor="pointer" key={key}>
              {data.name}
            </Text>
          ))}
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
        <Box display={{ md: 'none' }} onClick={onOpen} as="button">
          <RxHamburgerMenu size={25} />
        </Box>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src={Logo} alt="Logo" />
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" gap={3}>
            {DATA_NAVBAR.map((data, key) => (
              <Text
                key={key}
                cursor="pointer"
                as="button"
                textAlign="center"
                _hover={{
                  bgColor: 'brand.brown',
                  color: 'white',
                  py: 2,
                }}
              >
                {data.name}
              </Text>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
