### 커밋 메시지 규칙

- `feat` : 새로운 기능 추가
- `fix` : 버그 수정
- `docs` : 문서 수정
- `style` : 코드 포맷팅 등 비즈니스 로직에 영향이 없는 변경
- `refactor` : 코드 리팩토링
- `test` : 테스트 추가 또는 수정
- `chore` : 빌드 프로세스 또는 보조 도구 수정

자세한 내용: [git 전략](https://www.notion.so/git-a580d4d16c5c45e3b862883b861ffa7e?pvs=21)
및 [git commit](https://www.notion.so/git-commit-0a9595b5a62740beaa640003559bbff2?pvs=21)


### 브랜치 종류 및 전략

- `main` : 배포 가능한 안정적인 코드
- `develop` : 개발 중인 코드
    - `feature/기능` : 새로운 기능 개발
        - 개인 개발 브랜치: `feature/기능/개발자`
        - 기능 개발 완료 후 `develop`에 병합

#### 브랜치 전략 예시

- `main` : 배포 가능한 코드
- `develop` : 개발 중인 코드
    - `snap0501` : 주차별 버전
        - `feature/기능`
            - `feature/기능/개발자`
        - 머지 후 `feature` 브랜치 삭제
        - `snap` 브랜치는 버전으로 남겨두기
    - `snap0508` : 0501부터 시작

### PR 및 코드 리뷰

- upstream, fork 방식 사용
- 리뷰 후 머지


<h1></h1>
모두들 즐코~!