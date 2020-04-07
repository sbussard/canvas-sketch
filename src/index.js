import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'state';
import Canvas from 'component/Canvas';
import 'theme/base.scss';

render(
  <Provider>
    <Canvas />
  </Provider>,
  document.querySelector('.app')
);
