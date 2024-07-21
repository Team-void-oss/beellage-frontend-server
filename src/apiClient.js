import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createIssue = (teamId, projectId, issue) => apiClient.post(`/work/teams/${teamId}/projects/${projectId}/issues`, issue);
export const updateIssue = (teamId, projectId, issueId, issue) => apiClient.patch(`/work/teams/${teamId}/projects/${projectId}/issues/${issueId}`, issue);
export const deleteIssue = (teamId, projectId, issueId) => apiClient.delete(`/work/teams/${teamId}/projects/${projectId}/issues/${issueId}`);
export const getIssues = (teamId, projectId) => apiClient.get(`/work/teams/${teamId}/projects/${projectId}/issues`);

export const createSchedule = (teamId, schedule) => apiClient.post(`/work/teams/${teamId}/schedules`, schedule);
export const updateSchedule = (teamId, scheduleId, schedule) => apiClient.patch(`/work/teams/${teamId}/schedules/${scheduleId}`, schedule);
export const deleteSchedule = (teamId, scheduleId) => apiClient.delete(`/work/teams/${teamId}/schedules/${scheduleId}`);
export const getSchedules = (teamId) => apiClient.get(`/work/teams/${teamId}/schedules`);
export const getSchedulesByProject = (teamId, projectId) => apiClient.get(`/work/teams/${teamId}/schedules?projectId=${projectId}`);
