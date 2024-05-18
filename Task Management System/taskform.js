import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/tasks', { title, description, completed });
        fetchTasks();
        setTitle('');
        setDescription('');
        setCompleted(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Completed:</label>
                <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
