import { Box, Flex, Grid, Image, ImageProps, Text } from '@chakra-ui/react';
interface ProcessCardProps {
  image: ImageProps;
  title: string;
  description: string;
}

const ProcessCard = ({ description, image, title }: ProcessCardProps) => {
  return (
    <Box bgColor="#FFF8F2" p="25px" shadow="md" borderRadius="20px">
      <Grid gridTemplateColumns={'1fr 4fr'} columnGap="6">
        <Box display="flex" justifyContent="end" alignItems="start" mt="2">
          <Image {...image} height="25" />
        </Box>
        <Flex direction={'column'}>
          <Text fontWeight="bold" fontSize="21px">
            {title}
          </Text>
          <Text fontSize="12px" mt={2} fontFamily="Poppins">
            {description}
          </Text>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProcessCard;
