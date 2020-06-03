import React from "react";

const itemList = props => {
return (
<div className="items">
    <p>{props.item.task}</p>
</div>
)
}

export default itemList;