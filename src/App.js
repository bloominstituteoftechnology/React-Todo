import React from "react";
import "./App.css";
import { AST_PropAccess } from "terser";

const todoList = [];




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoList,
      newTodo: "",
      id: Date.now()
    };
  }

  changeHandler = event => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      task: this.state.newTodo,
      id: Date.now(),
      completed: false
    };
    this.setState({ todoList: this.state.todoList.concat(newTodo) });
    this.setState({ newTodo: "" });
  };

  addTodoEnter = event => {
    if (event.keyCode === 13) {
      const newTodo = {
        task: this.state.newTodo,
        id: Date.now(),
        completed: false
      };
      this.setState({ todoList: this.state.todoList.concat(newTodo) });
      this.setState({ newTodo: "" });
    }
  };

  markAsCompleted = (id) => {
    this.setState(prevState => 
      ({

      todoList: prevState.todoList.map(task => {
        if (task.id ===id) {
          task.completed = !task.completed;
          task.style ={
            textDecoration: task.completed ? "line-through" : "none"
          }
        }
        return task;
      })
    })
    )
  }

  /* deleteDoneTodos() {
    this.state.todoList = this.state.todoList.filter((element) => element.)
  } */

  render() {
    return (
      <div className="todoListComplete">
        {this.state.todoList.map(todo => (
          <div><Paragraph text={todo.task} todo={todo} id2={todo.id} method={this.markAsCompleted}/></div>
        ))}
        <form>
        <input
          value={this.state.newTodo}
          onChange={this.changeHandler}
          /* onKeyDown={this.addTodoEnter} */
          type="text"
        />
        <button onClick={this.addTodo}>Add Task!</button>
        <button onClick={this.deleteDoneTodos}>Delete done Tasks!</button>
        </form>
      </div>
    );
  }
}






class Paragraph extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isDone: false,
      content: props.text,
    };
  }

  style= () => {
    return {
      textDecoration : this.state.isDone ? "line-through" : "none" ,
    }
  }

  crossOut = () => {
    this.props.method(this.props.todo.id);
  }

  toDelete= () => {
    return this.state.isDone;
  }

  render(){
    return <p onClick={this.crossOut}>{this.state.content}</p>
  }

}
export default App;
