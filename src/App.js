import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'

const todo =[
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
];

class App extends React.Component {
  constructor(){
    super()
    this.state={
      todoList:todo,
      search:todo.task,
    };
  }
  
toggleItem = id => {
  const newTodoList = this.state.todoList.map(item => {
    if (item.id === id) {
      return {
        ...item,
        completed: !item.completed
      };
    } else {
      return item;
    }
  });
  this.setState({
   todoList: newTodoList
  });
};

addTodo = todoName => {
  const newTodo = {
    task: todoName,
    id: Date.now(),
    completed: false
  }
  this.setState({
    todoList: [...this.state.todoList, newTodo]
  });
}
clearCompleted = () => {
  this.setState({
    todoList: this.state.todoList.filter(task => !task.completed)
  });
}
// filterTodo = () => {
//   this.setState({
//     todoList: this.state.todoList.filter(todoTask => {
//       return todoTask.task.toLowerCase().includes(search.toLowerCase());
//   })
// });
// };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}
        
        />
        </div>
        <TodoList 
        todo={this.state.todoList}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        // filterTodo={this.filterTodo}
        />
        
      </div>
    );
  }
}

export default App;
