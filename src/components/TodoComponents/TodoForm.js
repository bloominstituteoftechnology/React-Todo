
import React, {Component} from 'react'

import {Button, TextField} from '@material-ui/core'

class TodoForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                <TextField type="text" variant="outlined" name="task" onChange={this.props.onChange} value={this.props.value}/>
                <br></br>
                <Button variant="contained" color="red" type="submit">
                    Add New Task
                </Button>
                <br></br>
                <Button variant="contained" color="red" onClick={this.props.onClick}>
                    Clear Completed Tasks
                </Button>
                </form>
            </div>
        )
    }
}

export default TodoForm;