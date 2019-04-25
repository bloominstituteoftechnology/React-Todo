import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import ReactSearchBox from 'react-search-box'
import "./components/TodoComponents/Todo.css";

const tasks = []

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: tasks,
      thing: {
        task: "",
        id: "",
        completed: ""
      }
    };
  }

  textChangeHandler = event => {
    this.setState({
      ...this.state,
      thing: {
        ...this.state.thing,
        [event.target.name]: event.target.value,
        id: Date.now(),
        completed: false
      }
    });
  };

  enterItemHandler = event => {
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.thing],
      thing: {
        task: "",
        id: "",
        completed: ""
      }
    });
    console.log(this.state.list);
  };

  emptyListHandler = event => {
    this.setState({
      list: []
    });
  };

  clearCompleted = (event) =>{
    event.preventDefault();
    const newList = this.state.list.filter(item =>{
      if(item.completed){
        return false
      }else{
        return true
      }
    })
    this.setState({list : newList})
    }
  

  toggleToComplete = id => {
    const newList = this.state.list.map(task => {
      if (id === task.id) {
    
        return { ...task, completed: !task.completed };
        
      }

      return task;
    });

    this.setState({ list: newList });
  };

  render() {
    return (
      <div className="container">
        <h1>To Do List</h1>
        <TodoForm className="container"
          textChange={this.textChangeHandler}
          enterItem={this.enterItemHandler}
          emptyList={this.emptyListHandler}
          clearList={this.clearCompleted}
          info={this.state.thing}
        />
        <TodoList
          list={this.state.list}
          toggleToComplete={this.toggleToComplete}
        />
        <img src="https://ui-ex.com/images/zelda-transparent-nes.png"></img>

      </div>
    );
  }
}

export default App;
