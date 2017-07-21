/*eslint no-unused-vars: "off"*/

// import React from 'react';
// import ReactDom from 'react-dom';
//
// require('!style-loader!css-loader!sass-loader!./index.scss');
//
// ReactDom.render(<div>Hello World!</div>, document.getElementById('root'));

/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import ToDoClass from './components/toDoList';

// require('!style-loader!css-loader!sass-loader!./index.scss');

// stateless component
const App = () => (
  <div>
    {/* Hello World! */}
    <ToDoClass myProp={ 'awesome props, yo!' }/>
  </div>
);

// ReactDom.render(<div>Hello World!</div>, document.getElementById('root'));
ReactDom.render(<App />, document.getElementById('root'));
