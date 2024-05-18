<template>
    <div>
        <h2>Add Project</h2>
        <form @submit.prevent="addProject">
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="name" required>
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea v-model="description" required></textarea>
            </div>
            <button type="submit">Add Project</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            description: ''
        };
    },
    methods: {
        addProject() {
            axios.post('http://localhost:8000/api/projects/', {
                name: this.name,
                description: this.description
            })
            .then(() => {
                this.name = '';
                this.description = '';
                this.$emit('project-added');
            })
            .catch(error => {
                console.error('There was an error adding the project!', error);
            });
        }
    }
};
</script>
