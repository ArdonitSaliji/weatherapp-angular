# WeatherappAngular

This is a small weather app project created with Angular, NodeJs and Firebase.

# Project Setup:

 1. Create a MongoDb database with the name weather-app and create 2 collections, one with the name `cities` and one with the name `users`.
 
 2. Create a `.env` file on the root folder of the project, copy and paste the `.env.example` into it, remove the comments, then add your connection string at MONGO_URL also a JWT secret ( which can be any string you like ).

## Node Server

Run `npm run dev` to start the NodeJs server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

