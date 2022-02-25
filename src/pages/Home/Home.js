import { Navbar } from '../../components/Navbar';
import { Carousel } from '../../components/Carousel';
import { ManageSinister } from '../../components/ManageSinister';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <ManageSinister />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
