/*eslint no-unused-vars: "off"*/
import React from 'react';
import { render } from 'react-dom';
import ClassComponentToDo from './ClassComponentToDo';
//import Rtable from './ReactTable';
// You'll want to import the necessary components you want the App component to render

const App = () => (
  <div>
    <br />
    <br />
    <ClassComponentToDo />
    {/*<h2>Start editing to see some magic happen hello are we live?{'\u2728'}</h2>*/}
  </div>
); 

render(<App />, document.getElementById('root'));
