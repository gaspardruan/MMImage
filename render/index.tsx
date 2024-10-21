import React from 'react';
import ReactDOM from 'react-dom/client';

import { OverlaysProvider } from '@blueprintjs/core';

import App from './app.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OverlaysProvider>
      <App />
    </OverlaysProvider>
  </React.StrictMode>,
);
