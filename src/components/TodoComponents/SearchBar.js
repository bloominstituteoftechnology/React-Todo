import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchbar: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.formPreventDefault = this.formPreventDefault.bind(this);
    }

    handleChange(event) {
        this.props.handleSearchBar(event.target.value);
        this.setState({searchbar: event.target.value});
    }

    formPreventDefault(e) {
        e.preventDefault();
      }   

    render() {
        return (
            <div className="search-bar"><p>Filter Todos:</p>
            <form onSubmit={this.formPreventDefault}>
                <input type="text" value={this.state.searchbar} onChange={this.handleChange}></input>
            </form>
            </div>
        ) 
    }
}

export default SearchBar;