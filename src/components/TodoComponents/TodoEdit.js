import React from 'react'
//task replace item var from exercise
//completed replace purchased in exercise
//Name var is passed via props

const TodoEdit = props => {



const submitEdit = () => {
    props.editSubmit(props.item.value)

    console.log(props.item.value)

}

return (
    <div>
    <div className='edit'>
        <input
        type='text' 
        value={props.item.name}
        onChange={event => this.editTask(event)}/>
    </div>
    <button onClick={submitEdit}>Done</button>
 </div>   
)

}
export default TodoEdit