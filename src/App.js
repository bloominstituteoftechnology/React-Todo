import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {

  state = {
    task: '',

   todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ],
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  onInputChange = (event )=> {
    this.setState({
      task: event.target.value
    })
  }
 
 addTodo = (event, todo) =>{
   event.preventDefault();
   const newTodo = {
     task: todo,
     completed: false,
     id: Date.now() * 100,
   }

   this.setState({
    todos: [ ...this.state.todos, newTodo],
    task: '',
   })}

 clearCompleted = e => {
     e.preventDefault();
     this.setState({
       todos: this.state.todos.filter(item => !item.completed)
     })
   }

  toggleItem = itemId => {
     this.setState({
       todos: this.state.todos.map( item =>{
         if(itemId === item.id){
           return {
             ...item,
             completed: !item.completed
           };
          }
          return item;
         })
       
     });
   }
 
 
  render() {
    console.log(this.state.task)
    return (
      <div>
        {/* {this.state.todos} */}
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        todos ={this.state.todos}
        toggle ={this.toggleItem}
               />
         <TodoForm className = 'form' addTodo = {(event) => this.addTodo(event,this.state.task)}onInputChange= {this.onInputChange}
                 clear ={this.clearCompleted}
                 />
      </div>
     );
  }
}

export default App;
