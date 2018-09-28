import React from 'react';
import Todo from './Todo';
import TodoForm from "./TodoForm";
import "./Todo.css";

class TodoList extends React.Component {
  render() {
      return(
          <div className={this.props.displayStyle}>
              <h1>To-Do List App!</h1>
              <h3>by jbrock</h3>
              <div className="list">
                  {this.props.state.todos.map(item => {
                      return (
                        <h2>
                          <Todo key={item.id} 
                              id={item.id} 
                              task={item.task} 
                              completed={item.completed} toggle={this.props.toggle}
                              className="toDo"
                          />
                        </h2>
                      );
                  })}
                  <TodoForm 
                      state={this.props.state}
                      text={this.props.text}
                      input={this.props.input} 
                      add={this.props.add} 
                      remove={this.props.remove}
                  />
              </div>
          </div>
      );
  }
}

export default TodoList;