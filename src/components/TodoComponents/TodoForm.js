import React from 'react';

class Todoform extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            newtodo: ""

        };

    }


    handleChange = e => {
        this.setState({[e.target.name]:
                        e.target.value
        })
    }

    handleSubmit = e => {

        e.preventDefault();
        this.props.addTodo(this.state.newtodo);
        // clear value of input below
        this.setState({newtodo: ""});
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input  type="text" 
                        name="newtodo" 
                        placeholder="...todo"
                        onChange={this.handleChange}
                        value= {this.state.newtodo}
                        />

                <button type="submit">Add Todo</button>
            </form>
        )
    }



}


export default Todoform;