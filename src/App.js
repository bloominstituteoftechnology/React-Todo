import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

let todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Clean kennel',
    id: 43242314234,
    completed: true
  }
];


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: todoList,
      task: null
    }
  }

  handleChange = event => {
    this.setState({
      task : event.target.value
    });
  };

  handleSubmit = () => {
    console.log("Task added");
    this.state.list.push({
      task: this.state.task,
      id: Date.now(),
      completed: false
    })
    console.log(this.state.list);
  }

  
  render() {
    return (
      <>
      <div>
        <h2>To Do</h2>
        <form onChange={this.handleChange}>
          <input type="text" placeholder="new task" />
          <input type="button" onClick={this.handleSubmit} value="Submit" />
        </form>
      </div>
      <TodoList array={this.state.list}/>
      </>
    );
    
  }
}

export default App;
