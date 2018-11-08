import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

const itemsData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Laundry',
    id: 1528817084121,
    completed: false
  }
]


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: itemsData,
      inputItem: '',
    };
  }


handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

addItem = event => {
  event.preventDefault();
  console.log(this.state.inputItem);
  this.setState({
    items: [
      ...this.state.items,
      { task: this.state.inputItem,
        id: Date.now(),
        complete: false
      }
    ],
    inputItem: ''
  });
};

completedItems = id => {
  this.setState({
    items: this.state.items.map( item => {
      if(item.id === id) {
        return {
          ...item,
          
        }
      } else {
        return item;
      }
    })
  });
};


  render() {
    return (
      <div>
        <h1>The Greatest Todo List</h1>
        <TodoList 
        itemsList={this.state.items}
        completedItems={this.completedItems}
        />
        <TodoForm 
        inputItem={this.state.inputItem} 
        handleChange={this.handleChange}
        addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;
