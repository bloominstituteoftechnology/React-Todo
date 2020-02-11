import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your 
  constructor(){
    super();
     this.state = {
       todoList: [{
        task: 'default Task',
        id: 1,
        done: false
      },
      {
        task: 'default Task 2',
        id: 124,
        done: false
      },
      ]
     }
  }
  
  
  //adds a new object to todoList array
  addNewTodo = param => {
    const newTodo = {
      task: param,
      id: Date.now(),
      done: false
    };

    this.setState({
      todoList: [...this.state.todoList, newTodo],
    });
  }

  //removes tasks that have toggled to completed
  removeCompletedTodo = () => {   
   const notCompleted = this.state.todoList.filter(item => !item.done )
    // console.log('overhere',notCompleted)   
   this.setState({
     todoList: notCompleted,
   })
  }

   //method allows user to toggle list items to True/False
   toggleTodo = paramId =>{
    //  console.log('id is', paramId);
     const toggledTodo = this.state.todoList.map(item => item.id === paramId ? {...item, done: !item.done} : item );
     this.setState({
       todoList: toggledTodo,
     })
   }

  render() {
    return (      
      <div>
        <header>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm 
            addNewTodo={ this.addNewTodo }
          />
        </header>

        <TodoList 
          currentList={ this.state.todoList }
          toggleTodo={ this.toggleTodo } 
          removeCompletedTodo={ this.removeCompletedTodo }
          />
      </div>
    );
  }
}

export default App;
