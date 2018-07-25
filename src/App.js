import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

let testArray = [{task:'Fish', id: Date.now(), completed: false},{task:'More Fish', id: Date.now() + 1, completed: false}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor (props) {
    super();
    this.state={todoList: testArray};
  }

  addToList = () => {
    const todoListCopy = this.state.todoList;
    
    todoListCopy.push({
      task: document.getElementById('todoInput').value , id: Date.now(), completed: false
    })

    this.setState({ todoList: todoListCopy });
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList array={this.state.todoList} />
        <TodoForm methods={this.addToList} />
      </div>
    );
  }
}

export default App;
