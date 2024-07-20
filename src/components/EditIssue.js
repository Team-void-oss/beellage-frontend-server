import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../apiClient';
import '../styles/EditIssue.css';

const EditIssue = () => {
    const { teamId, projectId, issueId } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [status, setStatus] = useState('TODO');

    useEffect(() => {
        const fetchIssue = async () => {
            try {
                const response = await apiClient.get(`/teams/${teamId}/projects/${projectId}/issues/${issueId}`);
                const issue = response.data;
                setTitle(issue.title);
                setDescription(issue.description);
                setAssignedTo(issue.assignedTo);
                setStatus(issue.status);
            } catch (error) {
                console.error(error);
            }
        };

        fetchIssue();
    }, [teamId, projectId, issueId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiClient.patch(`/teams/${teamId}/projects/${projectId}/issues/${issueId}`, {
                title,
                description,
                assignedTo,
                status
            });
            // Handle success
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
            <button type="submit">Update Issue</button>
        </form>
    );
};

export default EditIssue;
