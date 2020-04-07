import React from "react"; 

class toDoForm extends React.Component {
    constructor() {
        super(); 
        this.state = ({
            choreName: '',
        }); 
    }


    handleChanges = e => {
        e.preventDefault(); 
        this.setState({
            choreName: e.target.value
        }); 
    }; 

    handleClick = e => {
        e.preventDefault(); 
        this.props.handleSubmit(this.state.choreName); 

    }; 

    render() {
        console.log("rendering chores"); 
        return (
            <form onSubmit={this.handleClick}>
                <input
                type="text"
                name="chore"
                value={this.state.choreName}
                onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default toDoForm; 