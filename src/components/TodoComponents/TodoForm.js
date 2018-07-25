const ToDoInput=()=><input class='input-field' type='text' placeholder='Enter a Todo'/>
const ToDoButton=()=><div class='todo-button'>Add Todo</div>
const ClearCompletedButton=()=><div class='clearcompleted-button'>Clear Completed</div>

const ToDoForm=()=><ToDoInput /><ToDoButton /><ClearCompletedButton />

export default ToDoForm;