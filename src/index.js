/*eslint no-unused-vars: "off"*/
import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ClassComponentExample from './ClassComponentExample';
import ToDoList from './ToDoList';
// App is itself nothing more than a functional component that renders some children components
const App = () => (
  <div>
    <h2>A list of tasks!</h2>
    <ToDoList/>
  </div>
);
// This `render` method is different from the `render` we saw in the ClassComponentExample
// This `render` does the work of mounting our root App component to the DOM by targeting 
// the 'root' div in our index.html file
render(<App />, document.getElementById('root'));
