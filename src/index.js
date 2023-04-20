import React from 'react';
import ReactDOM from 'react-dom/client';
import ToggleTheme from './components/ToggleTheme';
import './globalStyles.css';
import { BrowserRouter as Router} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ToggleTheme/>
  </Router>
);

