import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
        state = {
            newItem: '',
            items: [],
        };

        // this.addItem = this.addItem.bind(this);

    handleChange = (event) => {
        this.setState({newItem: event.target.value});
    }

    addItem = (event) => {
        event.preventDefault();
        if(this.state.newItem !== '' && this.state.newItem !== ' ') {
            const itemLength = this.state.items.length;
            const n = {
                id: itemLength + 1,
                value: this.state.newItem,
            }
            const list = [ ...this.state.items, n];
            this.setState({newItem: '', items: list});
            console.log(itemLength, n.id);
        }
    }

    render() {
        return (
            <div className='todolist-container'>
                <form className='form' onSubmit={this.addItem}>
                    <label>
                        <div className='form-text'>Need to do:</div>
                        <textarea value={this.state.newItem} onChange={this.handleChange} />
                    </label>
                    <input className='buttons' type='submit' value='Add' />
                </form>
                {this.state.items.map((item)  => {
                    return (
                        <div key={item.id} className='todo-item'>
                            <Todo item={item.value} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default TodoList;