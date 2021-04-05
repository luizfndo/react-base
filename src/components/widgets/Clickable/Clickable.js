import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Icon from '@widgets/Icon';
import LabeledIcon from '@widgets/LabeledIcon';
import ExternalLink from '@widgets/ExternalLink';

import './Clickable.css';


function Clickable({
  icon,
  label,
  to,
  external,
  newTab,
  onClick,
  beforeOnClick,
  labelPosition,
  className,
}) {
  const Content = () => {
    if (icon && label) {
      return <LabeledIcon icon={icon} label={label} labelPosition={labelPosition} />;
    }

    if (icon) return <Icon src={icon} />;
    return label || 'My clickable';
  };

  const handleOnClick = (e) => {
    if (beforeOnClick && typeof beforeOnClick === 'function') beforeOnClick(e);
    if (onClick && typeof onClick === 'function') onClick(e);
  };

  const classList = classNames('clickable', className);

  const ActionComponent = () => {
    if (to && external) {
      return (
        <ExternalLink to={to} newTab={newTab} onClick={handleOnClick} className={classList}>
          <Content />
        </ExternalLink>
      );
    }
    if (to) {
      return (
        <Link to={to} onClick={handleOnClick} className={classList}>
          <Content />
        </Link>
      );
    }
    return (
      <button type="button" onClick={handleOnClick} className={classList}>
        <Content />
      </button>
    );
  };

  return <ActionComponent />;
}

Clickable.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string,
  external: PropTypes.bool,
  newTab: PropTypes.bool,
  onClick: PropTypes.func,
  beforeOnClick: PropTypes.func,
  labelPosition: PropTypes.string,
  className: PropTypes.string,
};

Clickable.defaultProps = {
  icon: undefined,
  label: undefined,
  to: undefined,
  external: false,
  newTab: false,
  onClick: undefined,
  beforeOnClick: undefined,
  labelPosition: undefined,
  className: undefined,
};

export default Clickable;
