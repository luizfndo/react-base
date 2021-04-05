import React from 'react';
import PropTypes from 'prop-types';
import Clickable from '@widgets/Clickable';

import './MenuItem.css';


function MenuItem({
  icon,
  label,
  to,
  external,
  newTab,
  onClick,
  beforeOnClick,
  labelPosition,
}) {
  const handleOnClick = (e) => {
    if (beforeOnClick && typeof beforeOnClick === 'function') beforeOnClick(e);
    if (onClick && typeof onClick === 'function') onClick(e);
  };

  return (
    <div className="menu-item">
      <Clickable
        icon={icon}
        label={label}
        to={to}
        external={external}
        newTab={newTab}
        labelPosition={labelPosition}
        onClick={handleOnClick}
      />
    </div>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string,
  external: PropTypes.bool,
  newTab: PropTypes.bool,
  onClick: PropTypes.func,
  beforeOnClick: PropTypes.func,
  labelPosition: PropTypes.string,
};

MenuItem.defaultProps = {
  icon: undefined,
  label: undefined,
  to: undefined,
  external: false,
  newTab: false,
  onClick: undefined,
  beforeOnClick: undefined,
  labelPosition: undefined,
};

export default MenuItem;
