import React from "react";


const ListOfThings = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.newTask}</h1>
            {props.toDoList.map((task, index) => <div key={index + task} >{task}</div>)}
        </div>
    );
}
export default ListOfThings;