# basic-auth

Authentication System Phase 1: Deploy an Express server that implements Basic Authentication, with signup and signin capabilities, using a Postgres database for storage.

#### Phase 1 Requirements
Today, we begin the first of a 3-Phase build of an authentication system, written in Express. The following core requirements detail the functionality for this phase of the project.

#### User Stories
- As a user, I want to create a new account so that I may later login
  - Using a tool such as httpie, postman, or a web form:
  - Make a POST request to the/signup route with username and password
  -Your server should support both JSON and FORM data as input
  - On a successful account creation, return a 201 status with the user object in the body
  - On any error, trigger your error handler with an appropriate error
- As a user, I want to login to my account so that I may access protected information
Using a tool such as httpie, postman, or a web form:
Make a POST request to the /signin route
Send a basic authentication header with a properly encoded username and password combination
On a successful account login, return a 200 status with the user object in the body
On any error, trigger your error handler with the message “Invalid Login”

#### Testing

Test your routes using httpie from the command line or an application such as Postman or Insomnia. Additionally, you are required to write automated tests as well:

- POST to /signup to create a new user
- POST to /signin to login as a user (use basic auth)
- Need tests for auth middleware and the routes
- Does the middleware function (send it a basic header)
- Do the routes assert the requirements (signup/signin)

<img width="1728" alt="Lab 6" src="https://user-images.githubusercontent.com/91757275/163696827-0de12e70-07af-48c2-a76b-4850fdd190d5.png">