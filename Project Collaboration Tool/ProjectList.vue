<template>
    <div>
        <h2>Project List</h2>
        <ul>
            <li v-for="project in projects" :key="project.id">
                {{ project.name }} - {{ project.description }}
                <ul>
                    <li v-for="task in project.tasks" :key="task.id">
                        {{ task.title }} - {{ task.completed ? 'Completed' : 'Pending' }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: []
        };
    },
    created() {
        axios.get('http://localhost:8000/api/projects/')
            .then(response => {
                this.projects = response.data;
            })
            .catch(error => {
                console.error('There was an error fetching the projects!', error);
            });
    }
};
</script>
