import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../apiClient';
import '../styles/CreateSchedule.css';

const CreateSchedule = () => {
    const { teamId } = useParams();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [projectId, setProjectId] = useState('');
    const [issueId, setIssueId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiClient.post(`/teams/${teamId}/schedules`, {
                title,
                date,
                projectId,
                issueId
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
                <label>Date:</label>
                <input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Project ID:</label>
                <input
                    type="number"
                    value={projectId}
                    onChange={(e) => setProjectId(e.target.value)}
                />
            </div>
            <div>
                <label>Issue ID:</label>
                <input
                    type="number"
                    value={issueId}
                    onChange={(e) => setIssueId(e.target.value)}
                />
            </div>
            <button type="submit">Create Schedule</button>
        </form>
    );
};

export default CreateSchedule;
