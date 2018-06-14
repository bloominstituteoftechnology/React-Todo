// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

let myDate = Date.now() ;

// PASSING (PROPS) TO TodoList
const TodoList = (props) => {
    return(
        <div>
            
            <ul>
                {props.myPropsData.ogArr.map(bananas => {
                    return (
                            <li key = {myDate++}>
                            {bananas.task}
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
export default TodoList ;

