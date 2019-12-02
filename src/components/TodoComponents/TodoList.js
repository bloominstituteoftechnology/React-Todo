import React from 'react'
import Obj from './Todo'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const ObjList = props => {
    return (
        <div className='objList'>
            {props.objectives.map(obj => (
                <Obj key={obj.id} obj={obj}/>
            ))}
            <button onClick={props.clearCompleted}>
                Clear Completed
            </button>

        </div>
    )
}

export default ObjList

