import React from 'react';

import './Todo.css';
class SearchBar extends React.Component {
 
  render() {
    let id = 0;
    return (
      <div>
        <input type="text" onChange={this.props.update} value = {this.props.search} placeholder= 'Search Todos'/>
      </div>
      
    );
  }
}

export default SearchBar;
