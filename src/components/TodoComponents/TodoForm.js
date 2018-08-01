import React from "react";

const TodoForm = props => {
    return (
        <div>
            <input placeholder ="...todo" onChange={this.handleInputChange}/>
            <button onClick={this.handleUpdateState}>Add ToDo</button>
            <button>Clear Completed</button>
        </div>
    );
};


export default TodoForm;