const router = require("express").Router();
const Todo = require("./todoModel");

const sendUserError = (status, message, res, err="Not From Catch") => {
    res.status(status).json({Error: message, err});
    return;
}

const get = (req, res) =>{
    
    Todo
        .find()
        .then(todos =>{
            res.status(200).json(todos)
        })
        .catch(err =>{
            sendUserError(500, "There was an error in retrieving friends' information", res, err);
        });
}

const post = (req, res) =>{
    const { todo } = req.body;

    if(!todo ){
        sendUserError(400, `Please provide something to do!`, res);
    }

    const task = new Todo({ todo, completed: false, date: Date.now() });
    task
    .save()
    .then(task =>{
        res.status(201).json(task)
    })
    .catch(err =>{
        sendUserError(500, "There was an error in saving todo data", res, err)
    })
}

const getId = (req, res) =>{
    const { id } = req.params;
    Todo
    .findById(id)
    .then(todo =>{
        if(!todo){
            res.status(404).json({Message: "Todo is not found"});
        }
        res.status(200).json(todo);
    })
    .catch(err =>{
        sendUserError(500, `There was an error in retrieving ${id}`, res, err)
    });
}

const deleteId = (req, res) =>{
    const { _id } = req.params;

    Todo
        .findByIdAndRemove({ _id } )
        .then(result =>{
            if(result){
                res.status(200).json({Success: `${_id} was successfully removed`});
            }
            else{
                res.status(404).json({Message: "Todo is not found"});
            }
        })
        .catch(err =>{
            sendUserError(500, `There was an error in the deletion of ${_id}`, res, err)
        });
}

const updateId = (req, res) =>{
    const { id } = req.params;
    const { task }= req.body;

    if(!id){
        sendUserError(400, `There was an error in retrieving ${id}`, res, err)
    }

    if(!task){
        sendUserError(400, `Please provide task`, res);
    }

    Todo
        .update({ _id: id }, { $set: task})
        .then(todo =>{
            res.status(200).json(todo)
        })
        .catch(err =>{
            res.status(500, `There was an error in updating ID: ${id}.`, res, err)
        });
}


router
    .route('/')
    .get(get) //these are all callbacks from above
    .post(post);

router
    .route('/:id')
    .get(getId)
    .delete(deleteId)
    .put(updateId);

module.exports = router;