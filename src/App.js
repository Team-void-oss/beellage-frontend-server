import React, { useState, useEffect } from 'react';
import './styles/App.css';
import CreateIssue from './components/CreateIssue';
import EditIssue from './components/EditIssue';
import IssueList from './components/IssueList';
import CreateSchedule from './components/CreateSchedule';
import EditSchedule from './components/EditSchedule';
import ScheduleList from './components/ScheduleList';
import { 
  getIssues, createIssue, updateIssue, deleteIssue, 
  getSchedules, createSchedule, updateSchedule, deleteSchedule 
} from './apiClient';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [editingIssue, setEditingIssue] = useState(null);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [teamId] = useState(1);  // 예제 팀 ID
  const [projectId] = useState(1);  // 예제 프로젝트 ID

  useEffect(() => {
    loadIssues();
    loadSchedules();
  }, []);

  const loadIssues = async () => {
    const response = await getIssues(teamId, projectId);
    setIssues(response.data);
  };

  const loadSchedules = async () => {
    const response = await getSchedules(teamId);
    setSchedules(response.data);
  };

  const handleCreateIssue = async (issue) => {
    await createIssue(teamId, projectId, issue);
    loadIssues();
  };

  const handleUpdateIssue = async (issue) => {
    await updateIssue(teamId, projectId, issue.id, issue);
    setEditingIssue(null);
    loadIssues();
  };

  const handleDeleteIssue = async (issueId) => {
    await deleteIssue(teamId, projectId, issueId);
    loadIssues();
  };

  const handleCreateSchedule = async (schedule) => {
    await createSchedule(teamId, schedule);
    loadSchedules();
  };

  const handleUpdateSchedule = async (schedule) => {
    await updateSchedule(teamId, schedule.id, schedule);
    setEditingSchedule(null);
    loadSchedules();
  };

  const handleDeleteSchedule = async (scheduleId) => {
    await deleteSchedule(teamId, scheduleId);
    loadSchedules();
  };

  return (
    <div className="app">
      <h1>Issue Tracker</h1>
      <CreateIssue onCreate={handleCreateIssue} />
      {editingIssue && <EditIssue issueId={editingIssue.id} onUpdate={handleUpdateIssue} />}
      <IssueList issues={issues} onDelete={handleDeleteIssue} />
      <CreateSchedule onCreate={handleCreateSchedule} />
      {editingSchedule && <EditSchedule scheduleId={editingSchedule.id} onUpdate={handleUpdateSchedule} />}
      <ScheduleList schedules={schedules} onDelete={handleDeleteSchedule} />
    </div>
  );
};

export default App;
