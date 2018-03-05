import React, { Component } from 'react';

class ClassToDoList extends Component {
    constructor() {
        super ();
        this.state = {
            toDoTask: ['make to do list', 'sumbit pr', 'praise hallelujah'],
            newTask: ''
        };
    }


    render() {
        return (
            <div> 
                {this.state.toDoTask.map(toDoTask => <div>{toDoTask}</div>)}
                <form onSubmit={this.newTask}>
                    <input type="text" placeholder="Add a new task" value={this.state.newTask}/>
                    </form>
            </div>
        )
    }
}
export default ClassToDoList;