import React from "react";

const TodoForm = props => {
    return(
        <ul>
            <input
          type="text"
        //   onChange={this.changeGreetingHandler}
          placeholder="Add todo"
          value={props.todo}
        />
        <button onClick ={props.addTodo}>Add Todo</button>
        <button onClick ={props.clearTodo}>Clear Completed</button>
        </ul>
    );
};

export default TodoForm;