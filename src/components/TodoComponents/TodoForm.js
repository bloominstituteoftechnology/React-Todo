import React from 'react';


const TodoForm= () => {
    return (
        <div>
            <input
                typer="text"
                onChange={this.changeToDoHandler}
                placeholder="add item"
                //value={this.state.TodoForm}
            /> 
        </div>
    );
};

export default TodoForm;