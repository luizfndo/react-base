import React from 'react';
import PropTypes from 'prop-types';


function AppShell({ children }) {
  return (
    <div className="app-shell">
      <>{children}</>
    </div>
  );
}

AppShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppShell;
