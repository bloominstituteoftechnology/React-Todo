import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css";

const todoCollection = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){

    super();

    this.state = {

      todo_collection: todoCollection

    };

  };

  addItem = itemName => {

    const newItem = {

      task: itemName,
      id: Date.now(),
      completed: false

    }

    this.setState({

      todo_collection: [...this.state.todo_collection, newItem]

    });

  };

  toggleItem = id => {
    console.log(id);

    this.setState({

      todo_collection: this.state.todo_collection.map(item => {

        if (item.id === id) {

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

  clearItems = (event) =>{

    event.preventDefault();

    this.setState({

      todo_collection: this.state.todo_collection.filter(item => !item.completed)
    
    })

  }

  render() {

    return (

      <div className='my-app'>
        <h2>Welcome to your Todo App!</h2>
       
        <TodoList todo_collection={this.state.todo_collection} toggleItem={this.toggleItem}/>
        <TodoForm addItem={this.addItem} clearItems={this.clearItems} todoCollection={todoCollection}/>
        
      </div>

    );

  };

};

export default App;