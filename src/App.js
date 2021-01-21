import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';
import './components/Todo.css'


const list = [{
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
},
{
  task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
},
{ 
  task: 'Finish Homework',
  id: 1528817085746,
  completed: false
},
];



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list
    }
  }
  
  //! This is to add item to the list
  addItem = itemName => {
    this.setState({
      list: [...this.state.list, { 
        task: itemName, 
        id: Date.now(), 
        completed: false }]
    })
  }

  clearPurchased = () => {
    this.setState({
      list: this.state.list.filter(item => {
        return !item.completed
      })
    })
  }

  //This is to trigger what is in child's component <Todo.js file></Todo.js>
  toggleCompleted = (itemId) => {
    console.log('props.item.id from <Todo.js>', itemId); //! This is where child is able to access from parent by consoleLogging ---> props.toggleCompleted(props.item.id); <------ this in return turn into console.log(itemID)

    const NewList = this.state.list.map(item => {
      if (itemId === item.id) {
        return ({
          ...item, completed: !item.completed
        })
      } else {
        return(item)
      }
    })
    
    this.setState({
      list:NewList
    })
  }
  //! This can be re-written to look like this
  //todo:  toggleCompleted = (itemId) => {
  //todo:      this.setState({
  //todo:        list: this.state.list.map((item) => 
  //todo:        item.id === itemId ? {...item, completed: !item.completed } : item )
  //todo:      })
  //todo:    }
  

  render() {
    return (
      <div>
        <h2>TO DO LIST BELOW!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList list={this.state.list} toggleCompleted ={this.toggleCompleted} clearPurchased={this.clearPurchased} />
      </div>
    );
  }
}

export default App;

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state