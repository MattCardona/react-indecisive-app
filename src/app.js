import React from 'react';
import ReactDOM from 'react-dom';

import {IndecisionApp} from './components/IndecisionApp.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const app = document.getElementById('app');

ReactDOM.render(<IndecisionApp/>, app);