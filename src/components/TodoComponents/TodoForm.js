import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            itemText:""
        }
    }

    changeValue = e => {
        this.setState({itemText: e.target.value})
    }
    onSub = e => {
        e.preventDefault();
        this.props.addItem(this.state.itemText);
    }
   
render(){
return(

<form>
    <input className='subVal' type='text' placeholder='Task Name' name="itemText" value={this.state.itemText} onChange={this.changeValue}></input>
    <button onClick={this.onSub}>Add</button>
    <button onClick={this.props.onClear}>Clear</button>
</form>

)
}
}

export default TodoForm;