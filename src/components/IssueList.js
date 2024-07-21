import React from 'react';
import '../styles/IssueList.css';

const IssueList = ({ issues, onDelete }) => {
  return (
    <div className="issue-list">
      {issues.map(issue => (
        <div key={issue.id} className="issue-item">
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>
          <p>Assigned to: {issue.assignedUser}</p>
          <p>Status: {issue.status}</p>
          <button onClick={() => onDelete(issue.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default IssueList;
