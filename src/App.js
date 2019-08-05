import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm.js'
import './components/TodoComponents/Todo.css'

function addTask(obj, task) {
  obj.todo.push({
    task: task,
    id: Date.now(),
    completed: false,
  })
  return obj;
}

function editTask(obj, id) {
  for (let i=0;i<obj.todo.length;i++) {
    if (obj.todo[i].id === id) {
      obj.todo[i].completed = !obj.todo[i].completed
    }
  }
  return obj;
}

function handleClearing(obj) {
  const filtered = obj.todo.filter(item => item.completed === false)
  console.log(filtered)
  obj.todo = filtered;
  return obj;
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : []
    }
  }

  componentDidMount() {
    if (localStorage.getItem("todo")) {
      this.setState({todo : JSON.parse(localStorage.getItem("todo"))});
    } else {
      localStorage.setItem("todo", JSON.stringify([]));
    }
  }

  componentDidUpdate() {
    localStorage.setItem("todo", JSON.stringify(this.state.todo));
  }


  handleAdd = task => {
    this.setState(addTask(this.state, task));
  };

  todoChange = (id) => {
    this.setState(editTask(this.state, id));
  }

  handleClear = () => {
    this.setState(handleClearing(this.state));
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Just Another Todo App!</h2>
        <TodoList todoChange={this.todoChange} list={this.state.todo}/>
        <TodoForm handleClear={this.handleClear} onAdd={this.handleAdd}/>
      </div>
    );
  }
}
export default App;
