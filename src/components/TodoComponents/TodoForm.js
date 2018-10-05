import React from 'react';

const TodoForm = props => {
    return(
        <div>
            {props.listData.map(item => {
            return <h2>{item.listItem}</h2>
        })}
            <form onSubmit={props.addnewListItem}>
                <input 
                    type="text"
                    name="newListItem"
                    onChange={props.changeHandler}
                    value={props.newListItem}
                    placeholder="todo..."
                />
                <button type="submit" onClick={props.addNewListItem}>Add To Do</button>
            </form>
        </div>
    );
}
export default TodoForm;