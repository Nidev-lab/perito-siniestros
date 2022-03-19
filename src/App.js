import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ManageSinister } from './components/ManageSinister';
import { Home } from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/siniestro' element={<ManageSinister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
