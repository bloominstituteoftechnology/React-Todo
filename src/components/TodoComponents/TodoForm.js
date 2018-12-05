import React from 'react';

const Input = props => {
    return (
        <form>
            <input placeholder="" />
        </form>
    )
}

const AddButton = props => {
    return (
        <button>Add Todo</button>
    )
}

const ClearButton = props => {
    return (
        <button>Clear</button>
    )
}

const TodoForm = () => {
    return (
        <div>
            <Input />
            <AddButton />
            <ClearButton />
        </div>
    )
}
export default TodoForm;