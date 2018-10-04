import React from 'react';
class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        let newItem = this.refs.item.value;
// console.log(newItem);
        if(newItem){
            this.props.addTodo(newItem);
            this.refs.form.reset();
        }

        
    }
        render(){
        return (
          <div>
              <form ref="form" className="AddTodo" onSubmit={this.onSubmit}>
                 <input type="text" ref="item" placeholder="Add Todo" ></input>
                <button type="submit">Add Todo</button>
                <button onClick={this.props.deleteItem}>Clear Completed</button>
            </form>
           </div>
        );
        }
}

export default TodoForm;