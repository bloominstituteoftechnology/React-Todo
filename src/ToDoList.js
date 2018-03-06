import React, { Component } from 'react';
import Completed from './Completed';

class ToDoList extends Component {
 constructor() {
   super();

   this.state = {
     itemsList: [
         'be pretty',
     ],
     newItem: '',
   };
 }

 handleListInput = event => {
     this.setState({ newItem: event.target.value });
 };
 addItem = event => {
     event.preventDefault();
     const list = this.state.list;
     list.push(this.state.newItem);
     this.setState({
         newItem: '',
         itemsList: list
     });
    };

    render() {
        return (
            <div>
            {this.state.list.map(item => <Completed itemKey={item} />)}
                <form onSubmit={this.addItem}>
                <input 
                type="text"
                onChange={this.handleListInput}
                placeholder="Add a new item"
                value={this.state.newItem}
                />
            </form>
        </div> 
        );

    }
}

//  addlistItems = (event) => {
//    event.preventDefault();
//    const listItems = this.state.items;
//    listItems.push(this.state.newItems);
//    this.setState({
//      newListItems: '',
//      items: listItems
//    });

//  handleItemsInput = (event) => {
//    this.setState({ newItems: event.target.value });
//  }
export default ToDoList;