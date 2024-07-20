import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../apiClient';
import '../styles/CreateIssue.css';

const CreateIssue = () => {
    const { teamId, projectId } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [status, setStatus] = useState('TODO');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiClient.post(`/teams/${teamId}/projects/${projectId}/issues`, {
                title,
                description,
                assignedTo,
                status
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <div>
                <label>Assigned To:</label>
                <input
                    type="number"
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="TODO">TODO</option>
                    <option value="DOING">DOING</option>
                    <option value="DONE">DONE</option>
                </select>
            </div>
            <button type="submit">Create Issue</button>
        </form>
    );
};

export default CreateIssue;
