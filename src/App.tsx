import './index.css';
import { Navbar } from './components/section';
import Hero from './components/section/Hero';
import Adoption from './components/section/Adoption';
import Process from './components/section/Process';
import Feature from './components/section/Feature';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Adoption />
      <Process />
      <Feature />
    </>
  );
}

export default App;
