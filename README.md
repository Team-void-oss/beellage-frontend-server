# Issue Tracker Frontend

## 프로젝트 설명
이 프로젝트는 이슈와 일정을 관리할 수 있는 프론트엔드 애플리케이션입니다. React를 사용하여 UI를 구현하고, Axios를 통해 백엔드 API와 통신합니다.

## 기술 스택
- React 17
- Axios
- Docker

## 구조
```angular2html
issue-tracker/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreateIssue.js
│   │   │   ├── IssueList.js
│   │   │   ├── CreateSchedule.js
│   │   │   ├── ScheduleList.js
│   │   ├── apiClient.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
```

## 주요 컴포넌트
- **CreateIssue**: 이슈 생성 컴포넌트
- **IssueList**: 이슈 리스트 컴포넌트
- **CreateSchedule**: 일정 생성 컴포넌트
- **ScheduleList**: 일정 리스트 컴포넌트

## API 엔드포인트


| 기능                 | 메서드  | URL                                                              | 설명                         | 요청 바디                                                   | 응답                        |
|--------------------|-------|-----------------------------------------------------------------|----------------------------|----------------------------------------------------------|---------------------------|
| 이슈 생성             | POST  | `/api/v1/work/teams/{teamId}/projects/{projectId}/issues`        | 새로운 이슈 생성              | `{"title": "string", "description": "string", "assignedTo": long, "status": "string"}` | `201 Created`             |
| 이슈 수정             | PATCH | `/api/v1/work/teams/{teamId}/projects/{projectId}/issues/{issueId}` | 이슈 수정                    | `{"title": "string", "description": "string", "assignedTo": long, "status": "string"}` | `204 No Content`          |
| 이슈 삭제             | DELETE| `/api/v1/work/teams/{teamId}/projects/{projectId}/issues/{issueId}` | 이슈 삭제                    | N/A                                                      | `204 No Content`          |
| 일정 생성             | POST  | `/api/v1/work/teams/{teamId}/schedules`                          | 새로운 일정 생성              | `{"title": "string", "date": "string", "projectId": long, "issueId": long}`           | `201 Created`             |
| 일정 수정             | PATCH | `/api/v1/work/teams/{teamId}/schedules/{scheduleId}`             | 일정 수정                    | `{"title": "string", "date": "string", "projectId": long, "issueId": long}`           | `204 No Content`          |
| 일정 삭제             | DELETE| `/api/v1/work/teams/{teamId}/schedules/{scheduleId}`             | 일정 삭제                    | N/A                                                      | `204 No Content`          |
| 전체 일정 조회          | GET   | `/api/v1/work/teams/{teamId}/schedules`                          | 전체 일정 조회                | N/A                                                      | `200 OK`                  |
| 프로젝트별 일정 조회      | GET   | `/api/v1/work/teams/{teamId}/schedules?projectId={}`             | 프로젝트별 일정 조회            | N/A                                                      | `200 OK`                  |



## 실행 방법
1. 프로젝트 클론
        ```bash
    git clone https://github.com/judy-oss-team/beellage-frontend-server.git
    git checkout -b feature/issue
    git pull origin feature/issue
    ```

2. Docker 컨테이너 실행
    ```bash
    docker-compose up --build
    ```

3. 애플리케이션에 접속
    - 프론트엔드 서버: `http://localhost:3000`

## 포트 설정
- 프론트엔드 서버: `3000`
