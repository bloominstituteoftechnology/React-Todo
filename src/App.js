import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const clothes = [
  {
    task: 'Hat',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Hoodie',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      clothes
    };
  };

  toggleItem = itemId => {
    // console.log(itemId);
    this.setState({
      clothes: this.state.clothes.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      clothes: [...this.state.clothes, newItem]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      clothes: this.state.clothes.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Company Merch</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList
          clothes={this.state.clothes}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
