import React from 'react';
import './alert.css';
import PropTypes from 'prop-types';

const Alert = (props) => {
  const { msg, type } = props;

  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} data-aos="zoom-in">
      {msg}
    </div>
  );
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
