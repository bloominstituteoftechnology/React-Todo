import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Button from './components/FormComponents/Button';
import Input from './components/FormComponents/Input';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: [
      {
        text: "test todo"
      },
      {
        text: "more todo"
      },
      {
        text: "another todo"
      }
    ],
    newTodo: ""
  };

  handleChange = event => {
    this.setState({
      newTodo: event.target.value
    });    
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.state.todos.push({text: this.state.newTodo});
    console.log(this.state.todos);
    
    this.setState({
      newTodo: ""
    });

    document.querySelector("#todo-input").value = "";
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm>
          <Input id="todo-input" onChange={this.handleChange} name="todo-input" placeholder="Enter New To-do" />
          <Button onClick={this.handleFormSubmit} text="Add To-do" />
          <Button text="Clear Completed" />
        </TodoForm>
      </div>
    );
  }
}

export default App;
