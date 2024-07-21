import React, { useState, useEffect } from 'react';
import '../styles/EditIssue.css';

const EditIssue = ({ issueId, onUpdate }) => {
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    // Fetch issue by id and setIssue
  }, [issueId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(issue);
  };

  if (!issue) return null;

  return (
    <form onSubmit={handleSubmit} className="edit-issue-form">
      <input type="text" value={issue.title} onChange={(e) => setIssue({ ...issue, title: e.target.value })} />
      <textarea value={issue.description} onChange={(e) => setIssue({ ...issue, description: e.target.value })} />
      <input type="text" value={issue.assignedUser} onChange={(e) => setIssue({ ...issue, assignedUser: e.target.value })} />
      <input type="text" value={issue.status} onChange={(e) => setIssue({ ...issue, status: e.target.value })} />
      <button type="submit">Update Issue</button>
    </form>
  );
};

export default EditIssue;
