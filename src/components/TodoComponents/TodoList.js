import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const todoList = [
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
        task: 'Study Class Components',
        id: 152881751447,
        completed: true
    },
  ];

  class TodoList extends React.Component {
      constructor() {
          super();
          this.state = {
              stateTodoList: todoList,
              task: '',
              id: '',
              completed: '',
          };
      }

      render() {
          return (
              <div>
                  {this.state.stateTodoList.map(todoTask => (
                      <Todo todoTask={todoTask} />
                      ))}
              </div>
          );
        }
  }

  export default TodoList