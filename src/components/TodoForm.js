import React, { Component } from 'react';

export default class TodoForm extends Component {
  state = { todo: '' };

  render() {
    return (
      <form
        className="flex flex-col sm:flex-row items-center justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          if (this.state.todo) {
            this.props.addTodo(this.state.todo);
            this.setState({ ...this.state, todo: '' });
          }
        }}
      >
        <input
          className="focus:border-light-blue-300 focus:ring-1 focus:ring-light-blue-300 focus:outline-none mb-2 sm:mb-0 self-stretch flex-1 p-2 rounded-md sm:mr-2 shadow-md border border-transparent"
          type="text"
          id="todoInput"
          name="todo"
          placeholder="What do you need todo"
          value={this.state.todo}
          onChange={(e) =>
            this.setState({
              ...this.state,
              [e.target.name]: e.target.value,
            })
          }
        />
        <div className="flex sm:flex-initial sm:justify-end sm:w-auto w-full justify-between items-center">
          <input
            className="cursor-pointer transition transition-colors ease-in-out hover:bg-green-600 hover:border-green-600 flex-1 sm:flex-initial self-stretch p-2 bg-green-500 text-white mr-2 rounded-md shadow-md border border-green-500"
            type="submit"
            value="Add Todo"
          />
          <button
            className="cursor-pointer transition transition-colors ease-in-out hover:bg-red-600 hover:border-red-600 sm:flex-initial flex-1 p-2 bg-red-500 text-white rounded-md shadow-md border border-red-500"
            onClick={this.props.clearTodos}
          >
            Clear Completed Todos
          </button>
        </div>
      </form>
    );
  }
}
