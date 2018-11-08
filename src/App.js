import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css'


const todoData = [
  { todoItem: 'Lambda homework', id: 0, finished: 'none'},
  { todoItem: 'laundry', id: 1, finished: 'none'},
  { todoItem: 'kids to park', id: 2, finished: 'none'},
  { todoItem: 'dinner with parents',  id: 3, finished: 'none'},
  { todoItem: 'rake leaves', id: 4, finished: 'none'}
];

let nextId = 4;

const getNewId = () => {
  nextId += 1;
  return nextId;
};



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      item: todoData,
      inputText: '',

    };
  }

handleChange = ev => {
  ev.preventDefault();
  this.setState({
      [ev.target.name]: ev.target.value
  });
  console.log(ev.target.name);
};

addLineThrough = id => {
  this.setState({

    /* have line-through set to off
    when item is clicked, have linethrough come one
    toggle back to no linethrough when it is clicked
    */
    item: this.state.item.map(item =>{
      if (item.id ===id) {
        return {...item,
          finished: item.finished === 'none' ? 'line-through' : 'none'};
      } else {
          return item;
      }
    })
  })
};



addItem = ev => {
  ev.preventDefault();

  this.setState({
    item: [
      ...this.state.item,
      { todoItem: this.state.inputText, id: getNewId(), finished: 'none' }
    ],
    inputText: ''
  });
  
};

clearCompleted = ev => {
  ev.preventDefault();
  this.setState({
    item: this.state.item.filter(item => item.finished=== 'none')
  })
}




  render() {
    return (
      <div>
        
        <TodoList 
        item={this.state.item}
        addLineThrough={this.addLineThrough}
        />
        <TodoForm 
        inputText={this.state.inputText}
        addItem={this.addItem}
        handleChange={this.handleChange}
        clearCompleted={this.clearCompleted}
        />
        </div>
    );
  }
}

export default App;
