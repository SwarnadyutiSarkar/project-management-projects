const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/taskmanager', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.post('/tasks', async (req, res) => {
    const { title, description, completed } = req.body;
    const task = new Task({ title, description, completed });
    await task.save();
    res.json(task);
});

app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await Task.findByIdAndUpdate(id, { title, description, completed }, { new: true });
    res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
