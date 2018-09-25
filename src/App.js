import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();

    this.state = {
      todos: [
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
      ]
    }
  }
  addToDoItemHandler = (element) => {
    // prevent the page from being refreshed
    element.preventDefault();
    // get the input value of the sibling input tag
    const inputValue = element.target.previousSibling.value;
    // get the current time for the unique id
    const id = Date.now();

    // return 'pushToDotoState' function for cleaner code
    return this.pushToDotoState(inputValue, id);
  }

  pushToDotoState = (value, id) => {
    // create a new to do object
    const todo = {
      task: `${value}`,
      id: id,
      completed: false
    }

    // add the new object to the state
    const todos = this.state.todos;
    todos.push(todo);

    // set the state of todos with the new to do item in the array
    this.setState({
      todos
    })
  }

  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="todo-container">
        <h1>Todo List: MVP </h1>
      <TodoList list={this.state.todos} submit={this.addToDoItemHandler} />
      </div>
    );
  }
}

export default App;
