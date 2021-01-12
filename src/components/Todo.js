import React from 'react'

const Todo = ({task, id, handleItemToggle, completed}) => {

    const handleClick = () => {
        handleItemToggle(id);
    }

return (
<div onClick={handleClick} className={`item${completed ? 'completed' : ''}`}>
{task}
</div>
)
}

export default Todo;