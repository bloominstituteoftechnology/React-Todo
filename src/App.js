import React from 'react';
 import './components/TodoComponents/Todo.css';
 import TodoList from "./components/TodoComponents/TodoList";
 import TodoForm from "./components/TodoComponents/TodoForm";
 
 class App extends React.Component {
  
   constructor() {
    super();
    this.state = {
      items:[]
    };
  }
   
  Submit = text => {
    if(text !== ""){
      const newTodo = {
        task: text,
        id: Date.now(),
        completed: false
      };
      
      this.setState(prevState => {
        let task = prevState.items.slice();
        task.push(newTodo);
        
        return{
          items: task
        }
      })
    }
  };
   
  toggleTodo = id => {
    let task = this.state.items.map(todo => {
      if(id === todo.id ){
       todo.completed = !todo.completed
        return todo
      }
      else{
        return todo
      }
    })
    this.setState({
      items: task
    })
   }

   
   clearHandler = event => {
     if(!this.state.items.completed) {
       let newItems = this.state.items.filter(props => {
         return props.completed !== true
       })
       this.setState ({
         items: newItems
       })
     }
   }
   
   
   render() {
    return (
      <div>
        <h1>Angie's Todo App!</h1>
        <TodoList items = {this.state.items} toggleTodo = {this.toggleTodo} />
        <TodoForm Submit = {this.Submit} clearHandler = {this.clearHandler} />
      </div>
    );
  }
 }
 
 
 export default App;
 
