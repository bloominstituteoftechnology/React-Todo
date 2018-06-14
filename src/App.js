import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class App extends React.Component {
  constructor() {
     // step 2. call your `constructor`
     super();
     this.state = {
       todo1: {
         task: ["Walk the dog"],
         completed: [false]
       },
       todo2: {
         task: ["Wash the dog"],
         completed: [false]
       }
     };
     // state is the memory we have in our component,
     // props is the mechanism for passing that state around.
   }
   render(){
     return(
       <div>
       <TodoList tasks={this.state} />
       <TodoForm />
       </div>
     )
   }
}
export default App;
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
