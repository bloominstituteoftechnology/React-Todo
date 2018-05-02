// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: JSON.parse(localStorage.getItem("items")),
            item: "",
            hidden: false,
        }
        // this.newLoad()
    };
    render() {
        // console.log(this.state.items)
        return (
            <div className="wrapper">
                <h1>This is an awesome ToDo List!</h1>
                <h6>Did you complete a Todo? Congrats! Simply click on it to make it disappear!</h6>
                <input
                    name="item" // should be known as the state.value of the thing we update
                    onChange={this.handleNewItem}
                    value={this.state.item} // should be bound to the state.value of thing we update
                    placeholder="Want to add an Item?"
                />
                <button className="btn btn-primary" onClick={this.handleItemSubmition}>Yes Please!</button>
                <button className="btn btn-primary hidden" onClick={this.hideCompleted}>Hide Completed!</button>
                <div className="todos">{this.state.items.map((todo, i) => {
                    // console.log(todo);
                    return <Todo key={i} todo={todo.item} text={todo.item} />
                }
                )}
                </div>
            </div>
        )
    }
    // newLoad = () => {
    //     if (JSON.parse(localStorage.getItem("items")) !== null) {
    //         console.log(localStorage)
    //         this.setState({ items: JSON.parse(localStorage.getItem("items")) })
    //     }
    // }
    handleNewItem = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }
    handleItemSubmition = () => {
        const items = this.state.items;
        const item = { item: this.state.item, id: items.length }
        items.push(item)
        this.setState({ items: items, item: "" })
        localStorage.setItem("items", JSON.stringify(this.state.items));
    }
    hideCompleted = () => {
        let myTodos = document.querySelectorAll(".listElement")
        myTodos.forEach((item) => {
            if (item.attributes.style.nodeValue === "text-decoration: line-through;") {
                item.classList.toggle("hide")
            }
        })
        this.setState({ hidden: !this.state.hidden })
        console.log(this.state)
        const hideBtn = document.querySelector(".hidden")
        if (this.state.hidden === false) {
            hideBtn.innerText = "Show Again!"
        } else {
            hideBtn.innerText = "Hide Completed!"
        }
    }
}// const TodoList = props => {
//     console.log(props)
//     return (
//         <div className="List">
//             <Todo items={props.items} />
//         </div>
//     )
// }

export default TodoList;