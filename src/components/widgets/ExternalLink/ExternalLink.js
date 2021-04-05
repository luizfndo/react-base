import React from 'react';
import PropTypes from 'prop-types';


function ExternalLink({
  to,
  alt,
  children,
  target,
  onClick,
}) {
  return (
    <a
      href={to}
      alt={alt}
      target={target}
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
  onClick: PropTypes.func,
};

ExternalLink.defaultProps = {
  alt: '',
  target: '_blank',
  onClick: () => {},
};

export default ExternalLink;
