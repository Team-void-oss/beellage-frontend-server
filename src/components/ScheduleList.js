import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import apiClient from '../apiClient';
import '../styles/ScheduleList.css';

const ScheduleList = () => {
    const { teamId } = useParams();
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await apiClient.get(`/teams/${teamId}/schedules`);
                setSchedules(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSchedules();
    }, [teamId]);

    const handleDelete = async (scheduleId) => {
        try {
            await apiClient.delete(`/teams/${teamId}/schedules/${scheduleId}`);
            setSchedules(schedules.filter(schedule => schedule.id !== scheduleId));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Schedules</h1>
            <ul>
                {schedules.map((schedule) => (
                    <li key={schedule.id}>
                        <h3>{schedule.title}</h3>
                        <p>{schedule.date}</p>
                        <Link to={`/teams/${teamId}/edit-schedule/${schedule.id}`} className="edit-link">Edit</Link>
                        <button onClick={() => handleDelete(schedule.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScheduleList;
