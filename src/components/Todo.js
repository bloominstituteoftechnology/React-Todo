import React from "react";
import { render } from "@testing-library/react";

const Todo = props => {
return (
<div className="items-list">
    <p>{props.item.task}</p>
</div>
)
}

export default Todo;