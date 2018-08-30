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
     //stop the default stuff from happening
    event.preventDefault();
    // if (this.state.task) { 
    //     this.setState({
    //       todos:  [...this.state.todos, this.state.task],
    //       task: "",
    //       id: "",
    //       completed: false
    //     });
    // }    

      //if we have nothing in the input for the task return from the method and do nothing    
      if(this.state.task === "") {
        return;
      }

      //grab the task from state
      const myNewTask = this.state.task;

      //create an id variable
      //set the id to the current date and time as a large number to make id into a non-repeated number
      const myId = Date.now();

      //build a new todo object from the new task and id with a completed set to false
      const myNewToDo = {id: myId, task: myNewTask, completed: false};

      //create a variable for the new array of todos
      let currentTodos = this.state.todos;

      //push the new todo into the array of currentTodos
      currentTodos.push(myNewToDo);

      //set the state with the new currentTodos and an empty task
        this.setState({
          todos: currentTodos, task: ""
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
