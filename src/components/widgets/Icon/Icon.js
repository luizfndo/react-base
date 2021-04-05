import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';

import './Icon.css';


function Icon({
  src,
  img,
  alt,
  className,
}) {
  return (
    <span className={classNames('icon', className)}>
      { img ? <img src={src} alt={alt} /> : <SVG src={src} />}
    </span>
  );
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  img: PropTypes.bool,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  img: false,
  alt: '',
  className: undefined,
};

export default Icon;
