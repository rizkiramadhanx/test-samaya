import FootDog from '@/assets/footDog.svg';
import ProcessImg from '@/assets/Process.png';
import { Box, Flex, SimpleGrid, Image, Button, Text } from '@chakra-ui/react';
import ProcessCard from '../Card/ProcessCard';
import Searching from '@/assets/SearchingProcess.svg';
import Plane from '@/assets/planeProcess.svg';
import VideoCall from '@/assets/VideoCallProcess.svg';
import AnchorRight from '@/assets/anchorRight.svg';

const DATA_PROCESS = [
  {
    icon: Searching,
    title: 'Searching',
    description: 'Find your dream puppy',
  },
  {
    icon: VideoCall,
    title: 'Video Call',
    description: 'Complete adoption  details and wait to have them your arms.',
  },
  {
    icon: Plane,
    title: 'Adoption',
    description:
      'Make a reservation for a video call to meet the puppy who might join your family',
  },
];

const Process = () => {
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
          <Text textTransform="uppercase">Process</Text>
          <Image src={FootDog} />
        </Box>
        <SimpleGrid columns={[1, 1, 1, 2]} mt="50px" gap="48px">
          <Flex justifyContent="center">
            <Image sizes="600px" src={ProcessImg} alt="process" />
          </Flex>
          <SimpleGrid gap="19px">
            {DATA_PROCESS.map((data, key: number) => (
              <ProcessCard
                key={key}
                description={data.description!}
                title={data.title}
                image={{
                  src: data.icon,
                }}
              />
            ))}
          </SimpleGrid>
        </SimpleGrid>
        <Button
          mt="45px"
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

export default Process;
