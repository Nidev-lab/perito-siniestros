import { Navbar } from '../../components/Navbar';
import { Contact } from '../../components/Contact';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { ManageSinister } from '../../components/ManageSinister';
import { FreeRepair } from '../../components/FreeRepair';

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <ManageSinister />
      <FreeRepair />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
