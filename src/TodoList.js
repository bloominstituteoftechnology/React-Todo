import React, { Component } from "react";

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            list: ["Clean Bathroom", "Clean Living Room", "Do dishes", "Clean bedroom","Sweep", "Mop"],
            moreChores: ""
        };
    }

    addMoreChores = (event) => {
        event.preventDefault();
        const choreList = this.state.list;
        choreList.push(this.state.moreChores);
        this.setState({
            moreChores: "",
            list: choreList
        });
    }

    // fininshedChore = (event)

    handleMoreChores = (event) => {
        this.setState({ moreChores: event.target.value });
    }

    render() {
        return (
            <div>
                {this.state.list.map((list, index)  => <div key={index}>{list}</div>)}
                <form onSubmit={this.addMoreChores}>
                <input
                 type = "text"
                 onChange = {this.handleMoreChores}
                 placeholder = "What else is left?"
                 value = {this.state.moreChores}
                 />
                 </form>
            </div>
        )
    }
}

export default TodoList;