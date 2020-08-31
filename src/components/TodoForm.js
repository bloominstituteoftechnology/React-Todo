import React from "react";



class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ""
        }
    }
    
    
    handleChange = event => {
        this.setState({
            todo: event.target.value
        });
    };
    
    onSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todo);
    }



    render() {
        return(
            <div className="todo-form">
                <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                name="todo"
                placeholder="...todo"
                value={this.state.todo}
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