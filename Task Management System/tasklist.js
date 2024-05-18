import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the tasks!', error);
            });
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        {task.title} - {task.description} - {task.completed ? 'Completed' : 'Pending'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
