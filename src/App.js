import React from 'react';

const listoftodos = [];
class App extends React.Component {
  constructor(props){
    super(props);
   
      // you will need a place to store your state in this component.
      // design `App` to be the parent component of your application.
      // this component is going to take care of state, and any change handlers you need to work with your state
     this.state = {   
    todos: listoftodos,
    task:''
    
    
  };
  }
  
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const newtodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
      
    };

    this.setState({
      todos: [...this.state.todos, newtodo]
      
    });
     
  };

  render() {
    return (
      <div>
      <TodoList todos={this.state.todos} />
      <TodoForm value={this.state.todo} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
    </div>
    );
  }
}

export default App;
