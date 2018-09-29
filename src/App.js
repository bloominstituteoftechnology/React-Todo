import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],              // list of Todo objects
      inputValue: "...todo",     // value of text input field
      inputEdit: false           // has the user entered text?
    };
  }

  // when the text input field gains focus, blank out
  // the 'prompt' text if nothing has been entered yet
  focusHandler = (event) => {
    if (this.state.inputEdit === false) {
      this.setState({inputValue: ""});
    }
  };


  // when the text input field loses focus, reset the
  // 'prompt' text if nothing has been entered yet
  blurHandler = (event) => {
    if (this.state.inputEdit === false) {
      this.setState({inputValue: "...todo"});
    }
  };


  // if text is entered, update the value and set edit state
  // to true; if all text is backed out, set edit state to false
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


  // if a Todo task is clicked on, change its completion
  // status and then update the Todo list
  taskHandler = (event, todo) => {
    const stateSwitcher = (item) => {
      if (item === todo) {
        item.completed = !item.completed;
      }
      return item;
    };

    const newTodoList = Array.from(this.state.todoList, stateSwitcher);
    this.setState({todoList: newTodoList});
  };


  // if the 'add Todo' button is clicked, and text has been
  // entered, then create a new Todo, add it to updated TodoList,
  // and reset the input text field and edit state
  addHandler = (event) => {
      if (this.state.inputEdit === false) return;

      const newTodo = 
        {task: this.state.inputValue,
          id: Date.now(),
          completed: false
        };

      const newTodoList = Array.from(this.state.todoList);
      newTodoList.push(newTodo);

      this.setState(
        {todoList: newTodoList,
         inputValue: "...todo",
         inputEdit: false
        });
  };


  // if 'clear' button is clicked, filter out
  // completed Todo objects from the TodoList
  clearHandler = (event) => {
    const newTodoList = this.state.todoList.filter(todo => !todo.completed);
    this.setState({todoList: newTodoList});
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
