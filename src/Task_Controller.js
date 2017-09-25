import React, {Component} from 'react';
import Task from './Task';

class Task_Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks:[], taskName: '',taskInfo: ''};
        this.add = this.add.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
        this.clearStorage = this.clearStorage.bind(this);
        this.showForm = this.showForm.bind(this);
        this.size = window.localStorage.length;
        this.taskInfo = [];
        this.isOn = false;
        this.noTasks = "There No Tasks At The Moment"
       // this.taskArray = window.localStorage.getItem('task').split(',');
        this.initializeTasks = this.initializeTasks.bind(this);
        //let storage = window.localStorage;
        this.initializeTasks;

       window.onload = () =>{
           console.log("Loaded");
           this.initializeTasks();
       }
        
    }
    initializeTasks(){
        console.log('Initializing....');
        if(window.localStorage.length > 0){
            this.noTasks = null; 
        } else {
            this.noTasks = "There No Tasks At The Moment";
        } 
        if(this.state.tasks.length !== window.localStorage.length) {
            // Clear State
            this.setState((props)=>{
                props.tasks = [];
            });
            for (let i = 0; i < window.localStorage.length; i++) {
                this.taskInfo = [];
                this.taskInfo = window.localStorage.getItem(window.localStorage.key(i)).split(',');
                this.setState((props)=>{
                    props.tasks.push(
                    <Task key={i} index={i} id={this.taskInfo[0]} name={this.taskInfo[1]} info={this.taskInfo[2]} />
                    );
                });
            }
        }
        console.log("Complete");    
    }
    add(e) {
           e.preventDefault();
           window.localStorage.setItem(
               
               'task'+ (window.localStorage.length + 1) ,
               [window.localStorage.length + 1, this.state.taskName, this.state.taskInfo]);

            this.setState((props)=>{
                props.taskName = '';
                props.taskInfo = '';
            });
            this.initializeTasks();
            this.showForm();
            console.log('Added Task!');
    }
    
    updateName(){
        this.setState((props)=>{
            props.taskName= event.target.value; 
        });
    }
    updateInfo(){
        this.setState((props)=>{
            props.taskInfo= event.target.value; 
        });
    }
    clearStorage(){
        this.setState((props)=>{
            window.localStorage.clear();
            props.tasks = [];
            this.initializeTasks();

        });

        
        
    }
    showForm(e){
        
        if(!this.isOn) {
            document.getElementById('task_form').style.display = "block";
            setTimeout(()=>{document.getElementById('task_form').style.opacity = 1;},100);
            
            //document.getElementById('task_form').style.opacity = 1;
            this.isOn = true;
        

        } else {
            document.getElementById('task_form').style.opacity = 0;
            setTimeout(()=>{document.getElementById('task_form').style.display = "none";},500);
            
            this.isOn = false;
        }
        
    }
    
    render(){
        return(
            
            <div id="task_controller">
                {/* {this.initializeTasks} */}
                             
               <button onClick={this.showForm}>New Task+</button>
               <br/>
               <form id="task_form" onSubmit={this.add}>
                   <label>Task Name:  </label>
                   <input id="input_name" value={this.state.taskName} onChange={this.updateName} type="text" />
                   <br/>
                   <label>Details:</label>
                   <textarea id="input_info" value={this.state.taskInfo} onChange={this.updateInfo} type="text"></textarea>
                   <input type="submit" value="CREATE TASK"/>
               </form>
               <br/>
               <div id="noTasks">{this.noTasks}</div>
               <br/> 
               {this.state.tasks}

               <button onClick={this.clearStorage}>CLEAR ALL TASKS</button>
            </div>    
        );
    }
}
export default Task_Controller;