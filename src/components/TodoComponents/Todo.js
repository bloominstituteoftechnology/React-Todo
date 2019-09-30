import React from 'react';
 
class Todo extends React.Component {
 
    render() {
        return (
            <React.Fragment >
                <td style={{ width: 10 }} className="text-center">
                    {this.props.index}
                </td>
                <td style={{ width: 15 }} className="text-center">
                    <input type="checkbox" defaultChecked={this.props.todo.isDone}  onChange={() => this.props.fooDoneDone(this.props.todo)} />
                </td>
                <td>
                    {
                        this.renderTodo()
                    }
                </td>
                <td style={{ width: 100 }} className="text-center">
                    <button onClick={() => this.props.fooDelete(this.props.todo.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
            </React.Fragment>
        );
    }
 
    renderTodo(){
        if(this.props.todo.isDone)
        return <s>{this.props.todo.value}</s>;
        else
        return this.props.todo.value;
    }
 
}
 
export default Todo;