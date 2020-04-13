import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import '~/theme/base.scss';

import '~/scss/tailwind.css';

import Canvas from '~/component/Canvas';

import NavBar from '~/component/NavBar';

//render(<NavBar><Canvas /></NavBar>, document.querySelector('.app'));

render(<Canvas />, document.querySelector('.app'));
