import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todos = [{}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  handleAddItem = (name) => {
    this.setState({
      todos:[...this.state.todos, {
        name: name,
        id: this.state.todos.length,
        completed: false
      }]
    })
  }

  clearAllItems = () => {
    this.setState({
      todos: [{}]
    });
  }
  

  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem}/>
        </div>
        <div>
          <TodoList handleClearItems={this.clearAllItems} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
