import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  FocusStyleManager,
  HotkeysProvider,
  OverlaysProvider,
} from '@blueprintjs/core';

import App from './app.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OverlaysProvider>
      <HotkeysProvider>
        <App />
      </HotkeysProvider>
    </OverlaysProvider>
  </React.StrictMode>,
);

postMessage({ payload: 'removeLoading' }, '*');
FocusStyleManager.onlyShowFocusOnTabs();
