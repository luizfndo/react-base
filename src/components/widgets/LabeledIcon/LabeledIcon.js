import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '@widgets/Icon';

import './LabeledIcon.css';


const labelPositions = {
  TOP: 'top',
  LEFT: 'left',
  BOTTOM: 'bottom',
  RIGHT: 'right',
};

function LabeledIcon({
  label,
  icon,
  className,
  labelPosition,
}) {
  return (
    <div className={classNames('labeled-icon', className, labelPosition)}>
      <Icon src={icon} />
      <span className="label">{label}</span>
    </div>
  );
}

LabeledIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelPosition: PropTypes.oneOf(Object.values(labelPositions)),
};

LabeledIcon.defaultProps = {
  className: undefined,
  labelPosition: labelPositions.RIGHT,
};

export default LabeledIcon;
