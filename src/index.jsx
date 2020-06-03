import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import App from './component/App';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Footer from './component/Footer';

render(<App />, document.querySelector('.mainapp'));
//render(<NavBar />, document.querySelector(".navbar"));
render(<Header />, document.querySelector('.header'));
render(<Footer />, document.querySelector('.footer'));
