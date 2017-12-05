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
        this.ClassStyle = {display: 'none'}

    };

    finishedHandler = () => {

    };

}

export default ToDoItemComponent;