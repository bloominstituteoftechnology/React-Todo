import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const todoItems = [
  // {
  //   task: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: false
  // },
  // {
  //   task: 'Bake Cookies',
  //   id: 1528817084358,
  //   completed: false
  // }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItemList: todoItems,
      inputText: "",
      inputFilterText: "",
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
    console.log(e.target.value);
  }

  addTask = e => {
    e.preventDefault();
    if(this.state.inputText !== ""){
    this.setState({
      todoItemList: [
        ...this.state.todoItemList,
        {task: this.state.inputText, 
          id: Date.now(),
          completed: false,
          taskDone: 'inactive'
        },
      ],
      inputText: ''
    });
  }
    console.log(this.todoItemList);
  }

  taskComplete = id => {
    this.setState({
      todoItemList: this.state.todoItemList.map(task => {
        if(task.id === id) {
          return {
            ...task,
            taskDone: task.taskDone === 'inactive' ? 'active' : 'inactive',
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });    
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoItemList: this.state.todoItemList.filter(task => task.completed === false)
    });
  }

  filterTasks = e => {
    e.preventDefault();
    if(this.state.inputFilterText !== ""){
      console.log(this.inputFilterText);
      this.setState({
        todoItemList: this.state.todoItemList.filter(filtered => filtered.task === this.inputFilterText),
        // inputFilterText: ''
      });
    }
  }

  render() {
    return (      
      <div>
        {/* <h2>Welcome to your Todo App!</h2> */}
        <TodoList 
        todos={this.state.todoItemList} 
        taskComplete={this.taskComplete}
        />
        <TodoForm 
          addTask={this.addTask} 
          filterTasks={this.filterTasks}
          clearCompleted={this.clearCompleted}         
          inputText={this.state.inputText}
          inputFilterText={this.state.inputFilterText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
