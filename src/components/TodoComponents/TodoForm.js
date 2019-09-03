import React from "react"; 


class ListForm extends React.Component {
    constructor(props) {
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
                <input type="text" 
                placeholder="enter todo here" 
                value={this.state.item} 
                name="item" 
                onChange={this.handleChange}
                 /> 
                 <button> Submit </button>
                 <button onClick={this.props.clearRender}> Clear </button>
            </form>
            )
        }
    }

    export default ListForm; 
    

