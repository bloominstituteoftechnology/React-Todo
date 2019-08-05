// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card, Container, Button } from 'semantic-ui-react'
const TodoList = props => {

    return (
        props.task.map(item => (<Container><Card><Card.Header><h3>To DO: {item}</h3></Card.Header><Card.Meta></Card.Meta></Card></Container>)))
}

export default TodoList;