import React from 'react';

const Input = props => {
    return (
        <form>
            <input id="todo-input" placeholder="" />
        </form>
    )
}

const AddButton = props => {
    return (
        <button onClick={props.addItem}>Add Todo</button>
    )
}

const ClearButton = props => {
    return (
        <button>Clear</button>
    )
}

const TodoForm = (props) => {
    return (
        <div>
            <Input />
            <AddButton addItem={props.addItem}/>
            <ClearButton />
        </div>
    )
}
export default TodoForm;