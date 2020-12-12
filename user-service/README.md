# User Service
-----------------------
User MicroService project based on Node, Express & Sequelize(MySQL)

### Tech

This seed uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Sequalize] - promise-based ORM for Node.js to access DB

### Installation

This seed requires [Node.js](https://nodejs.org/) v12+ to run.

To start development, you need to install all the project dependencies, as well as configure the database. 
> Clone the git repository
> Rename '.env-sample' to '.env' and set the values
```sh
$ cd user-service
$ npm install 
$ npm start
```

Configuration files.<br />
```
├── ...
├── config                             # Configuration files
│   └── config.js                      # App related configuration 
│   └── sequelize-config.js            # configuration for sequelize-cli 
└── ...
```

Model file are placed into the models folder.<br />
```
├── src
|   ├── models                         # Models files
|   │   ├── index.js                   # Db connection and model loading related code 
|   │   └── user.js                # user model.
└── ...
```

Controller file are placed into the controllers folder. 
Controller will validate the request and redirect the request to specific service function<br />
```
├── src
|   ├── controllers                    # Controllers files
|   │   ├── index.js                   # Export all controller as one 
|   │   └── user.controller.js     # user controller.
└── ...
```

Service file are placed into the controllers folder. 
All the business logic will be performed in service<br />
```
├── src
|   ├── services                       # Controllers files
|   │   ├── index.js                   # Export all services as one 
|   │   └── user.service.js        # user service.
└── ...
```

Repository file are placed into the repositories folder. 
All the DB related work will be performed in repository<br />
```
├── src
|   ├── repositories                   # Repositories files
|   │   ├── index.js                   # Export all repositories as one 
|   │   └── user.repository.js     # user repository.
└── ...
```

Request Input validation file are placed into the validation folder.<br />
```
├── src
|   ├── validation                   # Validation files
|   │   ├── index.js                   # Export all validation as one 
|   │   └── user.validation.js     # user validation.
└── ...
```

Supporting files
```
├── ...
├── util                                   # Supporting files
│   ├── constant.js                        # Constant will be defined in this file
│   ├── middleware.js                      # Custom Express middleware
│   ├── responseHandler.js                 # API response handler
│   ├── errorHandler.js                    # NodeJs Error Handling function file
│   ├── util.js                            # Common Utility functions file
│   ├── sqlHelper.js                       # Custom error msg based on sql errcode
│   ├── customError.js                     # Custom Error
└── ...
```

Other Supporting files
```
├── ...
├── .bablerc                              # bable local configuration file
├── .gitignore                            # for ignoring file for git 
├── .sequelizerc                          # configuration file for sequelize-cli
├── .eslintrc                             # eslint local configuration file
├── .eslintignore                         # eslint ignore configuration file
├── app.js                                # application server file
├── index,js                              # run file
├── package.json                          # metadata info about Node JS Project
├── README.md                             # contains info required to understand the project
├── webpack.config.js                     # build file for webpack
└── ...
```

## Author
Rohit Mittal