import React from 'react';

import './Todo.css';


class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText : ""
    }
  }

  //function to keep track of the text in the search input field
  saveInputHandler = (event) => {
    this.setState({inputText: event.target.value});
  }

  //Function to handle clicking on Clear Search button
  clearSearch = (event) => {
    event.preventDefault();
    this.setState({inputText: ""});
    this.props.clearSearch();
  }

  //Function to handle clicking on Search button
  searchTodo = (event) => {
    event.preventDefault();
    const text = this.state.inputText.slice();
    this.props.searchTodo(event, text);
  }

  render() {
    return (
      <form className="search" onSubmit={this.searchTodo}>
        <input type="text" placeholder="Search todo list" value={this.state.inputText} onChange={this.saveInputHandler}/>
        <button type="submit">Search</button>
        <button onClick={this.clearSearch}>Clear Search</button>
      </form>
    );
  }
};

export default TodoSearch;