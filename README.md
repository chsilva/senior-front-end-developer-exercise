# Frontend Developer Exercise

# How to run

Just run the following command on the root folder

```
docker-compose up --build
```

# Description

Hi! in this exercise you will be making improvements to a project according to some requirements. Some of these can be explained rather than coded.

# Tech Stack

You would need to use the last version of React, React Hooks, and Typescript. For the design, the use ant.design will be a plus.

# Requirements

This is just a mock of a property displayer, the tasks are:

- Analyze existing project and suggest (or make) improvements to the structure. Explain why those changes are important.
- Handle login/logout and keep sesion active. Sign up is not necessary, but you'd need to make a profile page.
- It should be possible to change the language between French and English, beign the later the default.
- Make a search that filters the properties visualized.
- The project should run with Docker.
- Add testing will be a plus.

# Considerations about the requirements

Some improvements

- Added husky to validate commit messages and running test before committing
- Added `scss` and `less` suport
- Customized `antd` theme overriding `@primary-color` variable on `less` options on `craco.config.js`
- Changed folder structure

```
📦 src
 ┣ 📂 i18n (i18n configuration and lang files)
 ┣ 📂 components (dumb components without any business logic)
 ┣ 📂 containers (the content that Pages renders if needed to have some business logic)
 ┣ 📂 pages (the content that Router render)
 ┣ 📂 services (requests config)
 ┣ 📂 store (redux redux-saga config)
```

About login/logout and session

- The idea is to always pass the session token on all private requests to validate if the session is active and if it is not the request should response an error to invalidate the request on the frontend

About `i18n`

- It is possible to change the language between `english` and `french` on the footer buttons `[en][fr]`.

About the filter

- It is already passing all the filter values but as this is a mock the response is not filtered but in a real life scenario it should work

Docker setup is working, just run the following command

```
docker-compose up --build
```

I had some problems with testing setup and I could not fix in time
