import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      inputValue: "...todo",
      inputEdit: false
    };
  }


  focusHandler = (event) => {
    if (this.state.inputEdit === false) {
      this.setState({inputValue: ""});
    }
  };

  blurHandler = (event) => {
    if (this.state.inputEdit === false) {
      this.setState({inputValue: "...todo"});
    }
  };

  inputHandler = (event) => {
      if (event.target.value !== "") {
        this.setState(
          {inputValue: event.target.value,
            inputEdit: true
        });
      } else {
        this.setState({
          inputValue: "",
          inputEdit: false
        });
      }
  };

  addHandler = (event) => {
    console.log("Add todo");
  };

  taskHandler = (event, todo) => {
    todo.completed = !todo.completed;
    this.setState({todoList: this.state.todoList});
  };

  clearHandler = (event) => {
    console.log("Clear completed todos");
  };


  render() {
    return (
      <div className="container">
        <h1>Mini-Todo!</h1>
        <div className="list-container">
          <TodoList controller={this} todoList={this.state.todoList} />
        </div>
        <TodoForm controller={this} />
        <div className="help">
          <p>
            Type into the text field and then click 'Add Todo'<br />
            Click on tasks in your list to toggle their status<br />
            Click 'Clear Completed' to remove completed todos
          </p>
        </div>
      </div>
    );
  }
}

export default App;
