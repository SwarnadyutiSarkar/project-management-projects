import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import axios from 'axios';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="App">
            <h1>Task Management System</h1>
            <TaskForm fetchTasks={fetchTasks} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default App;
