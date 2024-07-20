import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1/work/teams', // Adjust the base URL as necessary
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;
