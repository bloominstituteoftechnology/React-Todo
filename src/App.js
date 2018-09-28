import React from "react";
//import Todo from "../src/components/TodoComponents/Todo";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";
import "../src/components/TodoComponents/Todo.css";
import "../src/components/TodoComponents/reset.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task:"",
      id:Date.now(),
      completed:false,
      todos: [
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
      ]
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


handleFilter = () =>{
  const arr = this.state.todos.filter(todo =>{
    if(todo.completed === false){
      return todo
    }
    console.log(todo);
  })
  this.setState({
    todos: arr
  })
}

  render() {
    console.log(this.state.todos)
    return (
      <div className="container">
        <div className="todo-container">
          <h1> My daily Todos</h1>
          <TodoList taskLists={this.state.todos} selected={this.handleSelected}/>
          <TodoForm
            value={this.state.task}
            submit={this.handleSubmit}
            update={this.handleChange}
            filter={this.handleFilter}
            enter ={this.handleEnter}
          />
        </div>
      </div>
    );
  }
}

export default App;