import React from 'react'

const Obj = props => {
    return (
        <div className={`obj${props.obj.completed ? ' Completed' : ''}`}>
            <p>{props.obj.name}</p>
        </div>
    )
}

export default Obj;