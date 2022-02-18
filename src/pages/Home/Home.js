import { Alert } from '../../components/Alert';
import { Contact } from '../../components/Contact';
import { Navbar } from '../../components/Navbar';
import { Carousel } from '../../components/Carousel';

const Home = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Carousel />
      <Alert />
    </>
  );
};

export default Home;
