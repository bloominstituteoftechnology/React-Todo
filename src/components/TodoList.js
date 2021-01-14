// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';
import TodoSearch from './TodoSearch';

export default class TodoList extends Component {
  render() {
    return (
      <div className="flex flex-col p-4" style={{ minHeight: '50%' }}>
        <TodoSearch
          searchInput={this.props.searchInput}
          updateSearchInput={this.props.updateSearchInput}
        />
        <div className="flex flex-1">
          {this.props.todoList.length > 0 ? (
            <div className="self-center flex-1 flex flex-col justify-evenly items-center">
              {this.props.todoList.map((todo) => (
                <Todo
                  key={todo.todo}
                  toggleTodo={this.props.toggleTodo}
                  todo={todo}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-5xl self-center">
              There is nothing to do right now. Start adding todos!
            </p>
          )}
        </div>
      </div>
    );
  }
}
