import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todoData = [
  {
    name: "Get Bananas",
    id: Math.round(Math.random() * 1000),
    completed: false
  },
  {
    name: "Pick Up Laundry",
    id: Math.round(Math.random() * 1000),
    completed: false
  },
  {
    name: "Pick up Son from Basketball Practice",
    id: Math.round(Math.random() * 1000),
    completed: false
  },
  {
    name: "Doctor's Appointment",
    id: Math.round(Math.random() * 1000),
    completed: false
  },
  {
    name: "Pick Up Daughter from Clarinet Practice",
    id: Math.round(Math.random() * 1000),
    completed: false
  },
  {
    name: "Cook Dinner",
    id: Math.round(Math.random() * 1000),
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
      todos: todoData,
      toggleCompleted: () => {},
      name: ""
    }
  }


  toggleCompleted = clickedTodoId => {
    this.setState({
      todos: this.state.todos.map(todos => {
        if(todos.id === clickedTodoId) {
          return {
            ...todos,
            completed: !todos.completed
          };
        } else {
          return todos;
        }
      })
    })
  }



  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: Math.round(Math.random() * 1000),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: []
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList 
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
