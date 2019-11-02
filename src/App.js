import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: []
    };
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone(itemId) {
    console.log("toggleDone: ", itemId);
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            done: !item.done
          };
        }
        return item;
      })
    });
  }

  clearDone = () => {
    console.log("clearDone");
    this.setState({
      todo: this.state.todo.filter(item => {
        return !item.done;
      })
    });
  }

  addItem = itemName => {
    console.log("add item: ", itemName);
    this.setState({
      todo: [
        ...this.state.todo,
        {
          name: itemName,
          id: Date.now(),
          done: false
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todo={this.state.todo}
          toggleDone={this.toggleDone}
          clearDone={this.clearDone}
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;
