import React from 'react';
import ReactDOM from "react-dom";
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

// CCR - "Class", "Constructor", "Render"
//class
class App extends React.Component {
  constructor() {
    super(); //don't want to pass props here
    this.state = {
      todo: [
        {
          task: 'Learn React',
          id: 1528817077286,
          status: false

        },
        {
          task: 'Conquer Universe',
          id:1528817084358,
          status: false

        }
      ],
    };
  }


//constructor for todos array so for current tasks preventDefault to allow for inputs a is the input being passed here
createTodo = a => {
  a.preventDefault();
  // const todo = this.state.todo.slice( )
  const todo = this.state.todo
  todo.push({ task: this.state.done, status: false, id: Date.now() });
  this.setState({ todo, done: '' });
};

//state changer
toggleTodo = a => this.setState({ [a.target.name]: a.target.value})

//constructor for done array so for status stuff
toggleTodoStatus = id => {
  // let todo = this.state.todo.slice( );
  let todo = this.state.todo
  todo = todo.map(done => {
    if (done.id === id) { //checks if unique data now attribute is shared in both arrays?
      done.status = !done.status; // complete is amap
      return done;
    } else {
      return done;
    }
  });
  this.setState({ todo });
};

//remove the status items:
clear = a => {
  a.preventDefault();
  // let todo = this.state.todo.slice( );
  // So you need the shallow copy otherwise you can't add tasks
  let todo = this.state.todo
  todo = todo.filter(done => !done.status);
  this.setState({ todo });
};

//render
  render() {
    return (
      <div>
        <h1> React Todo MVP </h1>
        <TodoList
        handleComplete = {this.toggleTodoStatus}
        todo = {this.state.todo}/>
        <TodoForm
          value = {this.state.done}
          handleToggle = {this.toggleTodo}
          handleCreate =  {this.createTodo}
          handleClear = {this.clear}
       />
      </div>
    );
  }
}


  export default App;
  console.log("hello");
