let Todo = require('../models/Todo');

exports.createTodo = (req, res) => {
    Todo.create({
        title: req.body.title,
        description: req.body.description
    }).then((data) => {
        res.json({
            message: "Todo created successfully",
            data
        })
    })
}

exports.updateTodo = (req, res) => {
    Todo.updateOne({
        _id: req.params.todo_id
    },{
        $set: {
            title: req.body.title,
            description: req.body.description
        }
    }).then((data) => {
        res.json({
            message: "Todo updated successfully",
            data
        })
    })
}

exports.deleteTodo = (req, res) => {
    Todo.deleteOne({
        _id: req.params.todo_id
    }).then(() => {
        res.json({ message: "Todo deleted successfully" })
    })
}

exports.fetchAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json({ todos })
    } catch (error) {
        console.log("An error occured", error);
    }
}