import React, { Component } from "react";
import TodoList from "./TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      todos: ["Clean car", "Clean dishes", "Get dinner", "Buy pants"]
    };
  }
  handleAddTodo = e =>{
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value})
    
    }
    handleSubmitTodo =() => {
    const { todos } = this.state
    todos.push(this.state.newTodo);
    this.setState({todos, newTodo: ""});
    
    }

    toggleClick = e  =>{
      console.log(e)
      
    }
strike = e =>{

if(e.target.style.textDecoration === "line-through"){
e.target.style.textDecoration = ""
}else{
e.target.style.textDecoration = "line-through";
};
}
  render(){
return(

        <div class="container">
    
           <TodoList {...this.state} toggleClick={this.strike}/>
        <input type="text" 
        name ="newTodo"
        value ={this.state.newTodo}
        placeholder="add todo" 
        onChange={this.handleAddTodo}
        />
        <button onClick={this.handleSubmitTodo}>Add todo</button>
        </div>

);
  }
}
  
  

export default App;
