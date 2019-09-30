import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            query: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitQuery = e => {
        e.preventDefault();
        this.props.searchList(this.state.query);
        this.setState({
            query: ''
        })
    };

    render(){
        return(
            <div>
                <form onSubmit={this.submitQuery}>
                    <input
                        type="text"
                        value={this.state.query}
                        name="query"
                        onChange={this.handleChanges}
                    />
                    <button type="submit">Search</button>
                </form>
                <button onClick={this.props.clearSearch}>Clear Search</button>
            </div>
        );
    }
}


export default SearchForm;