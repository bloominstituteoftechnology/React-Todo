import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
        tasks: []
    };
  }

  toggleItem = items => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (items === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = itemTask => {
    const newItem = {
      task: itemTask,
      id: Date.now(),
      completed: false
    };

    this.setState({ tasks: [...this.state.tasks, newItem] });
  };

  render() {
    return (
      <div>
        <div>
        <TodoForm addItem={this.addItem}/>
        </div>
        <h3>Todo List</h3>
        <TodoList 
        tasks={this.state.tasks}
        toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}
export default App;