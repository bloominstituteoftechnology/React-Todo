// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';


const TodoList = props => {

    console.log(props) ;

    return(
        <div className="displayed-list-wrapper">
            <h3>"PLACEHOLDER: displayed-list"</h3>
            <ul className="displayed-list"></ul>
      </div>

    )
}
export default TodoList ;