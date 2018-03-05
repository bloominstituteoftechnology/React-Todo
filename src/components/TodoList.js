import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        
        this.state = {
            list: ['eat food', 'code javascript'],
            newList: ''
        }
    }

    handleItem = (event) => {
        this.setState({ newItem: event.target.value })
    }

    addItem = (event) => {
        event.preventDefault();
        const currentList = this.state.list;
        currentList.push(this.state.list);
        this.setState({
            list: currentList,
            newList: ''
        });
    } 

    render () {
        return (
            <div>   
                {this.state.list.map(item => <div>{item}</div>)}
                <form onSubmit={this.addItem}> 
                    <input type="text" onChange={this.handleItem} placeholder="Add a new Todo" value={this.state.newList}/>
                </form>
            </div>
        );
    }
}

export default TodoList;