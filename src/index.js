/*eslint no-unused-vars: "off"*/
import React from 'react';
import { render } from 'react-dom';
import InputButton from './App';
// You'll want to import the necessary components you want the App component to render

const App = () => (
   <div>
       <InputButton />
   </div> 
);

render(<App />, document.getElementById('root'));
