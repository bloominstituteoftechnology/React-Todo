import React from 'react';
// import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      task: '',
      todo: []
    };
  }

  //property
  addTodo = event => {
    event.preventDefault();
    this.setState({
      task: '',
      todo: [...this.state.todo, this.state.task],
      id: Date.now(),
      completed: false
    });
  };

  handleInput = event => {
    this.setState({
      task: event.target.value
    });
  };

  toggleCompleted = id => {
    let newTodo = [...this.state.newTodo];
    newTodo = newTodo.map(todo => {
      if (todo.id !== id) {
        return todo;
      } else {
        todo.completed = !todo.completed;
        return todo;
      }
    });
    console.log('new todos array', newTodo);
    this.setState({ newTodo });
  };

  render() {
    return (
      <div>
        <TodoList todo={this.state.todo} />
        <TodoForm
          addTodo={this.addTodo}
          task={this.state.task}
          id={this.state.id}
          completed={this.state.completed}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
