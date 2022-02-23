import { Navbar } from '../../components/Navbar';
import { Contact } from '../../components/Contact';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { ManageSinister } from '../../components/ManageSinister';

const Home = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Carousel />
      <Footer />
      <ManageSinister />
    </>
  );
};

export default Home;
