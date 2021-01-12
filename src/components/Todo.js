import React from "react"


const Todo = props => {
    const handleClick = ()=> {
      props.handleItemToggle(props.todos.id);
    }
      console.log(props)


return (

   <div onClick={handleClick} >
       <p>{props.item.task}</p>

  </div>
)




}

export default Todo;



