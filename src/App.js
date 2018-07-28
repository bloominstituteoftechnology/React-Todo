import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
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
      ],
      input: ''
    }
    const inputHandler = e => this.setState({ input: e.target.value })
    const addItem = e => {
      e.preventDefault();
      const list = this.state.list.slice();
      list.push({ task: this.state.input, completed: false, id: Date.now() });
      this.setState({ list, input: ' '});
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} />
        <TodoForm onClick={this.state.inputHandler} onClick={this.state.addItem}/>
      </div>
    );
  }
}

export default App;
