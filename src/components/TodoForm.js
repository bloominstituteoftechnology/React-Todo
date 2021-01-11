import React from "react";

class TodoForm extends React.Component {

  render() {
    return (
    <div className="my-4">
        <form onSubmit={this.props.addTodo}>
        <input type="text" id="task" name="task" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"></input>
      <button className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Add Todo</button>
      <button onClick={this.props.clearTodos} className="bg-white py-2 px-4 ml-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Clear</button>
      </form>
    </div>
    )}
}

export default TodoForm;
