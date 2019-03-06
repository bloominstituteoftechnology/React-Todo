import React from "react";
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state =  {
      todo,
      task: '',
      id: Math.random(),
    };
  }



  formSubmitHandler = event => {
    event.preventDefault()
      let newTodo = {
        task: this.state.task,
        id: this.state.id,
        completed: false
      }

    this.setState({todo: [...this.state.todo, newTodo]})
  }

  newTaskHandler = event => {
    this.setState({task: event.target.value})
  }

  render() {
    return (
      <div>
     {this.state.todo.map(newList =>  (<TodoList newList = {newList} />))} 
      <TodoForm addTodo = {this.formSubmitHandler} newTask = {this.newTaskHandler}/>
      </div>
    );
  }
}

export default App;
