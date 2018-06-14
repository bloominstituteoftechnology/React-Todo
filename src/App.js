import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
      this.state = {
        greeting: "Todo List: MVP",
        things: [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ],
        tasks: ''
      };
}

  changeTaskHandler = event => {
    event.preventDefault();
    console.log(event.target.value)
   this.setState({tasks: event.target.value})
  };

  addTask = event => {
    event.preventDefault();
    const things = this.state.things.slice();
    console.log(things, "things");
    let obj = {}
    obj.task = this.state.tasks
    obj.id= Math.random();
    obj.completed = false;
    things.push(obj);
    this.setState({things: things})
  };


  // toggleTodoComplete = id => {
  //   let todos = this.state.todos.slice();
  //   todos = todos.map(todo => {
  //     if(todo.id === id){
  //       todo.completed = !todo.completed;
  //       return todo;
  //     }
  //     else {
  //       return todo;
  //     }
  //   });
  //   this.setState({todos});
  // };

  // clearCompletedTodos = e => {
  //   e.preventDefault();
  //   let todos = this.state.todos.slice();
  //   todos = todos.filter(todo => !todo.completed);
  //   this.setState({todos});
  // };


  render() { //invoked anytime state is updated
    console.log("render called");
    return (
      <div>
        <h2>{this.state.greeting}</h2>

         {/* <input
          type = "text"
          onChange = {this.changeTaskHandler}
          placeholder = "Add todo"
          value = {this.state.tasks}
         /> */}

         <TodoForm eventHandler = {this.changeTaskHandler} addTaskEvent = {this.addTask} value = {this.state.tasks}/>

         {/* <button onClick = {this.addTask}>Add Task</button> */}

         {/* <TodoForm value = {this.state.tasks}/> */}

        <TodoList someThings = {this.state.things} />
        {/* <TodoForm /> */}
        
      </div>
    );
  }
}

export default App;


