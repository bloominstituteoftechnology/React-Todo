// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ListItem from './Todo';
import './Todo.css';

const ItemsList = props => {
    return (
       <div className="list-wrapper">
        {props.itemsList.map(listItem => (
          <ListItem 
          key = {listItem.id}
          listItem = {listItem}
          />
        ))}
       </div> 
    );
};
export default ItemsList;