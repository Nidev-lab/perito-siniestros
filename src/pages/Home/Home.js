import { Alert } from '../../components/Alert';
import { Contact } from '../../components/Contact';
import { Navbar } from '../../components/Navbar';
import { Carousel } from '../../components/Carousel';
import { Budget } from '../../components/Budget';

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Budget />
      <Contact />
      <Alert />
    </>
  );
};

export default Home;
