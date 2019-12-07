import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list
    };
  }

  toggleItem = itemId => {
    console.log(item.id);
    this.setState({
      items: this.state.items.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            finished: !item.finished
          };
        }
        return item;
      })
    });
  };

  addItem = itemText => {
    const newItem = {
      name: itemText,
      finished: false,
      id: Date.now
    };

    this.setState({
      groceries: [...this.state.items, newItem]
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Hutch's TODO List:</h2>
        <TodoForm addItem={this.item} />
        </div>
        <TodoList
        list={this.state.list}
        toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}
export default App;
