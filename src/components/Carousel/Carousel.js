import React from 'react';
import carousel1 from '../../assets/img/carousel-1.png';
import carousel2 from '../../assets/img/carousel-2.png';
import carousel3 from '../../assets/img/carousel-3.png';

const Carousel = () => {
  return (
    <div>
      <div id="carousel-controls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="image" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-controls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel-controls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
