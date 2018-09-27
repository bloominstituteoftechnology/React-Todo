import React from 'react';
import './Todo.css';

class ToDo extends React.Component{
    constructor(){
        super();

        this.state = {
            todo: [
                {
                    task: "test 1",
                    id: 1,
                    completed: false,
                },
                {
                    task: "test 2",
                    id: 2,
                    completed: false,
                },
                {
                    task: "test 3",
                    id: 3,
                    completed: false,
                }
            ]
        };

    }
    render (){
        return(
        <div className={'todoListRender'}>
        {this.state.todo.map(todo => {
            return (
            <div className={"todoItems"} key={todo.id}>
               {todo.task} 
            </div>
            )
        })}
        </div>
        )
    }
}

export default ToDo