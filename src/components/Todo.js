// import React, { Component } from 'react'

// class TodoChildComponent extends Component{
//     constructor(){
//         super();
//         this.state = {clicked:false};
//     }
//     handleClick = () =>{
//         this.setState({clicked:!this.state.clicked});
//     }

//     render(){
//         const styles = this.state.clicked ? {textDecoration:'line-through'}:{textDecoration:'none'};
//         return (
//             <div style = {styles} onClick={this.handleClick}>
//                 {this.props.thing}
//             </div>
//         );
//     }
// }

// export default TodoChildComponent;

import React, { Component } from 'react'

class Todo extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {'text':props.text,'completed':props.completed};
    }
    handleClick = () =>{
        this.setState({completed:!this.state.completed});
    }
    render(){
        const styles = this.state.completed ? {textDecoration:'line-through'}:{textDecoration:'none'};
        return (
            <div>
                <span style = {styles} onClick={this.handleClick}>
                    {this.props.todo.text}
                </span>
                <button onClick={()=>{this.props.delete(this.props.index)}}>X</button>
            </div>
        );
    }
}

export default Todo;