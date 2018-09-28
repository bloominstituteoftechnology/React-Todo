//todo component
import React from "react";
//being passed in as props.item

const ToDo= (props)=>{
    return(
<li key={props.item.key}>
        {props.item.task}
</li>
    )
}

export default ToDo;