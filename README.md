# Labs 12: MentorMatch - frontend
## [Mentor Frontend](http://labs12-mentor-frontend.s3-website-us-east-1.amazonaws.com/)
### [CDN (slower to update)](https://mentorfe.tfolbrecht.com/)

A React Frontend for the LambdaSchool Labs12 Project "Mentor Program"

![CodeBuild Badge](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiQ0dvdGREZ0Vuc1d6N3B0NnJOaXIxRzB4UmFJMXNOaG5TVE9uUmdHUTg5aDRYZ3gvZnViUVRjeGMzK2FNRXdzMGdObVJHYUt3ZmY3MlVMY2NJQWJZd0d3PSIsIml2UGFyYW1ldGVyU3BlYyI6ImFiU1dzUjFjNzdXazJzNTkiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

Deployment is static and fast, but CDN cache invalidations may take a few minutes to hit every CDN Point of Presence.

---

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

---

## Resources

### [balsamiq.cloud sketch](https://balsamiq.cloud/snv27r3/pl6n9pp/rFA6D)
### [Trello Board](https://trello.com/b/sPX3FEno/labs12-mentor-program)
### [Product Canvas](https://docs.google.com/document/d/1wLlPJxiPSVHkUoUThSp11yk5ZwKqD3c81FDu_UEXrVs/edit#heading=h.crmhbig18nld)

All frontend associate Trello cards should be tagged Light Blue

![Light Blue Trello label](https://s3.amazonaws.com/labs.mentor.frontend/frontendtagtrello.png)

Discussion on [Slack](https://lambdaschoolstudents.slack.com/messages/GJ2DGUVGU/details/)

### Directory Structure and Style

```
├── actions
│   ├── meetingActions.js
│   ├── organizationActions.js
│   └── userActions.js
├── App.js
├── components
│   └── MeetingsComponents
│       ├── MeetingCard.js
│       ├── MeetingsForm.js
│       └── MeetingsList.js
├── constants
│   └── actionTypes.js
├── containers
│   └── MeetingsContainer.js
├── history
│   └── index.js
├── index.js
├── pages
│   ├── MeetingsPage.js
│   ├── OrganizationRegister.js
│   ├── UserLogin.js
│   └── UserRegistration.js
├── reducers
│   ├── auth.js
│   ├── index.js
│   ├── meetings.js
│   ├── organizations.js
│   └── users.js
├── routes
│   └── index.js
├── serviceWorker.js
└── store
    └── index.js

10 directories, 23 files
```