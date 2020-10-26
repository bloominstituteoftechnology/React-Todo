import React from 'react'

class TodoForm extends React.Component {
   constructor () {
    super();
    this.state = ({
        input: ''
    })
   }

   onChange = (evt) => {
        this.setState({
            input: evt.target.value
        })
   }

   onSubmit = (evt) => {
        evt.preventDefault();
        this.props.submitHandler(this.state.input)
        this.setState({input: ''})
   }

   render () {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <input 
                type='text'
                value={this.state.input}
                onChange={this.onChange}
                placeholder='...To Do'
                />
                <button>Add Todo</button>
            </form>
        </div>
    )
   }
    
}

export default TodoForm
