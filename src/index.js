//eslint no-unused-vars: "off"

import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

// You'll want to import the necessary components
//you want the App component to render
//use the ./ to tell it to look in the same directory

const tasks= [
  {
    text: 'test1',
    completed: false
  },
  {
    text: 'test2',
    completed: false
  },
  {
    text: 'test3',
    completed: true
  },
  {
    text: 'test4',
    completed: false
  },
  {
    text: 'test5',
    completed: true
  },
];

render(<App tasks ={tasks} />, document.getElementById('root'));
