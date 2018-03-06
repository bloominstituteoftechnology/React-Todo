import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {
    constructor() {
        super();
        
        this.state = {
          list: [
              {
                text: 'eat food',
              },
              {
                text: 'code javascript',
              }
          ],
          newList: '',
        };
    }

    handleItem = (event) => {
        this.setState({ newList: event.target.value });
        //console.log(newList.text);
    };

    addItem = (event) => {
        event.preventDefault();
        const newItem = {
          text: this.state.newList,
          completed: false,
        };
        const updatedList = [...this.state.list, newItem];
        this.setState({
            newList: '',
            list: updatedList,    
        });
    };

    render () {
        return (
            <div>
              {this.state.list.map(item => <Todo data={item.text} />)}
              <form onSubmit={this.addItem}> 
                <input type="text" onChange={this.handleItem}
                  placeholder="Add a new Todo" value={this.state.newList}/>
                </form>
            </div>
        );
    }
}

export default TodoList;