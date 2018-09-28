import React from "react";

const TodoForm=()=>{
    return(
        <form onSubmit={this.clickHandler}>
        <div>
            <input onChange={this.handleInput}
            value={this.state.textInput} />
            <button >Submit</button>
        </div>
        </form>
    )
}

export default TodoForm;