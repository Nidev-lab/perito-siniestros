import AOS from 'aos';
import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
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
    <HashRouter>
      <Helmet>
        <title>El Genio del Siniestro</title>
        <meta
          name="description"
          content="Profesionales destacados en el peritaje de siniestros y accidentes"
        />
        <meta
          name="keywords"
          content="Seguridad Vial, Vía, tránsito, ruta, accidentologia, peritaje, conflicto, relevamiento, accidente, siniestro, vehiculo, Seguridad, asistencia, rodados, legalidad, ley, reglamentación, camino, educación vial, señales, vial"
        />
      </Helmet>
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
    </HashRouter>
  );
};

export default App;
