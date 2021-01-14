import React, { Component } from 'react';

export default class TodoSearch extends Component {
  render() {
    return (
      <div className="flex">
        <input
          className="focus:border-light-blue-300 focus:ring-1 focus:ring-light-blue-300 focus:outline-none mb-2 sm:mb-0 self-stretch flex-1 p-2 rounded-md sm:mr-2 shadow-md border border-gray-300"
          type="text"
          placeholder="Search Todo"
          value={this.props.searchInput}
          onChange={(e) => {
            e.preventDefault();
            this.props.updateSearchInput(e.target.value);
          }}
        />
        <button className="cursor-pointer transition transition-colors ease-in-out hover:bg-red-600 hover:border-red-600 sm:flex-initial flex-1 p-2 bg-red-500 text-white rounded-md shadow-md border border-red-500">
          Clear
        </button>
      </div>
    );
  }
}
