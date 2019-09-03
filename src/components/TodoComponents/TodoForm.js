import React from 'react';

const TodoForm = props => {

    // sendVal = () => {
    //     this.props.parentCallback(value)
    // }
        return (
            <form className="todo-form" onSubmit={props.todoHandler}>
                {/* {Here, I need to pass the user's input value up to App as props.} */}
                <input 
                type="text" 
                name="todoName"
                placeholder="Enter To-Do"
                value={this.state.todoName}
                onChange={props.handleChange}
                >
                </input>

                <input
                type="checkbox">
                </input>

                <button 
                type="submit"
                >
                    Add To-Do
                </button>

                <button>
                Clear Completed
                </button>
            </form>
        )
}


export default TodoForm;