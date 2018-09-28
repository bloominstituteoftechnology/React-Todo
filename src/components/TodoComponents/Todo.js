//todo component
import React from "react";
const ToDo= (props)=>{
    return(
<li key={props.id}>
        {props.item}
</li>
    )
}

export default ToDo;