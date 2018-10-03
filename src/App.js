import React from "react"
import TodoList from "../src/components/TodoComponents/TodoList"
import TodoForm from "../src/components/TodoComponents/TodoForm"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task:"",
      id:Date.now(),
      completed:false,
      todos: []
    }
  }

  handleChange = event => {
    this.setState({
        task: event.target.value,
        id:Date.now(),
        completed:false
    });
  };

  handleSubmit = () => {
    const task = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.state.todos.push(task);
    this.setState({
      task: ""
    })
  };

  handleSelected = (id)=> {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  };

  render() {
    console.log(this.state.todos)
    return (
      <div className="container">
        <TodoList taskLists={this.state.todos} selected={this.handleSelected}/>
        <TodoForm
          value={this.state.task}
          submit={this.handleSubmit}
          update={this.handleChange}
          filter={this.handleFilter}
          enter ={this.handleEnter}
        />
      </div>
    );
  }
}

export default App