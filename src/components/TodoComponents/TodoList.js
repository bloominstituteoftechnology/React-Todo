import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component{
  constructor() {
    super();
    this.state = {
      input: '',
      // todolist array
      todoList: [
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

  handleOnChange(e) {
    // console.log(this.state.input);
    this.setState({ input: e.target.value });
  }

  handleAddTodo(e) {
    const newTodoItem = {
      task: this.state.input,
      id: this.state.todoList[this.state.todoList.length - 1].id + Math.floor(Math.random() * 10),
      completed: false
    }
    const newTodoList = this.state.todoList.slice().concat(newTodoItem);
    this.setState({ todoList: newTodoList });
    this.setState({ input: '' });
  }

  handleTriggerCompleted(e) {
    const parent = e.target.parentElement;
    const id = parent.classList[0];
    
    // update state
    this.state.todoList.forEach(item => {
      if (item.id ===  Number(id)) {
        item.completed = true;
      }
    })

    // update DOM
    parent.classList.toggle('isCompleted');
  }

  handleClearCompleted(e) {
    const newTodoList = this.state.todoList.filter(item => {
      return item.completed === false;
    })

    this.setState({ todoList: newTodoList });
  }

  render() {
    return (
      <div>
        <TodoForm
          input={this.state.input} 
          addTodo={this.handleAddTodo.bind(this)} 
          clearCompleted={this.handleClearCompleted.bind(this)}
          onChange={this.handleOnChange.bind(this)}
        />
        <Todo 
          currentList={this.state.todoList}
          triggerCompleted={this.handleTriggerCompleted.bind(this)}
        />
      </div>
    )
  }
}

export default TodoList;