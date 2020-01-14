import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

let toDoList = [
  {
    id: Date.now(),
    todoitem : 'Write up diary',
    isDone : false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();

    this.state = {
      toDoList: toDoList
    }
  }

  toggleItem = id => {
    const newTodoList = this.state.toDoList.map(item => {
      if (item.id === id){
        return {
          ...item,
          isDone: !item.isDone
        }
        } else {
          return item;
        }
    })
    this.setState({
      toDoList: newTodoList
    })
  }

  addItem = itemName => {
    const newItem = {
      id: Date.now(),
      todoitem: itemName,
      isDone: false
    }

    this.setState({
      toDoList: [...this.state.toDoList, newItem]
    });
  }

  clearCompleted = () => {
    const newTodoList = this.state.toDoList.filter(item => {
      if (item.isDone === false) {
        return item;
      }
    })

    this.setState({
      toDoList: newTodoList
    })
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todo={this.state.toDoList} toggleItem={this.toggleItem} />
        <TodoForm addItem={this.addItem} />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
