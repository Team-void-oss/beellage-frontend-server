import React, { useState, useEffect } from 'react';
import '../styles/EditSchedule.css';

const EditSchedule = ({ scheduleId, onUpdate }) => {
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    // Fetch schedule by id and setSchedule
  }, [scheduleId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(schedule);
  };

  if (!schedule) return null;

  return (
    <form onSubmit={handleSubmit} className="edit-schedule-form">
      <input type="text" value={schedule.title} onChange={(e) => setSchedule({ ...schedule, title: e.target.value })} />
      <input type="date" value={schedule.date} onChange={(e) => setSchedule({ ...schedule, date: e.target.value })} />
      <input type="text" value={schedule.projectId} onChange={(e) => setSchedule({ ...schedule, projectId: e.target.value })} />
      <input type="text" value={schedule.issueId} onChange={(e) => setSchedule({ ...schedule, issueId: e.target.value })} />
      <button type="submit">Update Schedule</button>
    </form>
  );
};

export default EditSchedule;
