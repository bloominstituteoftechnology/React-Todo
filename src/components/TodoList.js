import React,{Component} from 'react'
import Todo from './Todo'


//Adding a  basic component 
    // const BasicComponent = () => <div> Hello, I am Jaspinder</div>

//Adding a class component 
// class TodoComponent extends Component{
//     constructor(){
//         super();
//         this.state = {somedata:10};
//     }
//     render (){
//         return (
//             <div>{ `I have some: ${this.state.somedata}`}</div>
//         )
//     }
// }

///Updating state of a class component
// class TodoComponent extends Component{
//     constructor(){
//         super();
//         this.state = {aNumber:9};
//     }
//     increment = ()=>{
//         this.setState({ aNumber: ++this.state.aNumber});
//     }
//     decrement =()=>{
//         this.setState({ aNumber: --this.state.aNumber });
//     }
//     render(){
//         return (
//             <div>{ `I have some: ${this.state.aNumber}`}
//             <button onClick={this.increment}>+</button>
//             <button onClick={this.decrement}>-</button>
//             </div>
//         )
//     }
// }

// class TodoParentComponent extends Component{
//         constructor(){
//             super();
//             this.state={ingredients:['flour','milk','eggs'],
//             newingredient : ''}
//         }

//         handleIngredientinput = (event) =>{
//             this.setState({newingredient: event.target.value});
//         }
//         addIngredient = (event)=>{
//             event.preventDefault();
//             const ingredientlist = this.state.ingredients;
//             ingredientlist.push(this.state.newingredient);
//             this.setState({
//                 ingredients:ingredientlist,
//                 newingredient:'',
//             });
//         }
//         render(){
//             return(
//                 <div>
//                     <h3>The Ingredients in our recipe are</h3>
//                     {this.state.ingredients.map((ele)=>
//                         <div>{ele}</div>)}
//                     <form onSubmit={this.addIngredient}>
//                     <input type='text' placeholder='Add a new ingrident' onChange={this.handleIngredientinput} value={this.state.newingredient}/>
//                     </form>
//                 </div>
//             )
//         }
//     }

// class TodoParentComponent extends Component{
//     constructor(){
//         super();
//         this.state = {ingredients:['milk','egg','sugar'],
//         newingredient:''}
//     }
//     handleIngredientInput = (event)=>{
//         this.setState({newingredient:event.target.value});
//     }
//     addIngredient = (event)=>{
//         event.preventDefault();
//         const ingredientlist = this.state.ingredients;
//         ingredientlist.push(this.state.newingredient);
//         this.setState({ingredients:ingredientlist,
//         newingredient:''});

//     }

//     render(){
//         return (
//             <div>
//                 <h2>The ingredients of the meal are</h2>
//                 {this.state.ingredients.map((ingredient)=>
//                     <TodoChildComponent thing={ingredient} />
//                 )}
//                 <form onSubmit={this.addIngredient}>
//                     <input type="text" placeholder="Enter new " onChange={this.handleIngredientInput} value={this.state.newingredient}/>
//                 </form>
//             </div>
//         )
//     }

// }

// let rend = new TodoComponent();
// console.log(rend.state.ingredients.map((ele)=> {
//     console.log(ele);
// }));

class TodoList extends Component{
    constructor(){
        super();
        this.state={
            todos:[],
            newTodo:{}};
        }
    handleTodoInput = (event)=>{
        this.setState({newTodo:{'text':event.target.value,"completed":false}});}
    addTodo = (event)=>{
        event.preventDefault();
        const todos = this.state.todos;
        todos.push(this.state.newTodo);
        this.setState({todos:todos,
            newTodo:{'text':'',"completed":false}});
            // console.log(this.state)
    };
   deleteTodo=(i)=>{
       const todos = this.state.todos;
       let newtodos = todos.filter(todo => todos.indexOf(todo) !== i );
       this.setState({todos:newtodos});
   }

    
    render(){
        return(
            <div>
                {this.state.todos.map((todo,i) =>
                <Todo index={i} todo={todo} delete={this.deleteTodo}/>)}
            <form onSubmit={this.addTodo}>
                <input type="text" placeholder="Enter new" onChange={this.handleTodoInput} value={this.state.newTodo.text}/>
            </form>
            </div>
        );
    };
}
export default TodoList;