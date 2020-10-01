import React from "react";

class TodoForm extends React.Component {
constructor(){
    super();
    this.state = {
        newItem: ""
    };
};
handleChange = (e) => {
    this.setState({...this.state, newItem: e.target.value})
};
submitItem = (e) => {
    e.preventDefault();
    this.setState({...this.state, newItem: ""});
    // this.props.addItem(this.state.newItem);
};
render(){
    return(
        <>
        <form onSubmit={this.submitItem}>
            <input type="text" name="newItem" placeholder="New Todo" value={this.state.newItem} onChange={this.handleChange}/>
            <button onClick={() => this.props.addItem(this.state.newItem)} className="add-item">Add New Item</button>
        <button onClick={this.props.clearCompleted} className="clear-items">Clear Completed Item(s)</button>
        </form>
        </>
    )
}

}

export default TodoForm;
