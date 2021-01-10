// import React from './react';
import PropTypes from 'prop-types';
import s from './IconButton.module.css';

const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <button type="button" onClick={onClick} className={s.IconButton}>
      X
    </button>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
