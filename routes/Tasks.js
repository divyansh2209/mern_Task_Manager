const express = require('express');
const { createTask, fetchTasksByUserId, updateTask } = require('../controller/Tasks');

const router = express.Router();
//  /orders is already added in base path
router.post('/', createTask);

// Route to fetch tasks by user ID
router.get('/', fetchTasksByUserId);

router.patch('/:id', updateTask)

exports.router = router;