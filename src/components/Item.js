import React from "react";

const Item = props => {
    console.log(props)
    const { item } = props;

  


    return (
        <div
            onClick={() => props.toggleItem(item)}
            // className={`item${props.item.purchased ? " purchased" : ""}`}
        >
            <p>{props.item}</p>
        </div>
    );
};


export default Item;
