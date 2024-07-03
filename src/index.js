import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './mycomponent';
import './styles/tailwind.css'; // Path to your tailwind.css file
import './index.css'; // Optional: Import your CSS styles here

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
