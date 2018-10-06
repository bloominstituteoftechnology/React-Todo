import React from 'react';

const TodoForm = props => {
    return(
        <div>
            {props.listData.map((item, index) => {
                return (
                    <h1
                    key={index}
                    onClick={() => props.crossOut(index)} 
                    className={item.completed}                   
                    >
                    {item.listItem}
                    </h1>
                )
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
                <button type="submit">Clear Completed</button>
            </form>
        </div>
    );
}
export default TodoForm;