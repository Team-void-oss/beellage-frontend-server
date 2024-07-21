import React, { useState } from 'react';
import '../styles/CreateSchedule.css';

const CreateSchedule = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [projectId, setProjectId] = useState('');
  const [issueId, setIssueId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = { title, date, projectId, issueId };
    onCreate(newSchedule);
  };

  return (
    <form onSubmit={handleSubmit} className="create-schedule-form">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="text" placeholder="Project ID" value={projectId} onChange={(e) => setProjectId(e.target.value)} />
      <input type="text" placeholder="Issue ID" value={issueId} onChange={(e) => setIssueId(e.target.value)} />
      <button type="submit">Create Schedule</button>
    </form>
  );
};

export default CreateSchedule;
