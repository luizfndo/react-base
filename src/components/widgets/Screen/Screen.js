import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Screen.css';


function Screen({ children, className }) {
  return (
    <div className={classNames('screen', className)}>
      {children}
    </div>
  );
}

Screen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
};

Screen.defaultProps = {
  className: undefined,
};

export default Screen;
