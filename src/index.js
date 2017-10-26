/*eslint no-unused-vars: "off"*/
import React from 'react';
import { render } from 'react-dom';
import ToDo from './ToDo';

// You'll want to import the necessary components you want the App component to render

const App = () => (
  <ToDo />
);

render(<App />, document.getElementById('root'));
