import React from "react";

class ToDoForm extends React.Component {
    constructor(){
        super()
        this.state= {
            listname: ""
        }
    }
        handleChanges = (e) => {
            this.setState({
                listname: e.target.value
            })
        }
        
    
        handleSubmit = (e) => {
            e.preventDefault()
            this.props.addItem(this.state.itemName)
            this.setState({ itemName: "" })
        }
        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name="item"
                    onChange={this.handleChanges}
                    value={this.state.itemName}
                    />
                <button>Add</button>
                </form>
            )
        }
        }

export default ToDoForm