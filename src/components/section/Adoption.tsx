import React from 'react';
import { Box, Flex, Text, Image, SimpleGrid, Button } from '@chakra-ui/react';
import FootDog from '@/assets/footDog.svg';
import AdoptCard from '../Card/AdoptCard';
import CardAdopt1 from '@/assets/CardAdopt1.png';
import CardAdopt2 from '@/assets/CardAdopt2.png';
import CardAdopt3 from '@/assets/CardAdopt3.png';
import AnchorRight from '@/assets/anchorRight.svg';

const DATA_ADOPT = [
  {
    image: CardAdopt1,
    title: 'DOG NAME',
    description:
      'Lorem ipsum dolor sit amet consectetur. Quis amet sit nunc tortor',
  },
  {
    image: CardAdopt2,
    title: 'DOG NAME',
    description:
      'Lorem ipsum dolor sit amet consectetur. Quis amet sit nunc tortor',
  },
  {
    image: CardAdopt3,
    title: 'DOG NAME',
    description:
      'Lorem ipsum dolor sit amet consectetur. Quis amet sit nunc tortor',
  },
];

const Adoption = () => {
  return (
    <Box display="flex" justifyContent="center" shadow="sm">
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
          <Text>Adoptable Puppies</Text>
          <Image src={FootDog} />
        </Box>
        <SimpleGrid
          mt={'45px'}
          columns={[1, 1, 1, 3]}
          columnGap="82px"
          rowGap={10}
        >
          {DATA_ADOPT.map((data, key: number) => (
            <AdoptCard
              description={data.description}
              key={key}
              title={data.title}
              image={{
                src: data.image,
              }}
            />
          ))}
        </SimpleGrid>
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
          <Text>Find More</Text>
          <Image ml={2} height="12px" src={AnchorRight} alt="anchorRight" />
        </Button>
      </Flex>
    </Box>
  );
};

export default Adoption;
