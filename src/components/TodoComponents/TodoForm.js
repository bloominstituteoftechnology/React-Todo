import React from 'react';


const TodoForm= props => {
    return (
        <div>
            <input
                typer="text"
                onChange={this.changeToDoHandler}
                placeholder="add item"
                value={props.items}
            /> 

            <button onClick= {this.addItem}>Add Item</button>
            <button onClick= {this.clearItem}>Clear Item</button>
        </div>
    );
};

export default TodoForm;