import React, { Component } from 'react'

export default class TodoForm extends Component {
  
   constructor() {
       super()
       this.state ={
           item: ""
       }
   }

   handleChanges = e => {
    this.setState({
      item: e.target.value
    });
  };
   
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.item);
    this.setState({
      item: ""
    });
  };
    render() {
        return (
            <div>
                <form action=""  onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                    />
                    <button>Add Todo</button>
                    <button onClick={()=>this.props.deleteItem}>Clear Completed</button>
                </form>
            </div>
        )
    }
}
