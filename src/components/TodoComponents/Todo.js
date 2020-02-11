import React from 'react'
//task replace item var from exercise
//completed replace purchased in exercise
//Name var is passed via props

const Todo = props => {
let classNames = "item";
if(props.item.completed) {
    classNames +=" completed";
}



const updateTaskComplete = () => {
    props.toggleComplete(props.item.id);
    console.log(props.item.id)
}

const editClick = () => {
    props.editItem(props.item.name)

    console.log(props.item.name)

}

const changeEdit = () => {
    props.editChange(props.item.id)
    
    console.log(props.item.id)
}

return (
    <div className='taskItemWrap'>
    <div className={classNames} onClick={updateTaskComplete}>
        <p>{props.item.name}</p>
    </div>
    <button onChange={changeEdit} onClick={editClick}>Edit</button>
 </div>   
)

}
export default Todo