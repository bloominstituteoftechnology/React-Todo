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
        completed: false
      }
    ],
    inputItem: ''
  });
};

strikeThrough = id => {
  this.setState({
    items: this.state.items.map( item => {
      if(item.id === id) {
        return {
          ...item,
          completed: item.completed === false ? true : false 
        }
      } else {
        return item;
      }
    })
  });
};

clearStrikes = event => {
  event.preventDefault();
  this.setState({
    items: this.state.items.filter(
      item => item.completed === false
    )
    });
};


  render() {
    return (
      <div>
        <h1>The Greatest Todo List</h1>
        <TodoList 
        itemsList={this.state.items}
        strikeThrough={this.strikeThrough}
        />
        <TodoForm 
        clearStrikes={this.clearStrikes}
        inputItem={this.state.inputItem} 
        handleChange={this.handleChange}
        addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;
