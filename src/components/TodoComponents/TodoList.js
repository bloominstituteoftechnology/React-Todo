// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

let myDate = Date.now() ;


// PASSING (PROPS) TO TodoList
const TodoList = (props) => {
    return(
        <div>
            {/* CALLING PROPS DATA */}
            {/* <h3>{props.myPropsData[0].name}</h3> */}
            {/* <h3>{props.myPropsData.ogArr[0].name}</h3> */}

            {/* 
            <ul>
                {props.myPropsData.map(bananas => {
                    return (
                        // <li key={Date.now() + (Math.random() )} >
                            <li key = {myDate++}>
                            {bananas.name}
                        </li>
                    )
                })}
            </ul> 
            */}

            <ul>
                {props.myPropsData.ogArr.map(bananas => {
                    return (
                            <li key = {myDate++}>
                            {bananas.name}
                        </li>
                    )
                })}
            </ul>


        </div>
    )
}
export default TodoList ;
{/* <li key={Date.now() + (Math.random() )} > */}
