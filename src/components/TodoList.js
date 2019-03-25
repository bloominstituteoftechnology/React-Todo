import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ['default'],
            newTodo: ''
        }
    }

    addTodo = (todo) => {
      const todosCopy = this.state.todos;
      todosCopy.push(todo);
      this.setState({
          todos: todosCopy
      })
    }
    
    

    render() {
        return (
            <div>
                <p>Todos</p>
                <input
                  type='text'
                  name='newTodo'
                  value={this.state.newTodo}
                  onChange={this.addTodo}
                />
                <button>Add Todo</button>
            </div>
        )
    }
}

export default TodoList;