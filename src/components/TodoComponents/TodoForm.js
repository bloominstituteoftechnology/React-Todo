import React from "react";
import Todo from "./Todo";
// import App from './public/src/App';
const TodoForm = props => {
    return (
        <div>
            <Todo />
        <h1>"TodoForm"
        </h1>
        <input
        type="text"
        placeholder="...todo"
        // value={this.state.greeting}
        />
        <button >Add Todo </button>
        <button >Clear Completed </button>
        </div>
    );
  };
  
  export default TodoForm;