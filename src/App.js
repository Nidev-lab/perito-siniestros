import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import ManageSinisterPage from './pages/ManageSinister/ManageSinisterPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/inicio' element={ <Home /> } />
        <Route path='/siniestro' element={ <ManageSinisterPage /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
