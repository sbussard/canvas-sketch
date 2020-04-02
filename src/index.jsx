import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import '~/theme/base.scss';

import Canvas from '~/component/Canvas';

//app.use(express.static(__dirname + '/dist'));

render(<Canvas />, document.querySelector('.app'));
