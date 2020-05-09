import React from "react";

class TodoForm extends React.Component {


    constructor(){
        super();
        this.state = {

                newListName: ""

        };

    }


    handleChanges = e => {

            e.preventDefault();
            this.setState({

                newListName: e.target.value

            });
    };

    handleSubmit = e => {

        e.preventDefault();
      

this.props.addNewList(this.state.newListName);
        };
   


    render() {

        return(


            <form className="w3-card" onSubmit={this.handleSubmit}>

                <input
                type="text"
                name="list"
                value={this.state.newListName}
                onChange={this.handleChanges}
            />

            <button className="w3-button w3-green">Add</button>

            </form>

        );
    }

}

export default TodoForm;