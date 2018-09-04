import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      inputText: ''
    };
  }

  addTodo = (event) => {
    event.preventDefault();
    if(this.state.inputText) {
      this.setState({
        todo: [...this.state.todo, {task: this.state.inputText, id: Date.now(), completed: false}],
        inputText: ''
      })
    }
  }

  complete = (id) => {
    let newArray = [...this.state.todo];
    newArray = newArray.map(element => {
      if (element.id === id) {
        element.completed = !element.completed
      }
      return element;
    })
    this.setState({ todo: newArray });
  }

  //removes all todos from the list
  remove = (event) => {
    event.preventDefault();
    let newArr = [...this.state.todo];
    newArr = newArr.filter(element => element.completed === false);
    this.setState({ todo: newArr });
  }

  //holds text in the input field before the add todo onClick
  handleInput = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList todo4={this.state.todo} complete={this.complete} />
        <TodoForm
          addTodo={this.addTodo}
          remove={this.remove}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
