import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



const todo = [
  {
    name: "Go to store",
    id: 1234,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todo: todo
    }
  }

addItem = itemName => {
  const newItem = {
    name: itemName,
    id: new Date(),
    completed: false 
  };
  this.setState({
    todo: [...this.state.todo, newItem]
  })
}

toggleItem = itemId => {
  this.setState({
    todo: this.state.todo.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    })
  })
}

  render() {
    return (
      <div>
        <h2>Todo App - MVP</h2>
        <TodoList 
          todo={this.state.todo}
          toggleItem={this.toggleItem}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
