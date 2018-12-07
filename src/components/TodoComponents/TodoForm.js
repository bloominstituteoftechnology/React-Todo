import React from "react";
import "./Todo.css";

class TodoForm extends React.Component{
         constructor(props){
           super(props);
           this.state={

              inputText:""

           };


         }
    changeHandler=event=>{

      this.setState({inputText:event.target.value}) ;
    }


    submitHandler= event=>{
             event.preventDefault();
           this.props.submitfn(this.state.inputText);
           this.setState({inputText:""});

         }

 render() {
     return( 

     <form onSubmit={this.submitHandler}>
         <input
             type="text" placeholder="...todo"
             onChange={this.changeHandler}/>
         <button type="submit" className="add"> Add Todo</button>
         <button className="clear" onClick={this.props.clearHandler}>Clear Todo</button>

     </form>

     );
 }
}

export default TodoForm