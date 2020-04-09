import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }
    }

    onChangeValue = event => {
        this.setState({
            value: event.target.value
        })
        this.props.searchItems(event.target.value);
    }
    render() {
        return (
            <div>
                <input onChange={this.onChangeValue} />
            </div>
        )
    }
}

export default SearchBar; 