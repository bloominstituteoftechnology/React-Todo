import React from 'react';
// import { TodoButton } from './components/TodoComponents/TodoForm'
// import { TodoInput } from './components/TodoComponents/TodoForm'
import { TodoForm } from './components/TodoComponents/TodoForm'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
   constructor(props)
   {
     super(props)

     this.state = {
       todos: [

      {
           id: 1528817077286,
        text: "Dont forget to study",
        completed: false
      
      },
         {
           id: 1528817084358,
           text: "Clean the dishes",
           completed: false

         }
       
        ],
          nextId: Date.now()
   }
  }

  addTodo = (todoText) => {
     console.log("Todo Added :", todoText)
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm  todoText="" addTodo={this.addTodo}/>
        {/* <TodoInput handleChange={this.handleChange}/> {" "}
        <TodoButton buttonStyle={'todobtn'} handleClick={() => this.addToInput(this.state.items)} text={"Add Todo"} /> {" "}
        <TodoButton buttonStyle={'todobtn'} text={"Clear Completed"} /> */}
      </div>
    );

  }
}

export default App;
