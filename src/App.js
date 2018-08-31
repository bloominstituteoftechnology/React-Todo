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
        // task: "",
        todo: ""
      };

    }

  // Property

  addTodo = event => {
     //stop the default stuff from happening
    event.preventDefault();
    

      //if we have nothing in the input for the task return from the method and do nothing    
      if(this.state.todo === "") {
        return;
      }

      //grab the task from state
      // const myNewTask = this.state.task;

      //create an id variable
      //set the id to the current date and time as a large number to make id into a non-repeated number
      // const myId = Date.now();

      //build a new todo object from the new task and id with a completed set to false
      // const myNewToDo = {id: myId, task: myNewTask, completed: false};

      //create a variable for the new array of todos
      // const currentTodos = this.state.todos;

      //push the new todo into the array of currentTodos
      // currentTodos.push(myNewToDo);

      //set the state with the new currentTodos and an empty task
        // this.setState({
        //   todos: currentTodos, 
        //   task: ""
        // });

      const todos = this.state.todos.slice();
      todos.push({task: this.state.todo, id: Date.now(), completed: false});
      this.setState({
                    todos,
                    todo: "" 
                  });
       
  };

  // handleInput = event => {
  //   this.setState({
  //     task: event.target.value,
  //   });
  // };

  handleInput = event => this.setState({ [event.target.name]: event.target.value });

  toggle = id => {
    // id.preventDefault();
    
    let todos = this.state.todos.slice()
    todos = todos.map(todo => { 
    if(todo.id === id) {
      // this.setState(prevState => ({
      //   completed: !prevState.completed
      // }));
      todo.completed = !todo.completed;
      return todo;
    } else {
      return todo;
    }
  });
  this.setState({ todos });
};

  clearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };
  //form is called controlled comonent (vs. uncontrolled)

  render() {
    // this is a lifecycle hook
    return (
      <div>
    
        <TodoList 
        todos={this.state.todos} 
        handleToggle = {this.toggle}
        />
      
        <TodoForm 
          handleAddTodo={this.addTodo}
          value={this.state.todo}
          handleInputChange={this.handleInput}
          handleClearCompleted={this.clearCompleted}
        /> 
       
      </div>
    );
  }
}
export default App;
