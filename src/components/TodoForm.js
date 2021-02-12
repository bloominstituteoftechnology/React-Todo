import React from 'react';
// todo form is created for imports and to hold all the todos and let you enter new todos
class TodoForm extends React.Component {
    constructor(){
    super()
    this.state ={
        todo: ''
    }
    }


    handleChanges = e =>{
        // takes in the information thats typed in the input 
        this.setState({todo:e.target.value})
        console.log({todo:e.target.value})
    }
// prevents the page from loading after clicking, takes in the item once the button has been clicked
    submitItem =e=> {
        e.preventDefault();
        this.setState({todo: ''})
        this.props.addItem(this.state.todo, e)
        console.log('ive been taken in')
    }

    render(){
        return(
            <div>
            <form
             onSubmit={this.submitItem}
             >
                <input 
                type= 'text'
                name= 'todo'
                value={this.state.item}
                onChange={this.handleChanges}
                />

                <button>Add</button>

            </form>
            </div>
        )
    }


}
export default TodoForm