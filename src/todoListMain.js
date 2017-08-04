import React, { Component } from 'react';
import ShowTodo from './showTodo';

class todoListMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
    // console.log(this.state);
  }
   handleDelete(event){
    const itemToDelete = event.target.innerText;
    const updatedTasks = this.state.items.filter((item) => {
      return item !== itemToDelete;
    });
    this.setState({items: updatedTasks})
  }

  // <input value={this.state.term} onChange={this.onChange} />
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.handleSubmit} >
          <input  value={this.state.term} onChange={this.handleChange} placeholder='Add Task...' />
          <button>Submit</button>
        </form>
        <ShowTodo
          handleDelete={this.handleDelete}
          items={this.state.items} />
      </div>
    );
  }
}


export default todoListMain;
