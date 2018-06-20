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

            <button onClick= {this.addItem}>Add Item</button>
            <button onClick= {this.clearItem}>Clear Item</button>
        </div>
    );
};

export default TodoForm;