import React, {Component} from 'react';

class ToDo extends Component {
    constructor() {
        super();

        this.state = {
            toDo: [],
            newToDo: '',
        }
    }

    addNewChore = (event) => {
        event.preventDefault();
        const toDo = this.state.toDo;
        toDo.push(this.state.newToDo);
        this.setState ({
            newToDo: '',
            toDo: toDo,
        });
    }

    handleNewChoreInput = (event) => {
        this.setState({ newToDo: event.target.value });
    };

    

    render() {
        return (
            <div>
                {this.state.toDo.map(chore => <div>{chore}</div>)}
                <form onSubmit={this.addNewChore}>
                <input type="text" onChange={this.handleNewChoreInput} placeholder="Add a new chore" value={this.state.newToDo} />
                </form>
            </div>
        )
    }
}


export default ToDo;