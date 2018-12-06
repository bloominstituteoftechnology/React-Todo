import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listArr: [ ]
    };
  }

  addItem = entry => {

    const newTodo = {
      task: entry,
      id: Date.now(),
      completed: false
    }

    const changeList = this.state.listArr;
    changeList.push(newTodo);
    this.setState({listArr: changeList});
  }

  entryClick = event => {
    event.target.classList.toggle('complete');

  }

  clearCompleted = event => {
    event.preventDefault();
    const mutator = this.state.listArr;
    this.setState({listArr: mutator.filter(item => {
      return item.completed === false;
    })})
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList clickHandler={this.entryClick} todoList={this.state.listArr} />
        <TodoForm addEntry={this.addItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
