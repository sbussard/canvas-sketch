import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import '~/theme/base.scss';

import Canvas from '~/component/Canvas';

render(<Canvas />, document.querySelector('.app'));
