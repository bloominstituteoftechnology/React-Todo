import React from "react";

const Item = props => {
    console.log(props)

  


    return (
        <div
            onClick={() => props.toggleItem(props.item)}
            // className={`item${props.item.purchased ? " purchased" : ""}`}
        >
            <p>{props.item}</p>
        </div>
    );
};


export default Item;
