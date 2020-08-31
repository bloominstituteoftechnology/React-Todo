import React from "react";



class TodoForm extends React.Component {



    render() {
        return(
            <div className="todo-form">
                <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                name="todoInput"
                placeholder="...todo"
                onChange={this.handleChange}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
                </form>
            </div>
        )
    } 
}

export default TodoForm;