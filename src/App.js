import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ManageSinister } from './components/ManageSinister';
import { Budget } from './components/Budget';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path='/siniestro' element = {<ManageSinister />} />
        <Route path='/presupuesto' element = {<Budget />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
