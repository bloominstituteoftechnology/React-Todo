import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const App = () => (
  <div className='app'>
  <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
    <div className='purpleRain'>
    
    <h2>{'Todo List'}</h2>
  <TodoList />
  </div>
  </ReactCSSTransitionGroup>
  </div>
);

export default App;
