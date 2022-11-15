import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppStateProvider } from 'src/state';
import Canvas from 'src/component/Canvas';
import SVGDefinitions from 'src/component/Note/svg-definitions';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppStateProvider>
      <Canvas />
      <SVGDefinitions />
    </AppStateProvider>
  </React.StrictMode>
);
