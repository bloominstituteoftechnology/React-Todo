import React from "react"


const Todo = props => {
    const handleClick = ()=> {
      props.handleItemToggle(props.todo.id);
    }
      console.log(props)


return (

   <div onClick={handleClick} >
       <p>{props.todo.task}</p>

  </div>
)




}

export default Todo;



