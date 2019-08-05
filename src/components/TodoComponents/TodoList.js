// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card, Container, Button } from 'semantic-ui-react'
const TodoList = props => {
    return (
        props.task.map(item => (<Container><Card><Card.Header>{item}</Card.Header><Card.Meta><Button onClick={props.Remove}>Cancel</Button></Card.Meta></Card></Container>)))
}

export default TodoList;