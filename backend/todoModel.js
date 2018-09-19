
const mongoose = require("mongoose");

const definition =
{
    todo: {
        type: String, // String, required
        required: true,
        index: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
    
};

const options ={
    timestamps:true,
};

const todoSchema = new mongoose.Schema(definition, options).index({todo: 1, id: -1});

const todoModel = mongoose.model("Todo", todoSchema, "todos");


module.exports = todoModel;
