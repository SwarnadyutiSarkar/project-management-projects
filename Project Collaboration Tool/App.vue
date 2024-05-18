<template>
    <div id="app">
        <h1>Project Collaboration Tool</h1>
        <ProjectForm @project-added="fetchProjects" />
        <ProjectList :projects="projects" />
    </div>
</template>

<script>
import ProjectForm from './components/ProjectForm.vue';
import ProjectList from './components/ProjectList.vue';
import axios from 'axios';

export default {
    name: 'App',
    components: {
        ProjectForm,
        ProjectList
    },
    data() {
        return {
            projects: []
        };
    },
    methods: {
        fetchProjects() {
            axios.get('http://localhost:8000/api/projects/')
                .then(response => {
                    this.projects = response.data;
                })
                .catch(error => {
                    console.error('There was an error fetching the projects!', error);
                });
        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>
