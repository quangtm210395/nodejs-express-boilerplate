### Nodejs express mongodb boilerplate

## How to use?
1. Make sure `nodejs` are already installed on your computer
2. Clone the project
3. `cd` to project root directory and run `npm install`
4. Run command `npm run debug` and enjoy
5. Modify or adding your code to create new things

## Project structure
```
.
├── index.js
├── routes.js
├── package.json
├── data.json
├── .gitignore
├── .eslintignore
├── .eslintrc.yml
├── .env
└── .vscode
    ├── .setting.json
    └── .launch.json
src
├── api
│   └── node
│       ├── index.js
│       └── node.service.js
├── config
│   └── index.js
└── helper
    ├── header-helper.js
    ├── jwt-helper.js
    ├── logger-controller.js
    ├── logger-helper.js
    ├── mongo-client-instance.js
    └── mongodb-helper.js
```

## How and where to insert your code? 
1. You can see the `src` folder in the project structure, it contains **api**, **config** and **helper** folders.
2. The **config** folders is created to stores the *config* files.
3. The **helper** folders is created to stores some library, common functions to using in your project.
4. The **api** folder is created to put your files of code that execute your apis.
5. You can break your api to some paths and package it to some folders. Each folder will contains the router code file (index.js) and the logic code file (***.service.js).
6. So to create your new apis: Just create some folders and files in the **api** folder.
7. I created some APIs with mongodb as a demo!
8. Enjoy!!!