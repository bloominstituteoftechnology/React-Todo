import React from "react"
import Form from "./components/TodoForm"
import List from "./components/TodoList"

const todolist = [
  {
    task: "do the thing",
    id: 12345678,
    completed: false,
  },
]

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todolist: todolist,
    }
    this.onComplete = this.onComplete.bind(this)
  }

  newTask = {
    task:'',
    id: Date.now(),
    completed: false
  };

  onComplete = e => {
    this.setState({ todolist: this.state.todolist.map(item => {
      if(item.id === e){
    return { ...item, completed: !item.completed
    }
  }
    return item
  })
  });
  };

  onInputChange =e => this.newTask.task = e.target.value;

  onSubmit = e => {
     e.preventDefault();
     this.setState({todolist:[...this.state.todolist, this.newTask]})
     this.newTask = {
       task:'',
       id: Date.now(),
       completed: false,
     }
document.querySelector('#newtask').value='';

  }

  onClear = e => {
    e.preventDefault();
    this.setState({ todolist:this.state.todolist.filter(item => {
      return !item.completed
    })
  })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App</h2>
        <list state={this.state.todolist} onComplete={this.onComplete} />
        <Form onClear={this.onClear} newtask={this.newTask} onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      </div>
    )
  }
}
export default App


