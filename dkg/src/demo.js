import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DKGDemo from "./dkgdemo.js";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DKGDemo/>, document.getElementById('demo'));
registerServiceWorker();
