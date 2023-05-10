import React from 'react';
import { Box, Flex, Image, SimpleGrid, Text, Button } from '@chakra-ui/react';
import AnchorRight from '@/assets/anchorRight.svg';
import FootDog from '@/assets/footDog.svg';
import FeatureCard from '../Card/FeatureCard';
import Feature1 from '@/assets/Feature1.png';
import Feature2 from '@/assets/Feature2.png';
import Feature3 from '@/assets/Feature3.png';

const DATA_FEATURE = [
  {
    image: Feature1,
    title: 'Lorem ipsum dolor sit amet consectetur. Odio lorem',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat lacus nulla mattis etiam a faucibus est. Ut tristique ullamcorper elementum',
  },
  {
    image: Feature2,
    title: 'Lorem ipsum dolor sit amet consectetur. Odio lorem',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat lacus nulla mattis etiam a faucibus est. Ut tristique ullamcorper elementum',
  },
  {
    image: Feature3,
    title: 'Lorem ipsum dolor sit amet consectetur. Odio lorem',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat lacus nulla mattis etiam a faucibus est. Ut tristique ullamcorper elementum',
  },
];

const Feature = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Flex
        color="brand.brown"
        justify="space-between"
        maxWidth={1440}
        width="full"
        direction={'column'}
        paddingY="50px"
        height="full"
        alignItems="center"
        px={{ base: '20px', sm: '40px', lg: '150px' }}
      >
        <Box
          fontSize="36"
          fontWeight="bold"
          color={'brand.brown'}
          w="full"
          justifyContent="center"
          gap={'25px'}
          alignItems="center"
          display="flex"
        >
          <Image src={FootDog} />
          <Text textTransform="uppercase">What We Do</Text>
          <Image src={FootDog} />
        </Box>
        <SimpleGrid
          mt="45px"
          columns={[1, 1, 1, 3]}
          columnGap="50px"
          rowGap="95px"
        >
          {DATA_FEATURE.map((data, key: number) => (
            <FeatureCard
              key={key}
              description={data.description}
              image={{ src: data.image }}
              title={data.title}
            />
          ))}
        </SimpleGrid>
        <Button
          mt="120px"
          color="brand.brown"
          bg="transparent"
          borderColor="brand.brown"
          border="2px"
          fontSize={{ base: 14, md: 21 }}
          fontWeight="bold"
          borderRadius="none"
        >
          <Text>View All Process</Text>
          <Image ml={2} height="12px" src={AnchorRight} alt="anchorRight" />
        </Button>
      </Flex>
    </Box>
  );
};

export default Feature;
