export let completedItems = [];
export let itemList = [
    new ToDoItem(),
    new ToDoItem(),
]
itemList[0].name = "Walk the dog";
itemList[1].name = "Buy dog food";
itemList[1].completed = true;

export function ToDoItem(){
    console.log("item created")
   let name = "";
   let createdOn = Date(Date.now());
   let important = false;
   let completed = false;
   let completedOn = null;
   let btnClass = "btn-todo btn btn-success";
   this.delete = () => {
       if(completed){
        completedItems = completedItems.filter((obj) => obj !== this);
        console.log("dleting from ", completedItems)
       }else{
           throw new Error("items to delete should be on the completed section")
       }
   }
   Object.defineProperties(this, {
    important:{
        set(bool){
            if(typeof bool !== "boolean"){
                throw new Error("important must be a typeof boolean");
            }
            important = bool;
        },
        get(){
            return important ? "Important":"Regular";
        }
    },
    name:{
        set(value){
            if(typeof value !== "string"){
                throw new Error("item name must be typeof string");
            }
            name = value;
        },
        get(){
            return name;
        }
    },
    completed:{
        set(bool){
            if(typeof bool !== "boolean"){
                throw new Error("important must be a typeof boolean");
            }
            if(bool){
                completedOn = Date(Date.now());
              
                if (completedItems.indexOf(this) === -1){
                    itemList = itemList.filter((obj) => obj !== this);
                    completedItems.push(this);
                }
                
            }
            completed = bool;
        },
        get(){
            return completed ? "Delete":"Complete";
        }
    },
    createdOn:{
        get(){
            return `created on: ${createdOn.toString()}`;
        }
    },
    completedOn:{
        get(){
            return `completed on: ${completedOn.toString()}`;
        },
    },
    btnClass:{
        get(){
            btnClass = completed ? "btn-todo btn btn-danger":"btn-todo btn btn-success"
            return btnClass;
        }
    }
   })
  
}