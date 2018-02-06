import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            newItem: '',
            items: [],
        };

        this.addItem = this.addItem.bind(this);
    }

    handleChange = (event) => {
        this.setState({newItem: event.target.value});
    }

    addItem = (event) => {
        event.preventDefault();
        const list = this.state.items;
        list.push(this.state.newItem);
        this.setState({newItem: '', items: list});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <label>
                        Need to do:
                        <textarea value={this.state.newItem} onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='Submit' />
                </form>
                {this.state.items.map((item, i)  => {
                    return (
                        <div key={i} className='todo-item'>
                            <Todo item={item} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default TodoList;