import React, { Component } from 'react';

class ToDoList extends Component {
 constructor() {
   super();
   this.state = {
     items: [],
     listItems: ''
   };
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