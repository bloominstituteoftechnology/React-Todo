import React from 'react';
import styled from 'styled-components';
import Delete from "../../img/delete.png"

const TodoStyle = styled.div `
width: 1162px;
height: 116px;
margin: 2% 0;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

.item{
cursor: pointer;
display: flex;
justify-content: space-between;
}

p{
display: flex;
align-item: center;
padding-left: 5%;
}

.delete-btn {
width: 20px;
height: 20px;
padding: 1%;
}

.item.completed {
    text-decoration: line-through;
}
`

const Todo = props => {
    const completed = props.item.completed ?  ' completed' : '';
    return (
       <TodoStyle>
        <div
        className={`item ${completed}`} 
        key={props.item.id}
        onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.task}</p>
            <img src={Delete} alt="delete" className="delete-btn" onClick={() => {props.deleteTasks(props.item.id)}}/>
                   
        </div>
        </TodoStyle>
    )
}
export default Todo;