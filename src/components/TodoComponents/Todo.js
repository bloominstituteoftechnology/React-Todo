import React from 'react';
import Pending from '../Styles/Pending';
import Completed from '../Styles/Completed';

class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.toDoItem = props.item;
    }

    render() {
        return (
            <>
            {
                this.toDoItem.completed ? <Completed key={this.toDoItem.id}><span>{this.toDoItem.task}</span></Completed>
                                    : <Pending key={this.toDoItem.id}>
                                        <span>{this.toDoItem.task}</span>
                                        <button id={this.toDoItem.id} onClick={e => this.props.markComplete(e.target.id)}>Mark Complete</button>
                                    </Pending>
            }
            </>
        );
    }
}

export default ToDo;