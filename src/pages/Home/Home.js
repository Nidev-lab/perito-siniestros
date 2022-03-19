import { Navbar } from '../../components/Navbar';
import { Carousel } from '../../components/Carousel';
import { FreeRepair } from '../../components/FreeRepair';
import { Footer } from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
        <Carousel />
        <FreeRepair />
      <Footer />
    </>
  );
};

export default Home;
