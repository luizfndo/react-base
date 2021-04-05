import React from 'react';
import { Helmet } from "react-helmet";
import AppShell from '@fragments/AppShell';

function NotFoundScreen() {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <AppShell>
        Oops, nothing here!
      </AppShell>
    </>
  );
}

export default NotFoundScreen;
