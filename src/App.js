import React from 'react';
import ReactDOM from "react-dom";
import Todo from './components/TodoComponents/Todo'
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
          status: false,
          id: 1528817077286
        },
        {
          task: 'Kill Self',
          status: false,
          id:1528817084358
        }
      ],
    };
  }


//constructor for todos array so for current tasks preventDefault to allow for inputs a is the input being passed here
createTodo = a => {
  a.preventDefault();
  const todo = this.state.todo.slice()
  todo.push({ task: this.state.done, status: false, id: Date.now() });
  this.setState({ todo, done: '' });
};

//state changer
toggleTodo = a => this.setState({ [a.target.name]: a.target.value})

//constructor for done array so for status stuff
toggleTodoStatus = id => {
  let todo = this.state.todo.slice();
  todo = todo.map(done => {
    if (done.id === id) { //checks if unique data now attribute is shared in both arrays?
      todo.status = !todo.status; // complete is a
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
  let todo = this.state.todo.slice();
  todo = todo.filter(done => !todo.status);
  this.setState({ todo });
};

//render
  render() {
    return (
      <div>
        <TodoList
        handlecomplete = {this.toggleTodoStatus}
        todo = {this.state.todo}/>
        <TodoForm/>
      </div>
    );
  }
}


  export default App;
  console.log("hello");
