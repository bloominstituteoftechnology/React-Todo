import React, { Component } from 'react';

class Items extends Component {
    constructor() {
        super();
        this.state = {
            finished: false
        }
    }

    handleClick = () => {
        this.setState({
            finished: !this.state.finished
        });
    }

    onSubmit = (event, i) => {
        this.props.item.splice(i, 1);
    }

    render() {
        return (
            <form className="items" onSubmit={this.onSubmit}>
                <label className={this.state.finished === true ? "listItem" : "listItem-none"} onClick={this.handleClick}>
                    {this.props.item}
                </label>
                <button>Remove</button>
            </form>
        );
    }
}

export default Items;