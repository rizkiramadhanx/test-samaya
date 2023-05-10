import React from 'react';
import { Box, Image, Text, Flex, ImageProps } from '@chakra-ui/react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: ImageProps;
}
const FeatureCard = ({ description, image, title }: FeatureCardProps) => {
  return (
    <Box
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      position="relative"
    >
      <Image {...image} />
      <Flex
        px="20px"
        py="15px"
        direction="column"
        position="absolute"
        w="250px"
        top="200px"
        right={0}
        shadow="md"
        bg="white"
      >
        <Text fontSize="14px" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="10px" mt="11px" fontFamily="Poppins">
          {description}
        </Text>
        <Text mt="14px">See More </Text>
      </Flex>
    </Box>
  );
};

export default FeatureCard;
