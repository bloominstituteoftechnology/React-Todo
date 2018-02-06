import React, {Component} from 'react';

class ToDo extends Component {
    constructor() {
        super();

        this.state = {
            To_Do: [],
            newToDo: '',
        }
    }

    render() {
        return (
            <div>
                {this.state.To_Do.map(chore => <div>{chore}</div>)}
            </div>
        )
    }
}


export default ToDo;