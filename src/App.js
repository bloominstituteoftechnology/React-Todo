import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      task: '',
      id: '',
      completed: false
    };
  }
  handleTodoInput = event => {
    this.todoValue = event.target.value;
    console.log(this.todoValue)
  }
  handleTodoAdd = event => {
    console.log(event.key)
    if(this.todoValue !== undefined){
    this.setState({task: this.todoValue, id:Date.now()})
    }
  }
  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <input type="text" placeholder = "Type here" 
        onChange={this.handleTodoInput} onKeyDown={this.handleTodoAdd}/>
        <button onClick={this.handleTodoAdd}>Add Todo</button>
        <button>Clear Completed</button>
        {/* <TodoList todoArr = {this.state.slice()}/> */}
        {console.log(this.state)}
      </div>
    );
  }
}

export default App;
