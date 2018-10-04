import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./app.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: Date.now(),
          completed: false
        },
      ],
      newTodo: "",
    };
  }

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.newTodo,
          id: Date.now(),
          completed: false
        }
      ],
      newTodo: ""
    });
  }

  textInputHandler = event => this.setState({ [event.target.name]: event.target.value });

  completedHandler = id => {
    this.setState({ 
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        } 
        else {
          return {
          ...todo,
          completed: todo.completed === true ? false : true
          };
        }
      }) 
    })
  }

  filterCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        if (todo.completed !== true) {
          return todo;
        }
        else {
          return null;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList 
        todos={this.state.todos}
        completedHandler={this.completedHandler}
        />

        <TodoForm 
        todos={this.state.todos}
        addNewTodo={this.addNewTodo}
        newTodo={this.state.newTodo}
        textInputHandler={this.textInputHandler}
        filterCompleted={this.filterCompleted}
        />
      </div>
    );
  }
}

export default App;
