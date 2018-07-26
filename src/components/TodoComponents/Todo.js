import React from 'react';
import {Card, Col} from 'react-materialize'; 
import './Todo.css'

 

const Todo = props => {
    
    return (
        <div className = "todo">
            <Col m={12} s={12}>
                <Card className = " card teal darken-1"  textClassName = "white-text" >
                    <p key = {props.key} onClick = {props.click} completed = {props.complete}>{props.task}</p>
                </Card>
            </Col>
        </div>
    )
   
}

export default Todo; 