import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
      this.state = {
        todos: [],
        task: "",
        // id: "",
        // completed: false
      };

      // this.handleSingleClickEvent = this.handleSingleClickEvent.bind(this);
  }

  // Property

  addTodo = event => {
    event.preventDefault();
    // if (this.state.task) { 
    //     this.setState({
    //       todos:  [...this.state.todos, this.state.task],
    //       task: "",
    //       id: "",
    //       completed: false
    //     });
    // }    
      if(this.state.task === "") {
        return;
      }

      const myNewTask = this.state.task;

      const myId = Date.now();

      const myNewToDo = {id: myId, task: myNewTask, completed: false};

      let currentTodos = this.state.todos;

      currentTodos.push(myNewToDo);

        this.setState({
          todos: currentTodos, input: ""
        });
  };

  handleInput = event => {
    this.setState({
      task: event.target.value,
      // id: event.target.value,
      // completed: event.target.value
    });
  };

  // alert('Todo task was clicked');

  // handleSingleClickEvent() {
  //     this.setState(prevState => ({
  //       completed: !prevState.completed
  //     }));
  //   alert('Todo task was clicked');
  // }
  

  //form is called controlled comonent (vs. uncontrolled)

  render() {
    // this is a lifecycle hook
    return (
      // <div>
      //   <div onClick={this.handleSingleClickEvent}>
      //     {this.state.completed ? 'ON' : 'OFF'}

      // </div> at the end of <TodoList />
      <div>
        <TodoList 
        todos={this.state.todos}/>
        
        <TodoForm 
          addTodo={this.addTodo}
          task={this.state.task}
          // id={this.state.id}
          // completed={this.state.completed}
          handleInput={this.handleInput}
        /> 
      </div>
    );
  }
}

export default App;
