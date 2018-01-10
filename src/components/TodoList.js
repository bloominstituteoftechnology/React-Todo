import React from 'react';
import { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            term: '',
            items: ['Add a new task to your to-do list']
        };
    }

    onChange = event => {
        this.setState({
            term: event.target.value
        })
    }

    onSubmit = event => {
        event.preventDefault();
        const items = this.state.items;
        const term = this.state.term;
        items.push(term);
        this.setState({
            items,
            term: ''
        });
    }

    render() {
        return (
            <div>
                <form className="todoList" onSubmit={this.onSubmit}>
                    <input placeholder="enter task" value={this.state.term} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
                {this.state.items.map((item, i) => {
                    return <Todo key={i} item={item}/>
                })}
            </div>
        );
    }
}

export default TodoList;
