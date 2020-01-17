import React from 'react';
import './Todo.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            task: ""
        }
    }

    submit() {

        let todo = this.state.task;

        this.setState({//clear state
            task: ""
        }
        );

        console.log("IN SUBMIT", todo)

        return todo;
    }


    render() {
        return (
            <div className='form-list'>
                <form>
                    <label>
                        <input type="text" value={this.state.task} placeholder="What you gotta do...." onChange={(event) => {console.log("SETTING STATE TASK TO ", event.target.value); this.setState({task: event.target.value})}}/>
                    </label>
                </form>
                <button className='button-a' onClick={(event) => { event.preventDefault(); this.props.newTodo(this.submit()) }}>Submit</button>
                <button className='button-b' onClick={(event) => { event.preventDefault(); this.props.clearCompleted()}}>Clear Completed</button>
            </div>
        );
    }
}

export default App;