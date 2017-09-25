import React, {Component} from 'react';

class Task extends Component {
    constructor(props){
        super(props);
        this.id = this.props.id;
        this.name = this.props.name;
        this.info = this.props.info;
        this.remove = this.remove.bind(this);
        this.index = props.index + 1;
    }
    remove() {
        if(window.localStorage.length === 1) {
            window.localStorage.clear();
            
        } else {
            window.localStorage.removeItem('task'+ this.id);
        }
        window.location.reload();
    }
    render(){
        return(
            
            <div className="task">
            <div className="task_index"><span>{this.index}</span></div>
            <div className="task_name"> { this.name.toUpperCase()}</div>
            <div className="task_info"> {this.info}</div>           
            <button onClick={this.remove}>Remove</button>
            {/* <button>Mark As Done</button> */}
            </div>
        );
    };
}
export default Task;