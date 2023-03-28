import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/app.scss";
import {BrowserRouter} from 'react-router-dom'
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <ColorModeScript />
      {/* <ColorModeSwitcher /> */}
      <App />
    </BrowserRouter>
);

