import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../apiClient';
import '../styles/EditSchedule.css';

const EditSchedule = () => {
    const { teamId, scheduleId } = useParams();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [projectId, setProjectId] = useState('');
    const [issueId, setIssueId] = useState('');

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await apiClient.get(`/teams/${teamId}/schedules/${scheduleId}`);
                const schedule = response.data;
                setTitle(schedule.title);
                setDate(schedule.date);
                setProjectId(schedule.projectId);
                setIssueId(schedule.issueId);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSchedule();
    }, [teamId, scheduleId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiClient.patch(`/teams/${teamId}/schedules/${scheduleId}`, {
                title,
                date,
                projectId,
                issueId
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
            <button type="submit">Update Schedule</button>
        </form>
    );
};

export default EditSchedule;
