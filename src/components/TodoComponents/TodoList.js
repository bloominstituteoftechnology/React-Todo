// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react';
import Todo from './Todo';
import TodoForm from "./TodoForm";
import "./Todo.css";

class TodoList extends Component {
  render() {
      return(
        <div>
            <div className="top-content">
                <div>
                  <h1 className="todo-header">To-Do</h1>
                </div>
                <div>
                  <TodoForm 
                    state={this.props.state}
                    text={this.props.text}
                    input={this.props.input} 
                    add={this.props.add} 
                    remove={this.props.remove}
                  />
                </div>
            </div>
            <div className="todo-section">
                {this.props.state.todos.map(item => {
                    return (
                      <h4>
                        <Todo 
                        key={item.id} 
                        id={item.id} 
                        task={item.task} 
                        completed={item.completed} toggle={this.props.toggle}
                        />
                      </h4>
                    );
                })}
            </div>
        </div>
      );
  }
}

export default TodoList;