const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');

router.post('/todo/create', controller.createTodo);
router.put('/todo/:todo_id/update', controller.updateTodo);
router.delete('/todo/:todo_id/delete', controller.deleteTodo);
router.get('/todos', controller.fetchAllTodos);




module.exports = router;