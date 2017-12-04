
class ToDoItemComponent
{
    constructor(id, title, isCompleted, class_style) {
        this.Id = id;
        this.Title = title;
        this.IsCompleted = isCompleted;
        this.ClassStyle = class_style;

        sessionStorage.set
    }
    
    deleteHandler = () => {
        // clear from the storage.. 
        // hide
        this.ClassStyle = {display: 'none'}

    };

    finishedHandler = () => {

    };

}

export default ToDoItemComponent;