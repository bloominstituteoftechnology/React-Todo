import React from 'react';
 import TodoList from "./components/TodoComponents/TodoList";
 import TodoForm from "./components/TodoComponents/TodoForm";
 
 class App extends React.Component {
  
   constructor() {
    super();
    this.state = {
      items:[{
        task: 'Practice JavaScript',
        id: 1,
        completed: false
      },
      {
        task: 'Practice React',
        id: 2,
        completed: false
      }]
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
          todos: task
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
        <h2>Welcome to your Todo App!</h2>
        <TodoList items = {this.state.items} toggleTodo = {this.toggleTodo} />
        <TodoForm Submit = {this.Submit} clearHandler = {this.clearHandler} />
      </div>
    );
  }
 }
 
 
 export default App;
 
