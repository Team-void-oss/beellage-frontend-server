import React from 'react';
import '../styles/ScheduleList.css';

const ScheduleList = ({ schedules, onDelete }) => {
  return (
    <div className="schedule-list">
      {schedules.map(schedule => (
        <div key={schedule.id} className="schedule-item">
          <h3>{schedule.title}</h3>
          <p>Date: {schedule.date}</p>
          <p>Project ID: {schedule.projectId}</p>
          <p>Issue ID: {schedule.issueId}</p>
          <button onClick={() => onDelete(schedule.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;
