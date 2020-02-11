import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css';


const todos = [
  {
    task: '',
    id: Date.now(),
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: todos
    }


  }

  toggleItem = clickedId => {
    // no mutating the current state
    // for every array and every object - create a new one (..., or array methods)
    const newTodoList = this.state.todoList.map(task => {
      // loop through the array
      // find the item we clicked (id, maybe index)
      // toggle that item's purchased property
      if (task.id === clickedId) {
        // toggle purchased
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    });

  
    // Update state with the new array
    this.setState({
      todoList: newTodoList
    });
  };
  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(todos => !todos.completed)
  });
}

  addNewTask = taskText => {
    const newTask = {
      task: taskText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };

  render() {
    return (
      <div>
        <h2>Honey, Can you Do These Things For Me?</h2>  
        <TodoForm addNewTask={this.addNewTask} />
        <TodoList 
          todoList= {this.state.todoList}
          toggleItem= {this.toggleItem}
          clearCompleted = {this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
