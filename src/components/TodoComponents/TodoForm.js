import React from 'react';

class Form extends React.Component {
    constructor(){
        super();
        this.state={};
    }
    render(){
        return(
            <div>
                <input onChange={this.handleInput} />
                <button>Add todo</button>
                <button>Clear Completed</button>
            </div>
        )
    }
}

export default Form;