import React, { Component } from "react";

class toDoItems extends Component {
    createToDos(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createToDos)

        return (
            <ul className="myList">
            {listItems}
            </ul>
        )
    }
}

export default toDoItems;