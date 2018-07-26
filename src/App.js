import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      list: [
        {
          task: 'Organize Garage',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: Date.now(),
          completed: false
        }
      ],
      task: ''
    };
  }

  handleTaskChange = e => {
    this.setState({ task: e.target.value});
  }

  handleAddTodoSubmit = e => {
    e.preventDefault();
    const list = this.state.list.slice();
    list.push({ task: this.state.task, id: Date.now(), completed: false });
    this.setState({ list: list });
  }

  
  render() {
    return (
      <div className='App'>
        <h2>TASK LIST</h2>
        <TodoList list={this.state.list} />
        <TodoForm 
          handleAddTodo={this.handleAddTodoSubmit}
          handleTask={this.handleTaskChange}
        />
      </div>
      
    );
  }
}

export default App;
