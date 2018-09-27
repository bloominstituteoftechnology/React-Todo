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
    todos: [],
    newTodo: ""
  };

  handleChange = event => {
    this.setState({
      newTodo: event.target.value
    });    
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.state.todos.push({text: this.state.newTodo, completed: false});
    console.log(this.state.todos);
    
    this.setState({
      newTodo: ""
    });

    document.querySelector("#todo-input").value = "";
  };

  handleCompletion = event => {
    const index = event.target.id;
    
    this.state.todos[index].completed = true;
    event.target.classList.add("todo-completed");
  }

  handleRemoval = event => {
    event.preventDefault();
    
    const newArr = this.state.todos.filter(element => !element.completed);

    this.setState({
      todos: newArr
    });

    //fixing misplaced strikethroughs
    const wrongClass = document.querySelectorAll(".todo-completed");
    for (let i = 0; i < wrongClass.length; i++) {
      wrongClass[i].className = "";
    }
  }

  render() {
    return (
      <div className="to-do-form">
        <div className="title-container">
          <h5 className="title">To Do List</h5>
        </div>
        <div className="to-do-container">
          <TodoList todos={this.state.todos} function={this.handleCompletion} />
        </div>
        <TodoForm>
          <Input id="todo-input" onChange={this.handleChange} name="todo-input" placeholder="Enter New To-Do" className="input"/><br></br>
          <Button onClick={this.handleFormSubmit} text="Add To-Do" className="add-to-do-button"/>
          <Button text="Clear Completed" onClick={this.handleRemoval} className="clear-completed-button"/>
        </TodoForm>
      </div>
    );
  }
}

export default App;
