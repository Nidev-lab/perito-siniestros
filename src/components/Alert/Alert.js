import React from 'react';
import './alert.css';
import PropTypes from 'prop-types';

const Alert = (props) => {
  const { msg, type } = props;

  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert" data-aos="zoom-in">
      {msg}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
