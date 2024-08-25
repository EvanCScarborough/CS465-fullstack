# CS465-fullstack
CS-465 Fullstack development with MEAN

Functionality:
This application uses JSON to store and transfer data from the database and backend of the application for display on the frontend. At several points throughout development, old code was refactored to facilitate the addition or modification of functionality - for example, the original hard-coded trips displayed on the travel page were refactored to be pulled dynamically from the database. Reusable UI components help to minimize redundant code, simplify debugging, and enforce separation of concerns.

Testing:
Testing relied on two primary methods: backend API testing using Postman, and manual testing utilizing the application frontend. Postman allowed for testing of API endpoints independently of the frontend, which helped with isolating and tracking bugs. MongoDBCompass was also helpful for checking the state of the database. Security relies on authentication using a JWT token; authentication is required to make modifications to the DB using the admin portal.

Reflection:
While challenging, this course was very helpful in stepping me through the process of developing a full-stack web application. I learned how to create dynamic web pages using Express and Angular, which pull data from MongoDB via Mongoose. This general design pattern is used in a huge variety of other applications, and my familiarity with it will be a great advantage as I advance in my software development career.
