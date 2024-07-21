import React, { useState } from 'react';
import '../styles/CreateIssue.css';

const CreateIssue = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedUser, setAssignedUser] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIssue = { title, description, assignedUser, status };
    onCreate(newIssue);
  };

  return (
    <form onSubmit={handleSubmit} className="create-issue-form">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Assigned User" value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)} />
      <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
      <button type="submit">Create Issue</button>
    </form>
  );
};

export default CreateIssue;
