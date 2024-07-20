import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateIssue from './components/CreateIssue';
import EditIssue from './components/EditIssue';
import IssueList from './components/IssueList';
import CreateSchedule from './components/CreateSchedule';
import EditSchedule from './components/EditSchedule';
import ScheduleList from './components/ScheduleList';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/teams/:teamId/projects/:projectId/create-issue" element={<CreateIssue />} />
                    <Route path="/teams/:teamId/projects/:projectId/edit-issue/:issueId" element={<EditIssue />} />
                    <Route path="/teams/:teamId/projects/:projectId/issues" element={<IssueList />} />
                    <Route path="/teams/:teamId/create-schedule" element={<CreateSchedule />} />
                    <Route path="/teams/:teamId/edit-schedule/:scheduleId" element={<EditSchedule />} />
                    <Route path="/teams/:teamId/schedules" element={<ScheduleList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
