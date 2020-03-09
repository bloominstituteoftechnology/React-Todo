import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const chores = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  

  constructor() {
    super();
    this.state = {
      chores,
      name: ''
    };
  }

  toggleCompleted = clickedItemId => {

    this.setState({
      chores: this.state.chores.map(item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        } 
      })
    });

  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      chores: [...this.state.chores, newItem]
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>Welcome to your Todo App!</h1>
        </div>
        <h2>To Do List: MVP</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList 
          chores={this.state.chores}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
