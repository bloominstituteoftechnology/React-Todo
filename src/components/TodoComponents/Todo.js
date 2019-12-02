import React from 'react'

const Obj = props => {
    return (
        <div className={`obj${props.obj.completed ? ' Completed' : ''}`}>
            <p>{props.Obj.name}</p>
        </div>
    )
}

export default Obj;