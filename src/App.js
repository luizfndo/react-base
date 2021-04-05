import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from '@screens/Home';
import NotFoundScreen from '@screens/NotFound';
import { SiteContext } from '@contexts';

import './App.css';


function App() {
  const [sideNavState, setSideNavState] = useState('collapsed');

  const siteContext = {
    sideNavState,
    sideNavToggle: () => setSideNavState(sideNavState === 'expanded' ? 'collapsed' : 'expanded')
  };

  return (
    <SiteContext.Provider value={siteContext}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </BrowserRouter>
    </SiteContext.Provider>
  );
}

export default App;
