import React from 'react';
import { Box, Image, Text, Flex, ImageProps } from '@chakra-ui/react';

interface AdoptCardProps {
  image: ImageProps;
  title: string;
  description: string;
}
const AdoptCard = ({ description, image, title }: AdoptCardProps) => {
  return (
    <Box color="brand.brown">
      <Flex justifyContent="center">
        <Image {...image} />
      </Flex>
      <Text mt="34px" fontWeight="bold" fontSize="px" textAlign="center">
        {title}
      </Text>
      <Text mt="10px" fontWeight="light" fontSize="16px" textAlign="center">
        {description}
      </Text>
    </Box>
  );
};

export default AdoptCard;
