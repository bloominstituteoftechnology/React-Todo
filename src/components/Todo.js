import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.toggleTodo(this.props.todo.id)}
        className="transition transition-colors ease-in-out hover:bg-gray-400 text-center cursor-pointer m-1 lg:text-lg h-20 w-5/6 sm:h-8 flex self-center justify-center items-center rounded-md border border-gray-400 bg-gray-300 p-8 shadow-md"
      >
        <p className={this.props.todo.completed ? 'completed' : ''}>
          {this.props.todo.todo}
        </p>
      </div>
    );
  }
}
