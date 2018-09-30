import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
     super();
     this.state = {
        todos: [ ]
        
     }
  }
  
  addTodo = (event) => {
  	  // console.log(event);
      if(event.key === 'Enter' && event.target.value !== '') {
  	 this.setState({
  	 	  todos: [...this.state.todos, {task: event.target.value, id: Date.now(), completed: false }]
  	 }); 
  	 
  	 event.target.value = '';
    }
  }

  buttonClick = (event) => {
      if(event.currentTarget.previousElementSibling.value !== '') {
  	 this.setState({
  	 	  todos: [...this.state.todos, {task: event.currentTarget.parentNode.firstChild.value,  id: Date.now(), completed: false }]
  	 }); 
  	 // console.log(event.tare
  	 event.currentTarget.previousElementSibling.value = '';

    }
  }

  clickTodoList = (event) => {
    let target = event.target;
     if(target.classList.contains('items')) {
          console.log(target.innerText);
    }
  }


 toggleClick = (todoId) => {
     this.setState(
        {
          todos: this.state.todos.map(item => {
             if(item.id === todoId) {
                 return {
                    task:item.task,
                    id: item.id,
                    completed: !item.completed
                 }
             } else {
                return item;
             }
          })
        }        
    );
 }

 destroyTodo = () => {
   this.setState({
      todos: this.state.todos.filter( todo => todo.completed === !true)
   });
 }
  render() {
    return (
      <div className='todoContainer'>
       <h1>Todo List: MVP</h1>
       <TodoList className='TodoList' todos={this.state.todos} toggleClick={this.toggleClick} />
       
       <TodoForm  todos={this.state.todos} evenClick={this.addTodo} bClick={this.buttonClick} 
                  toggleClick={this.toggleClick} destroyTodo={this.destroyTodo}/>
      </div>
    );
  }
}

export default App;
