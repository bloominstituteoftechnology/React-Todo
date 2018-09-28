import React from "react";

const TodoForm=()=>{
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
            <input></input>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TodoForm;