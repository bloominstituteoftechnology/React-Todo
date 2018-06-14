import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class App extends React.Component {
  constructor() {
     super();
     this.state = {
       todo1: {
         task: "Walk the dog",
         completed: false
       },
       todo2: {
         task: "Wash the dog",
         completed: false
       },
       todo: {
         task:""
       }
     };
   }
   updateInputFormText = event => {
     let newTodo = event.target.value;
     let oldTodo = Object.assign({},this.state.todo);
     oldTodo.task = newTodo;
     console.log(newTodo);
     this.setState({todo: oldTodo});
   }
   addTodo = event => {

   }
   render(){
     return(
       <div>
       <TodoList tasks={this.state} />
       <TodoForm value={this.state.todo} updateInputFormText={this.updateInputFormText} addTodo={this.addTodo}/>
       </div>
     )
   }
}
export default App;
