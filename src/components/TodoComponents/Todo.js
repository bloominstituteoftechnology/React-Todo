  
import React, {Component} from "react"

import {FormControlLabel, Checkbox} from '@material-ui/core'

class Todo extends Component {

    render() {
        console.log(this.props.tasklist.task)
        return (
            <div className = "todo-list">
                <FormControlLabel control={<Checkbox onChange={() => this.props.onCheck(this.props.tasklist.id)}/>} label={this.props.tasklist.task} 
                />
            </div>
        )
    }
}

export default Todo;