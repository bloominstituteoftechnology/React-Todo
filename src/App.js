import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
   constructor(props){
     super(props)



     this.state = {
           
            

     
    task: " ",
    completed :false,
    id: Date.now(),
      todos: []
  
  }
   }
  
  
   handleChange = (e)=> {

    this.setState(  { [e.target.name] : e.target.value})
   }


   addTodo = (e )=> {
       e.preventDefault();


       let newTodo = {
            task: this.state.task,
            completed: false,
            id:Date.now()
       }
       this.setState({todos:[...this.state.todos, newTodo]
        
       
       })

         console.log("NEWTODO", newTodo)



   }

   toggleCompleted = id => {
       this.setState({
        todos: this.state.todos.map(todo => {
            if(todo.id == id ){
                return {...todo, completed: !todo.completed}
            }
            return todo;
           })
        })

        console.log("ID", id)
        console.log("ANY GOT TOGGLED?", this.state.todos)
   }

  
   clearCompleted = e => {
     e.preventDefault();
    //  this.setState( {todos: this.state.todos.filter(todo=> 
    //    !todo.completed)
     
    
    // })

    const filtered = this.state.todos.filter(todo=> {
      if(!todo.completed){
        return todo
      }
    })
      
     this.setState({
       todos: filtered
     })
     

     console.log("FILTERED", filtered)
    }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm
          onChange ={this.handleChange}
            todos = {this.state.todos}
            input = {this.input}
            addTodo = {this.addTodo}
            clear = {this.clearCompleted}/>
        <TodoList
          todos = {this.state.todos}
          toggle = {this.toggleCompleted}
          clear= {this.clearCompleted}
          id = {this.state.id}
          />

      </div>
    );
  }
}

export default App;
