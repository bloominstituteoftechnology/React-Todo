import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            entryList: [],
            newEntry: ''
        };
    }
    addentry = (entry) => {
        entry.preventDefault();
        entryList.push(this.state.newEntry);
        this.setState({
            newEntry: '',
            entryList: entryList
        });
    };
    newEntryInput = (entry) => {
        this.setState({newEntry: entry.target.value});
    };
    render() {
        return(
            <div>
                {this.state.entryList.map(entry => <div>{entry}</div>)}
                <form onSubmit={this.newentry}>
                <input type="text" onChange={this.newEntryInput} placeholder="Add to list!" value={this.state.newEntry} />
                </form>
                </div>
        );
    }
}

render(<App />, document.getElementById('root'));
