# Pulse Net Job Application System
## Overview
The Pulse Net Job Application Management System is a React-based web application that allows users to view job listings, apply for jobs, view their applications, and manage their profiles. Users can sign up, log in, and edit or delete their applications after submission. The system is built with a dynamic front-end connected to a mock backend using db.json.

## Features
### User Authentication:

Sign up with email, password, full name, and date of birth.
Log in and stay authenticated across sessions.
### Job Listings:

View available internships in various departments (e.g., IT, Marketing, Finance, Legal, etc.).
Apply to jobs directly from the job listings.
### Profile Management:

View user profile (full name, email, date of birth).
See a list of job applications associated with the logged-in user.
### Application Management:

View submitted applications.
Edit applications after submission.
Delete applications from the system.

## Technologies Used
### Frontend:

React.js (functional components, hooks)
React Router (for navigation)
CSS for styling
### Backend:

JSON Server (for mock API and backend)
Local Storage (to store user session data)

## Application Flow
1. Login/Sign Up:

* Users can sign up by providing their full name, email, password, and date of birth.
* Existing users can log in with their credentials.
  2. Job Listings:

* Users can browse through available job listings and apply by filling out an application form.
3. Profile:

* Once logged in, users can view their profile, which includes their full name, email, and date of birth.
* The profile also displays a list of the user's submitted applications.
  
4. Manage Applications:

* Users can edit or delete any of their submitted applications via the "My Applications" page.

 ## Project Structure
``` 
/src
  /components
    ├── ApplicationList.js         # Displays user's job applications, with edit and delete options
    ├── Apply.js                   # Job application form
    ├── ContactUs.js               # Contact page for user inquiries or support
    ├── Department.js              # Department details and job listings per department
    ├── EditApplication.js         # Edit existing job applications
    ├── ForgotPasswordPage.js      # Allows users to reset their password
    ├── Forum.js                   # A discussion board for users to post and read articles
    ├── Home.js                    # Homepage with general information and navigation
    ├── JobListings.js             # Displays available job listings for users to apply
    ├── LoginPage.js               # Login page for user authentication
    ├── Navbar.js                  # Navigation bar for accessing different sections of the app
    ├── Profile.js                 # User profile page displaying account details and navigation to "My Applications"
    ├── ProtectedRoute.js          # Protects certain routes for logged-in users only
    ├── SignupPage.js              # User registration page with fields for name, email, and password
  /css
    ├── department.css             # Styling for the Department component
  /utils
    ├── auth.js                    # Utility functions to check authentication
  ├── App.js                       # Main application setup with routes
  ├── index.js                     # Entry point for the React app


```

## Authentication Flow

* The app uses localStorage to persist user session details.
* During sign-up, user details (full name, email, password, and date of birth) are saved in the browser's local storage.
* When the user logs in, the app checks the credentials against the stored data in local storage.
* After a successful login, the user is directed to the Profile page.
* 
## Available Routes
* /: Home page
* /job-listings: List of available jobs
* /apply: Application form for available jobs
* /profile: User profile page
* /applications: View and manage your job applications
* /applications/edit/:applicationId: Edit your job application
* /login: Log in page
* /signup: Sign up page

## Live Demo
Check out the live version of the app here:  https://group-9-pulse-net.vercel.app/

# Getting Started (Optional for Development)
Steps
1. Clone this repository:
   ``` git clone https://github.com/yourusername/job-application-system.git ```
2. Navigate into the project directory:
   ```cd group-9-pulse-net```
3. Install the dependencies:
 ```npm install```
5. Start the JSON Server (mock backend):
   ```json-server --watch db.json --port 5001```
7. Run the application:
```npm start```
9. Open the application in your browser at http://localhost:3000.
## Usage 
1. Sign up using your email, name, and password.
2. After logging in, explore job listings and apply to available positions.
3. Manage your applications from the "My Applications" section.
4. Edit or delete applications as needed

## License
This project is licensed under the MIT License.
