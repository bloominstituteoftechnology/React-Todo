import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from './components/TodoComponents/TodoList';

 const todos = [
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
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todolist:todos,
      todo:''

    

    
    

    }

  }
  changeTodo = (e) =>{
    console.log(e.target.value)
   this.setState({
     [e.target.name]: e.target.value
   });
   
 }
 addTodo = (e) => {
   e.preventDefault();
  //  console.log('badass')
   const newtask = {task : this.state.todo}
     console.log(newtask)
   
console.log(this.state.todolist)
  
  this.setState({
    todolist: [...this.state.todolist, newtask],
  
  });
}
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        
            <TodoForm
            value ={this.state.todo}
            
            onChange = {this.changeTodo}  
            addTodo = {this.addTodo}
            
            />
            {/* {this.state.todolist.map(item =>{
                
          
            })} */}
            < TodoList todolist = {this.state.todolist} />
            
    
      </div>
    
    );
  }
}

export default App;
