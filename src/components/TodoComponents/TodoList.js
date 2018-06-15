// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react' ;
import TodoToggle from './TodoToggle' ;

let myDate = Date.now() ;

// PASSING (PROPS) TO TodoList
const TodoList = (props) => {
    return(
        <div>
            
            {/* <ul>
                {props.myPropsData.ogArr.map(bananas => {
                    return (
                            <li key = {myDate++}>
                            {bananas.task}
                        </li>
                    )
                })}
            </ul> */}

            {props.myPropsData.ogArr.map(bananas => (
                <TodoToggle 
                    secondPropToggleTaskComplete={props.propToggleTaskComplete}
                    key = {myDate++}
                    yetAnotherTodo = {bananas}
                />

            ))}


        </div>
    )
}
export default TodoList ;




