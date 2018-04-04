import React from "react";

const ItemsList = props => {
    return (
        <div>
        <h1>{props.newListItem}</h1>
        {props.listItems.map((listItem, index) => (
            <div key={listItem + index}>{listItem} </div>
        ))}
        </div>
    );
};


export default ItemsList;