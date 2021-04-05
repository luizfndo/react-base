import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { motion } from "framer-motion"
import Clickable from '@widgets/Clickable';
import closeIcon from './svg/close.svg';

import './SideNav.css';

const asideVariants = {
  collapsed: {
    opacity: 0,
    transition: { delay: 0.15 },
    transitionEnd: { display: 'none' },
  },
  expanded: {
    display: 'grid',
    opacity: 1,
    transition: { delayChildren: 0.15 }
  }
};

const navVariants = {
  collapsed: { x: '-100%' },
  expanded: { x: '0%' },
};

function SideNav({
  children,
  className,
  position,
  onCloseButtonClick,
  onOverlayClick,
  beforeItemOnClick,
}) {
  return (
    <motion.aside
      initial="collapsed"
      animate={position}
      variants={asideVariants}
      className={classNames('sidenav', className)}
    >
      <motion.nav variants={navVariants}>
        <section className="header">
          <Clickable
            label="Fechar"
            icon={closeIcon}
            className="close-nav"
            onClick={onCloseButtonClick}
            labelPosition="left"
          />
        </section>
        <div>
          {
            beforeItemOnClick && typeof beforeItemOnClick === 'function'
              ? React.Children.map(
                children,
                (child) => React.cloneElement(child, { beforeOnClick: beforeItemOnClick }),
              )
              : children
          }
        </div>
      </motion.nav>
      <a href="#" className="nav-escape-btn" aria-hidden="true" tabIndex="-1"></a>
    </motion.aside>
  );
}

SideNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  position: PropTypes.string,
  onCloseButtonClick: PropTypes.func,
  onOverlayClick: PropTypes.func,
  beforeItemOnClick: PropTypes.func,
};

SideNav.defaultProps = {
  className: '',
  position: 'collapsed',
  onCloseButtonClick: () => {},
  onOverlayClick: () => {},
  beforeItemOnClick: undefined,
};

export default SideNav;
