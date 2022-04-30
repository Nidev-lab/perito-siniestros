import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({ info, image }) => {
  return (
    <div className="card card-example">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <span className="card-text example-text">{info}</span>
        </div>
    </div>
  );
};

Card.propTypes = {
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
