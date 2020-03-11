import React from 'react';

export default class ToDoSearch extends React.Component {


    render() {
        return (
            <form onSubmit={this.addTodo}>
                <input
                    type="text"
                    name="searchTerm"
                    value={this.props.searchTerm}
                    onChange={e => this.props.setSearchTerm(e)}
                    placeholder="Type in to search"
                />
            </form>
        )    
    }
    
}