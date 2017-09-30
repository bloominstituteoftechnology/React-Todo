/*eslint no-unused-vars: "off"*/
import React from 'react';
import { render } from 'react-dom';
import ToDoList from './ToDoList'
// You'll want to import the necessary components you want the App component to render

const App = () => (
   // {/* Replace this div with whatever components you want the App root component to render */}
   <div>
   Hello World!
   <h2> A list of tasks!</h2>
   <ToDoList/>
   </div> 
);

render(<App />, document.getElementById('root'));
