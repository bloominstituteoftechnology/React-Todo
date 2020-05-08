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


    render() {

        return(


            <form onSubmit={this.handleSubmit}>

                <input
                type="text"
                name="list"
                value={this.state.newListName}
                onChange={this.handleChanges}
            />

            <button>Add</button>

            </form>

        );
    }

}

export default TodoForm;