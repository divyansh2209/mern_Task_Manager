const { Tasks } = require('../model/Task');

exports.createTask = async (req, res) => {
    // this product we have to get from API body
    const product = new Tasks(req.body);
    try {
        const doc = await product.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Use module.exports for CommonJS modules

exports.fetchTasksByUserId = async (req, res) => {
    const { user } = req.query;
    console.log(`USER:${user}`);
    try {
        const userTasks = await Tasks.find({ userId: user }); // Make sure the field name matches your model
        console.log(`User Tasks: ${userTasks}`)
        res.status(200).json(userTasks);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Tasks.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json(err);
    }
};
