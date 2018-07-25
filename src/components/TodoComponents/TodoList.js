import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component{
  constructor() {
    super();
    this.state = {
      input: '',
      search: '',
      // todolist array
      todoList:  JSON.parse(localStorage.getItem('todo')) || [
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
    if (this.state.input === '') {
      console.log('please type something');
      return;
    };

    const newTodoItem = {
      task: this.state.input,
      id: this.state.todoList[this.state.todoList.length - 1].id + Math.floor(Math.random() * 10),
      completed: false
    }
    const newTodoList = this.state.todoList.slice().concat(newTodoItem);
    this.setState({ todoList: newTodoList });
    this.setState({ input: '' });

    localStorage.setItem('todo', `${JSON.stringify(newTodoList)}`);
  }

  handleKeyPressAddToDo(e) {
    if (e.key === 'Enter') {
      this.handleAddTodo();
    }
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

  handleOnSearch(e) {
    const searchValue = e.target.value;

    // reset the DOM 
    this.state.todoList.forEach(item => {
      const element = document.querySelector(`.id-${item.id}`);
      element.classList.remove('hide');
    })

    // searching list via DOM 
    this.state.todoList.filter(item => {
                          return ! item.task.includes(searchValue);
                        }).forEach(item => {
                          const element = document.querySelector(`.id-${item.id}`);
                          element.classList.add('hide');
                        })
  }

  render() {
    return (
      <div className="todo-component">
        <TodoForm
          input={this.state.input} 
          addTodo={this.handleAddTodo.bind(this)} 
          keyPressAddToDo={this.handleKeyPressAddToDo.bind(this)}
          clearCompleted={this.handleClearCompleted.bind(this)}
          onChange={this.handleOnChange.bind(this)}
          onSearch={this.handleOnSearch.bind(this)}
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