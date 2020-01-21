import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from './components/TodoComponents/TodoForm.js'
import './components/TodoComponents/Todo.css'

const todos = [
  {
    task: 'Organize Garage',
    id: 123,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todos
    };
  }

  addNewItem = newTask => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { task: newTask, id: Date.now(), completed: false }
      ]
    };
    this.setState(newState);
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  toggleCompleted = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    }
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(todo => {
        return !todo.completed;
      })
    };
    this.setState(newState);
  };
  
  render() {
    return (
      <div>
        <h2>Todo List</h2>
          {/* render list */}
        <TodoForm addNewItem={this.addNewItem}/>
        <TodoList
          todos={this.state.todoList}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div> 
    );
  }
}

export default App;
