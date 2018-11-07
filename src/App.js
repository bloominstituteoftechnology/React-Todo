import React from "react"
import TodoForm from "../src/components/TodoComponents/TodoForm"
import './components/TodoComponents/Todo.css'
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task:"",
      id:Date.now(),
      todos: [],
      completed: false
    }
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    
  }

  handleChange = event => {
    this.setState({
        task: event.target.value,
        id: Date.now(),
      
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.state.todos.push(task);
    this.setState({
      task: "",
    })
  };

  clearCompleted(event) {
    event.preventDefault();
    const li = document.querySelectorAll('.strike-th');
    li.forEach( item => {
      item.classList.add('animated');
      item.classList.add('bounce');
      setTimeout( () => item.style.display = "none", 650);
      
  });
}



  render() {

    return (
      <div className="container">

        <TodoList taskLists={this.state.todos} />
        <TodoForm
          value={this.state.task}
          submit={this.handleSubmit}
          update={this.handleChange}
          clear={this.clearCompleted}
        
        />
      </div>
    );
  }
}

export default App