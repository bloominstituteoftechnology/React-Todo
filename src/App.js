import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class App extends React.Component {
  constructor() {
     super();
     this.state = {
       todo1: {
         task: ["Walk the dog"],
         completed: [false]
       },
       todo2: {
         task: ["Wash the dog"],
         completed: [false]
       },
       todo: "Todo..."
     };
   }
   updateInputFormText = event => {
     console.log("hi");
   }
   // addTodo = event => {
   //
   // }
   render(){
     return(
       <div>
       <TodoList tasks={this.state} />
       <TodoForm value={this.state.todo} updateInputFormText={this.updateInputFormText}/>
       </div>
     )
   }
}
export default App;
