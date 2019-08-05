import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
       todo: "",
       id: Date.now(),
       complete: false
    }
}

handleChangeFunction = event => {
  return(
    <div>
      <h2>Welcome to the TODO App!</h2>
      <Todo propsTodo={this.state.todo} />
        <TodoForm/>
        
    </div>
  )

   
export default App;