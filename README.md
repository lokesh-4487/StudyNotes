

# StudyNotes – Full-Stack MERN Notes Application

## 1. Project Overview

StudyNotes is a full-stack web application developed to help users create, manage, search, and organize their personal notes in one place. The application provides a simple and user-friendly interface where users can write notes, update existing information, remove notes they no longer need, and quickly find notes using the search feature.

The project was developed as a practical learning project using the MERN stack. It demonstrates how a frontend application communicates with a backend server, how REST APIs are used to exchange data, and how information can be stored permanently in a database.

StudyNotes is designed with a clean interface and straightforward functionality. It can be useful for students who want to keep study notes, programming concepts, assignment details, or other important information together.

## 2. Project Objectives

The main objective of StudyNotes is to build a functional full-stack application while learning the fundamentals of modern web development.

The project aims to:

- Develop an interactive frontend using React.
- Create a backend server using Node.js and Express.js.
- Store and manage notes using MongoDB.
- Implement Create, Read, Update, and Delete (CRUD) operations.
- Connect the frontend and backend through REST API endpoints.
- Add a search feature to help users find notes by title or content.
- Understand how data is saved and retrieved from a database.
- Practice organizing a project into separate frontend and backend folders.

## 3. Features

### Create Notes
Users can create a new note by entering a title and content. The application sends the note information to the backend, where it is saved in MongoDB.

### View Notes
The application retrieves saved notes from the backend and displays them in the frontend. Users can view their notes without manually accessing the database.

### Edit Notes
Users can update the title or content of an existing note. The updated information is sent to the backend and saved in the database.

### Delete Notes
Users can delete notes that are no longer required. The selected note is removed from the database and the updated list is displayed in the application.

### Search Notes
The search feature allows users to find notes by entering a word or phrase. The application filters notes based on their title and content.

### Database Persistence
Notes are stored in MongoDB, so saved information remains available after the application is refreshed or restarted, provided the database connection is working.

## 4. Technology Stack

### Frontend
- **React.js:** Builds the interactive user interface.
- **Vite:** Provides the frontend development environment.
- **JavaScript:** Handles application logic and user interactions.
- **CSS:** Styles the application and its components.

### Backend
- **Node.js:** Runs JavaScript on the server.
- **Express.js:** Creates the backend server and API routes.
- **Mongoose:** Connects the backend with MongoDB and manages note data.

### Database and Development Tools
- **MongoDB Atlas:** Stores the application’s notes in the cloud.
- **Visual Studio Code:** Used for writing and managing project code.
- **Git and GitHub:** Can be used for source-code version control and project sharing.
- **npm:** Manages project dependencies and scripts.

## 5. Application Architecture

StudyNotes follows a frontend-backend-database architecture.

1. The user interacts with the React frontend.
2. The frontend sends HTTP requests to the Express backend.
3. The backend processes the request and communicates with MongoDB through Mongoose.
4. MongoDB stores or returns the requested note information.
5. The backend sends a response to the frontend.
6. React updates the displayed information based on the response.

This structure separates the user interface, server-side logic, and database operations, making the project easier to understand and maintain.

## 6. Project Folder Structure

The project is organized into two main folders:

```text
StudyNotes/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── models/
│   │   └── Note.js
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

The `client` folder contains the React frontend, while the `server` folder contains the Express backend and database-related code. The `Note.js` model defines the structure of a note stored in MongoDB.

## 7. Installation and Setup

### Prerequisites

Before running the project, install:

- Node.js and npm
- Visual Studio Code
- A MongoDB Atlas account
- A web browser

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd StudyNotes
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the actual repository URL.

### Step 2: Install Frontend Dependencies

Open a terminal in the project folder and run:

```bash
cd client
npm install
```

### Step 3: Install Backend Dependencies

Open another terminal and run:

```bash
cd server
npm install
```

### Step 4: Configure the Environment

Create a `.env` file inside the `server` folder. Add your MongoDB connection string and the server port:

```env
MONGODB_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
PORT=5000
```

Replace the placeholder with your own MongoDB Atlas connection string. Do not upload the `.env` file or share database credentials publicly.

### Step 5: Start the Backend

From the `server` folder, run:

```bash
npm run dev
```

The backend should connect to MongoDB and start on port `5000`.

### Step 6: Start the Frontend

In a separate terminal, open the `client` folder and run:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser to use the application.

## 8. API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/notes` | Retrieve notes |
| POST | `/api/notes` | Create a note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |
| GET | `/api/health` | Check backend health |

The `:id` parameter identifies the note that needs to be updated or deleted.

## 9. Learning Outcomes

Developing StudyNotes helped me understand the basic workflow of full-stack web development. I gained practical experience in building React components, managing application state, handling user input, and connecting a frontend to a backend API.

I also learned how to create Express routes, use Mongoose models, connect an application to MongoDB Atlas, and perform CRUD operations. The project helped me understand the importance of environment variables, project folder organization, and testing application functionality.

## 10. Future Improvements

StudyNotes can be improved further by adding user authentication, separate note collections for each user, categories or tags, note pinning, sorting options, and a responsive mobile layout. Additional improvements could include rich-text editing, dark mode, and deployment so the application can be accessed online.

## 11. Conclusion

StudyNotes is a practical full-stack web development project that demonstrates the use of React, Node.js, Express.js, and MongoDB in a single application. It provides essential note-management features and shows how a frontend, backend, and database work together.

The project serves as a foundation for learning more advanced MERN stack concepts and developing larger web applications. It also provides an opportunity to practice problem-solving, debugging, API integration, and database management through a working application.

<img width="1893" height="891" alt="Screenshot 2026-11-22 213829" src="https://github.com/user-attachments/assets/0c09e8f7-a6d3-4ea6-ab2b-803e09f2e77f" />

<img width="1511" height="778" alt="Screenshot 2026-11-22 213849" src="https://github.com/user-attachments/assets/5acb2890-f46e-4c7a-a2c7-b5b02af7895c" />

<img width="1902" height="943" alt="Screenshot 2026-11-22 213750" src="https://github.com/user-attachments/assets/1f6cd8c2-8c08-44c7-a977-bdb50cdada79" />
