import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

import {  BrowserRouter as Router } from 'react-router-dom';
//const container = document.getElementById('root');
//const root = createRoot(container);
const root = ReactDOM.createRoot(document.getElementById('root'));
//

root.render(
   //root.render(<App />);
  <React.StrictMode>
     <Router>
        <App/>
     </Router>
  </React.StrictMode>
);

 