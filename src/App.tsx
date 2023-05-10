import './index.css';
import { Navbar } from './components/section';
import Hero from './components/section/Hero';
import Adoption from './components/section/Adoption';
import Process from './components/section/Process';
import Feature from './components/section/Feature';
import Footer from './components/section/Footer';
import { Box, Image } from '@chakra-ui/react';
import Foot from '@/assets/foot2.svg';
import Foot3 from '@/assets/foot3.svg';
import RightCurve from '@/assets/rightCurve.svg';
import leftCurve from '@/assets/leftCurve.svg';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Box display="flex" justifyContent="center">
        <Box maxWidth={1440} position="relative">
          <Box position="absolute">
            <Image src={Foot} />
          </Box>
          <Box position="absolute" top={0} zIndex={-1} right={-300}>
            <Image src={RightCurve} />
          </Box>
          <Box position="absolute" bottom={200} zIndex={-1} left={-300}>
            <Image src={leftCurve} />
          </Box>
          <Box position="absolute" bottom={200} zIndex={-1} left={-300}>
            <Image src={leftCurve} />
          </Box>
          <Box position="absolute" bottom={300} zIndex={-1} right={-200}>
            <Image src={Foot3} />
          </Box>
          <Box>
            <Adoption />
            <Process />
            <Feature />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default App;
