import React from 'react'

class SearchForm extends React.Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    searchList = event => {
        event.preventDefault()
        this.props.searchItems(this.state.search)
    }

    render() {
        return (
            <form onSubmit={this.searchList}>
            {/* <form> */}
                <input
                    type='text'
                    placeholder='Search list for...'
                    value={this.search}
                    name='search'
                    onChange={this.handleChanges}
                />
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchForm