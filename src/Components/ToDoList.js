import React from 'react';
import Todo from './Todo';

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            storedList: [],
            newEntries: ''
        };
    }

    handleEntry = (event) => {
        this.setState({ newEntries: event.target.value });
    }

    addEntry = (event) => {
        event.preventDefault();
       const EntryList = this.state.storedList;
       EntryList.push(this.state.newEntries);
        this.setState({
            storedList: EntryList,            
            newEntries: ''
        })
    }

    render() {
        return (
            <div>
                {this.state.storedList.map(entry => <Todo thing={entry} />)}
                <form onSubmit={this.addEntry}>
                    <input type="text"
                    onChange={this.handleEntry}
                    placeholder="Add a new entry"
                    value={this.state.newEntries}
                    />
                </form>
            </div>
        )
    }
}

export default ToDoList;