//   addItem = event => {
//     event.preventDefault();
//     const temp = this.state.todo;
//     let tempTwo = this.state.count;
//     tempTwo += 1;
//     temp.push({id: tempTwo, entry: this.state.input})
//     this.setState({
//       todo: temp,
//       input: '',
//       count: tempTwo,
//     });
//   }

//   removeItem = id => {
//     const temp = this.state.todos;
//     temp.splice(id, 1);
//     this.setState({todo: temp});
//   }

import React from 'react';
import TodoList from './todolist';
import './app.css';
// import Todo from './components/Todo';

const App = () => (
  <div className = 'container'>
    <h1>JMB's Todo App</h1>
    <TodoList />
  </div>
);

export default App