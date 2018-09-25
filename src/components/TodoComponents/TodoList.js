// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

class List extends React.Component {
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div>
                {this.state.todolist.map(newToDo => {
                    return (
                        <div key={newToDo.id}>
                            {newToDo.task}
                        </div>
                    )
                })}
            </div>
        )
    }
}