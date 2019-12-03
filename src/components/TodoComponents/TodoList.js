// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
// import { Button } from 'semantic-ui-react'
import Todo from './Todo'
import styled from 'styled-components'

const DeleteButton = styled.button`
    /* background: #DE7E44;
    border-radius: 25px;
    height: 50px;
    width: 130px;
    margin-top: 2%;
    outline: 0;
    border: 2px solid white;
    color: white;
    font-size: 1.03rem; */
`;

class TodoList extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div className ='todo-list'>
                {this.props.data.map(task => (
                    <Todo
                        key={task.id} 
                        id={task.id}
                        task={task.task}
                        completed={task.completed}
                        toggleTask={this.props.toggleTask}
                    />
                ))}
                <DeleteButton onClick={this.props.clearCompleted}>Delete Tasks </DeleteButton>
        </div> 
        ); 
    }
}; 

export default TodoList;


