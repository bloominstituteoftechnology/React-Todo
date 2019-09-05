import React from "react";

const ThingsToDo = props => {
return (
<div
className={`item${props.item.completed ? " completed" : ""}`}
onClick={() => {
props.toggleItem(props.item.id);
}}
>
<p>{props.item.name}</p>
</div>
);
};

export default ThingsToDo;