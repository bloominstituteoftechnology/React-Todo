import React, { Component } from 'react';
import Completed from './Completed.js';

class ToDoList extends Component {
 constructor() {
   super();

   this.state = {
    itemsList: ['be pretty','eating healthy', 'walking'],
    newItem: '',
  };
}

addItem = event => {
    event.preventDefault();
    // const list = this.state.itemsList;
    // list.push(this.state.newItem);
    if (this.state.newItem !== '') {
        this.setState({
            newItem: '',
            itemsList: [...this.state.itemsList, this.state.newItem]
        });
    }   
};

handleListInput = event => {
    this.setState({ newItem: event.target.value });
};

completeFunc = index => {
    this.setState({
        selected: index
    });
}

// delete(itemsList){
//     const newState = this.state.data.slice();
//     if (newState.indexOf(itemsList) > -1) {
//       newState.splice(newState.indexOf(itemsList), 1);
//       this.setState({data: newState})
//     }
//   }


render() {
    return (
        <div>
        {this.state.itemsList.map((item, i) => <Completed itemKey={item} index={i} action={this.completeFunc} />)}
        <form onSubmit={this.addItem}>
            <input type="text" onChange={this.handleListInput} placeholder="Add a new item" value={this.state.newItem} />
        </form>
        </div>
        );
    }
}





export default ToDoList;