import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoArr = [
  {
    name: 'Clean Room',
    id: 123,
    completed: false
  },
  {
    name: 'Prep Meals',
    id: 124,
    completed: false
  },
  {
    name: 'Buy Groceries',
    id: 1235,
    completed: false
  },
  {
    name: 'Take Daughter to Swim Practice',
    id: 1246,
    completed: false
  },
  {
    name: 'Pay Bills',
    id: 1237,
    completed: false
  },
  {
    name: 'Stop by Post Office',
    id: 1248,
    completed: true
  }
];

class App extends React.Component{
    constructor(){
    super()
    this.state={
        name:'Bill',
        tasks: todoArr
    }
  }
  toggle= id=>{
      console.log(id)
      this.setState({
        tasks: this.state.tasks.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
      })
    })
  }
  addTask = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };
  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggle={this.toggle}
        />
      </div>
    );
  }
}

export default App;
