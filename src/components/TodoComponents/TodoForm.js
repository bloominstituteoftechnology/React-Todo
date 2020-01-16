// import React from "react";

// class TodoForm extends React.Component{
 
//     constructor (){
//         super()
//         this.state={
//             newTask: ""
//         }
//     }
    
//     handleInputChange=e=>{
//         this.setState({...this.state, newTask: e.target.value})
//     }

//     handleSubmit =e=>{
//         e.preventDefault();
//         this.props.addNewItem(this.state.newTask)
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                 onChange={this.handleInputChange}
//                 type="text"
//                 name="ToDo"
//                 value={this.state.newTask}
//                 />
                
//                 <button> Add</button>

//             </form>
//         )
//     }
// }

// export default TodoForm;