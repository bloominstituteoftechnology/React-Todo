export let completedItems = [];
export let itemList = [];

export function ToDoItem(){
    console.log("item created")
   let name = "";
   let createdOn = Date(Date.now());
   
   let completed = false;
   let completedOn = null;
   let btnClass = "btn-todo btn btn-success";
   this.delete = () => {
       if(completed){           
        completedItems = completedItems.filter((obj) => obj !== this);
       }else{
           throw new Error("items to delete should be on the completed section")
       }
   }
   Object.defineProperties(this, {
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
                throw new Error("completed must be a typeof boolean");
            }
            if(bool){
                completedOn = Date(Date.now());
              
                if (completedItems.indexOf(this) === -1){
                    itemList = itemList.filter((obj) => obj !== this);
                    completedItems.push(this);
                }
                
            }else{
                itemList.push(this);
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
        },
        set(value){
            createdOn = value;
        }
    },
    completedOn:{
        get(){
            return `completed on: ${completedOn.toString()}`;
        },
        set(value){
            completedOn = value;
        }
    },
    btnClass:{
        get(){
            btnClass = completed ? "btn-todo btn btn-danger":"btn-todo btn btn-success"
            return btnClass;
        },
        set(value){
            btnClass = value;
        }
    }
   })
  
}