import React from "react";
import ToDo from "./Todo"

function TodoList(props) {
    return <ul>{props.list.map(item => <ToDo items={item} key={item.id} compItem={props.completeItem} />)}</ul>;
}
  
export default TodoList;

