import { Alert } from '../../components/Alert';
import { Contact } from '../../components/Contact';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Carousel } from '../../components/Carousel';



const Home = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Carousel />
      <Footer />
      <Alert />
      </>
  );
};

export default Home;
