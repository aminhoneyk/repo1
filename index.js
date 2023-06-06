import React from 'react';
import ReactDOM from 'react-dom/client';
import Main_component from './App';
import {Second} from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Second/>
    {/* <Main_component /> */}
  </React.StrictMode>
);

