import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      inputText: '',
      todo: [],
      completed: false
    }
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
    this.setState({
      todo: [...this.state.todo, this.state.inputText],
      inputText: ''
    });
  }
  };
  
  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  complete = event => {
    event.preventDefault();
    this.setState({
      completed: !this.state.completed
    });
  }

  clear = event => {
    event.preventDefault();
    const completedArray = this.state.todo.filter(item=>{
      item.completed != false
    })
    this.setState({
      completedArray
    });
  }
  render() {
    return (
      <div>
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
          clearCompleted={this.clear}
          />
        <TodoList todo={this.state.todo}
                  isCompleted={this.complete} 
                  />
      </div>
    );
  }
}

export default App;
