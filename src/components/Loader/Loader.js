import logo from './logo.png';
import logoDesc from './logo-desc.png';
import './loader.css';

function Loader() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center'>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center'>
              <img src={logoDesc} className="App-logoDesc" alt="logo" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Loader;
