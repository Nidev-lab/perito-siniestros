import { Navbar } from '../../components/Navbar';
import { Contact } from '../../components/Contact';
import { Carousel } from '../../components/Carousel';
import { Budget } from '../../components/Budget';
import { Footer } from '../../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Budget />
      <Contact />
      <Alert />
      <Footer />
    </>
  );
};

export default Home;