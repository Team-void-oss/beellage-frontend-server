import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import apiClient from '../apiClient';
import '../styles/IssueList.css';

const IssueList = () => {
    const { teamId, projectId } = useParams();
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const response = await apiClient.get(`/teams/${teamId}/projects/${projectId}/issues`);
                setIssues(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchIssues();
    }, [teamId, projectId]);

    const handleDelete = async (issueId) => {
        try {
            await apiClient.delete(`/teams/${teamId}/projects/${projectId}/issues/${issueId}`);
            setIssues(issues.filter(issue => issue.id !== issueId));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Issues</h1>
            <ul>
                {issues.map((issue) => (
                    <li key={issue.id}>
                        <h3>{issue.title}</h3>
                        <p>{issue.description}</p>
                        <p>Status: {issue.status}</p>
                        <Link to={`/teams/${teamId}/projects/${projectId}/edit-issue/${issue.id}`} className="edit-link">Edit</Link>
                        <button onClick={() => handleDelete(issue.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IssueList;
