import React from "react";
//import Todo from "../src/components/TodoComponents/Todo";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";
import SearchTodo from"../src/components/TodoComponents/SearchTodo";
import "../src/components/TodoComponents/Todo.css";
import "../src/components/TodoComponents/reset.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task:"",
      query:"",
      id:Date.now(),
      completed:false,
      todos: []
    }
  }

handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value,
        id:Date.now(),
        completed:false
    });
};

handleKeyPress = event =>{
    const task = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    if(event.which === 13){
      this.setState({
        task: "",
        todos:[...this.state.todos, task]
      })
    }
}

handleSubmit = () => {
    const task = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      task: "",
      todos:[...this.state.todos, task]
    })
};

handleSelected = id => {
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
      return todo;
    }
  })
  this.setState({
    todos: arr
  })
}

handleSearch = () =>{
 let search = this.state.query.trim().toLowerCase();
 const arr = this.state.todos.filter(todo =>{
    return todo.task.toLowerCase().match(search);
 })
  this.setState({
    query:'',
    todos:arr
  })
}

componentDidMount() {
  localStorage.getItem('todos') && this.setState({
    todos: JSON.parse(localStorage.getItem('todos')),
  })
}
componentWillUpdate(nextProps, state) {
  localStorage.setItem('todos', JSON.stringify(state.todos))
}

  render() {
    return (
      <div className="container">
        <div className="todo-container">
          <div className="todo-header">
            <h1>Todos</h1>
            <SearchTodo 
            search={this.handleSearch} 
            value={this.state.query} 
            update={this.handleChange}/>
          </div>
          <TodoList taskLists={this.state.todos} selected={this.handleSelected}/>
          <TodoForm
            value={this.state.task}
            submit={this.handleSubmit}
            update={this.handleChange}
            filter={this.handleFilter}
            enter ={this.handleEnter}
            keypress={this.handleKeyPress}
          />
        </div>
        <div className="footnote">
        <p>Project made with lambda school support by Obed Lorisson</p>
        </div>
      </div>
    );
  }
}

export default App;