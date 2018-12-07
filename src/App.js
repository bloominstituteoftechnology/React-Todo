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
    event.preventDefault();
    event.target.classList.toggle('complete');
    const targetId= event.target.id;
    const switchArray = this.state.listArr;

    const toggleArray = switchArray.map( item => {
      if(item.id === Number(targetId) && item.completed === false) {
        return {
        task: item.task,
        id: item.id,
        completed: true
      }
    } else if (item.id === Number(targetId) && item.completed === true) {
      return {
        task: item.task,
        id: item.id,
        completed: false
      }
    } else return item;
    })
    this.setState({listArr: toggleArray})
    // this.setState({listArr: toggleArray})
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
        <h1>What To Do, What To Do?</h1>
        <div className="listbox">
        <TodoList clickHandler={this.entryClick} todoList={this.state.listArr} />
        </div>
        <TodoForm addEntry={this.addItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
