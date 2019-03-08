import React from "react";
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./styles.css";

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
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
      todo,
      task: "",
      id: Date.now()
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addItemhandler = event => {
    event.preventDefault();

    this.setState(prevState => {
      return {
        todo: [
          ...prevState.todo,
          {
            completed: false,
            id: Date.now(),
            task: prevState.task
          }
        ],
        task: ""
      };
    });
  };

  toggleToDo = itemId => {
    this.setState(prevState => {
      return {
        todo: prevState.todo.map(todoItem => {
          if (todoItem.id === itemId) {
            return {
              task: todoItem.task,
              id: todoItem.id,
              completed: !todoItem.completed
            };
          } else {
            return todoItem;
          }
        })
      };
    });
  };

  clearCompleted = () => {
    this.setState(prevState => {
      return {
        todo: prevState.todo.filter(todoItem => {
          return !todoItem.completed;
        })
      };
    });
  };

  render() {
    return (
      <div className="toDoContainer">
        <h2 className="Title"> Git'er Done List </h2>
        <TodoForm
          clearCompeted={this.clearCompleted}
          addTodo={this.addItemhandler}
          newTask={this.inputHandler}
          inputHandler={this.inputHandler}
        />
        <div>
          {this.state.todo.map(newList => (
            <TodoList newList={newList} toggleItem={this.toggleToDo} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
