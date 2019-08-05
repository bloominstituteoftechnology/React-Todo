import React from "react"; 

class ListForm extends React.Component {
    constructor() {
        super(); 
        this.state = {
            item: ""
        }
    }

handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

submitItem = event => {
    event.preventDefault(); 
    this.props.addToDo(this.state.item)
}

    render() {
        return(
            <form onSubmit={this.submitItem}> 
                <input type="text" placeholder="enter todo here" value={this.state.item} name="item" onChange={this.handleChange}  /> 
            </form>
            )
        }
    }

    export default ListForm; 
    

