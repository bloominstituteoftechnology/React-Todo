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
    constructor(){
        super();
        this.state = {clicked:false};
    }
    handleClick = () =>{
        this.setState({clicked:true});
    }

    render(){
        const styles = this.state.clicked ? {textDecoration:'line-through'}:{textDecoration:'none'};
        return (
            <div style = {styles} onClick={this.handleClick}>
                {this.props.todo}
            </div>
        );
    }
}

export default Todo;