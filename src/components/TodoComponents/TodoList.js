import React from 'react';
import Todo from "./Todo";

const TodoList = props => {

       {console.log(props.chores)}
        
        return (
          <div>
            {props.chores.map(item => {
              return <Todo key={item.id} chores={item} toggleItem={props.toggleItem}/>
            })}
            {!props.changed && <button className="clear-button" onClick={props.clearCompleted}>Clear Form</button>}
          </div>
        );

};

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default TodoList;