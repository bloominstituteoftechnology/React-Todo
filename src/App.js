import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
const tasks = [
  {
      name: "Free the Divine Beasts",
      id: 1234,
      completed: false
  },{
      name: "Break pots",
      id: 12345,
      completed: false
  },
  {
      name: "Search for Korok seeds",
      id: 123456,
      completed: false
  },
  {
      name: "Annialate Ganon",
      id: 1234567,
      completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
    constructor() {
        super();
        this.state = {
            todoList: tasks
    };
}
toggleItem = id => {
    const newTodoList = this.state.todoList.map(item => {
        if (item.id === id) {
            return {
                ...item,
                completed: !item.completed
            };
        } else {
            return item;
        }
    });
    this.setState({
        todoList: newTodoList
    });
};
addTask = taskName => {
    const newTask = {
        name: taskName,
        id: Date.now(),
        completed: false
    };
    this.setState({
        todoList: [...this.state.groceryList, newTask]
    });
};
render() {
    console.log('rendering...');

    return (
        <div className = "App">
            <div className = "Header">
                <h1>Todo List</h1>
                <TodoForm addTask = {this.addTask} />
            </div>
            <TodoList
                tasks = {this.state.todoList}
                toggleItem = {this.toggleItem}
            />
        </div>
    );
}
}

export default App;
