import React from "react";


function ToDo(props) {
        return <li onClick ={() => {props.compItem(props.items.id)}}>{props.items.text}</li>
}
  
export default ToDo ;

