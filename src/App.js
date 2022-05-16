import AOS from 'aos';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { Home } from './pages/Home';
import ManageSinisterPage from './pages/ManageSinister/ManageSinisterPage';
import FreeRepair from './pages/FreeRepair/FreeRepairPage';
import BudgetPage from './pages/Budget/BudgetPage';
import './App.css';
import 'aos/dist/aos.css';

AOS.init();

const App = () => {
  const [timeOff, setTimeOff] = useState(true);

  useEffect(() => {
    setTimeout(() => { setTimeOff(false); }, 2270);
  }, []);

  return (
    <BrowserRouter>
      {
        timeOff
          ? <Loader />
          : (
            <>
              <Navbar />
                <Routes>
                  <Route path='/' element={ <Home /> } />
                  <Route path='/siniestro' element={ <ManageSinisterPage /> } />
                  <Route path='/reparar' element={ <FreeRepair /> } />
                  <Route path='/presupuesto' element={ <BudgetPage />} />
                </Routes>
              <Footer />
            </>
          )
      }
    </BrowserRouter>
  );
};

export default App;
