import React from "react";

// Constructor with state
class ListForm extends React.Component {
constructor() {
super();
this.state = {
itemTask: ""
};
}

// update state with each keystroke
handleChanges = e => {
this.setState({ itemTask: e.target.value });
console.log(this.state.itemTask);
};

// class property to submit form
handleSubmit = e => {
this.props.addItem(e, this.state.itemTask);
this.setState({ itemTask: "" });
};

render() {
console.log("form working");
return (
<form onSubmit={this.handleSubmit}>
<input
type="text"
name="task"
value={this.state.itemTask}
onChange={this.handleChanges}
/>
<button>Add Thing To Do</button>
</form>
);
}
}

export default ListForm;