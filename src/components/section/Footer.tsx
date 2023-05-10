import React from 'react';
import { Box, Flex, SimpleGrid, Text, Image } from '@chakra-ui/react';
import Logo from '@/assets/logo.svg';
import Facebook from '@/assets/facebook.svg';
import Instagram from '@/assets/instagram.svg';
import Youtube from '@/assets/youtube.svg';

const Footer = () => {
  return (
    <Box display="flex" justifyContent="center" height="350px">
      <Flex
        color="brand.brown"
        justify="space-between"
        maxWidth={1440}
        width="full"
        height="full"
        alignItems="center"
        px={{ base: '20px', sm: '40px', lg: '150px' }}
      >
        <SimpleGrid columns={[1, 1, 1, 2]} gap={5}>
          <Box
            fontFamily="Poppins"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            gap={10}
          >
            <Text>
              Lorem ipsum dolor sit amet consectetur. Leo ultrices feugiat
              libero sapien porta in non proin. Vitae ornare in maecenas
              scelerisque posuere consectetur laoreet mauris id. Scelerisque
              laoreet urna dignissim duis id a diam. Urna vitae maecenas vel
              consequat velit vel.
            </Text>
            <Text>COPYRIGHT (C) Puppy Kingdom</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems={['start', 'start', 'start', 'end']}
            gap={4}
          >
            <Flex justifyContent="center">
              <Image src={Logo} height={150} />
            </Flex>
            <Flex gap="21px">
              <Image src={Facebook} />
              <Image src={Instagram} />
              <Image src={Youtube} />
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Footer;
