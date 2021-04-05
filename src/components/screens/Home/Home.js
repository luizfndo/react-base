import React from 'react';
import { Helmet } from "react-helmet";
import AppShell from '@fragments/AppShell';

import './Home.css';


function HomeScreen() {
  return (
    <>
      <Helmet>
        <title>React Base Project</title>
      </Helmet>
      <AppShell>
          React Base Project
      </AppShell>
    </>
  );
}

export default HomeScreen;
