import React from 'react';
import { Flex, Box, Text, SimpleGrid, Button, Image } from '@chakra-ui/react';
import HeroBackground from '@/assets/Hero.png';
import Foot from '@/assets/foot.svg';
import AnchorRight from '@/assets/anchorRight.svg';

const Hero = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      shadow="sm"
      position="relative"
      minH={{
        base: '600px',
        lg: '600px',
        '2xl': '600px',
      }}
    >
      <Box position="absolute" maxWidth={1440} w="full" zIndex="-1" right={0}>
        <Box>
          <Image src={Foot} height="520px" />
        </Box>
      </Box>
      <Flex
        backgroundImage={[null, null, null, HeroBackground]}
        justify="space-between"
        backgroundRepeat="no-repeat"
        backgroundPosition="right"
        backgroundSize="contain"
        maxWidth={1440}
        width="full"
        height="full"
        alignItems="center"
        px={{ base: '20px', sm: '40px', lg: '150px' }}
      >
        <SimpleGrid rowGap={10} columns={[null, null, null, 2]}>
          <Flex
            direction="column"
            justifyContent="center"
            minH={{ base: '600px' }}
          >
            <Text
              fontWeight="bold"
              fontSize={{
                base: '30px',
                lg: '64px',
              }}
              color="brand.brown"
            >
              Premium puppy ready to adopt
            </Text>
            <Text
              fontWeight="bold"
              fontSize={{
                base: '20px',
              }}
              color="#96817C"
              mt="12px"
              fontFamily="Poppins"
            >
              Lorem ipsum dolor sit amet consectetur. Porttitor accumsan fusce
              aliquam cras dignissim nulla.
            </Text>
            <Button
              mt="45px"
              color="brand.brown"
              bg="transparent"
              borderColor="brand.brown"
              border="2px"
              fontSize={{ base: 14, md: 21 }}
              fontWeight="bold"
              w="180px"
              borderRadius="none"
            >
              <Text>See More</Text>
              <Image ml={2} height="12px" src={AnchorRight} alt="anchorRight" />
            </Button>
          </Flex>
          <Box display={[null, null, null, 'none']}>
            <img src={HeroBackground} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Hero;
