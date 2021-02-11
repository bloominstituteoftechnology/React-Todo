//import React
import React from 'react'


class TodoForm extends React.Component {

    constructor(){
        super();
        this.state = {
            item: ''
        }
    }

    handleChanges = e => {
        this.setState({task: e.target.value})
    };

    submitTask = e => {
        e.preventDefault();
        this.setState({item: ''});
        
    }

    render() {
        return (
            <form>
                <input 
                    type="text"
                    name="task"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
            </form>
        )
    }
}
export default TodoForm;