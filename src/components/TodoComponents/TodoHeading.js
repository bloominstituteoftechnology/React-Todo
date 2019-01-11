import React from 'react'

const TodoHeading = (props) => {
    if(props.data.length === 0) {
        return (
            <p>Add a to do item</p>
        )
    } else {
        return null
    }
    
}

export default TodoHeading;