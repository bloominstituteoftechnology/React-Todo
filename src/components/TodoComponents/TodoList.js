import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';



  class TodoList extends React.Component {
      constructor() {
          super();
          };

      render() {
          return (
              <div>
                  <TodoForm input={this.props.input} task={this.props.task} id={this.props.id} completed={this.props.completed} submit={this.props.submit}/>
                  {this.props.stateTodoList.map(todoTask => (
                      <Todo todoTask={todoTask} />
                      ))}
              </div>
          );
        }
  }

  export default TodoList