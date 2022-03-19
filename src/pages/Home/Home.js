import { Navbar } from '../../components/Navbar';
import { Carousel } from '../../components/Carousel';
import { FreeRepair } from '../../components/FreeRepair';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <FreeRepair />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
