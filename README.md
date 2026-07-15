# Task Management Frontend

A modern and responsive Task Management frontend built with React and integrated with a Spring Boot REST API.

This project demonstrates a complete frontend-to-backend integration where users can create, view, update, filter, complete, and delete tasks.

## Features

- Create new tasks
- View all tasks
- Edit existing tasks
- Delete tasks with confirmation
- Mark tasks as completed or pending
- Filter tasks by status
- Task statistics dashboard
- Loading, empty, and error states
- Responsive dark-themed UI
- REST API integration with Spring Boot
- Persistent data storage using MySQL

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- JavaScript

### Backend

- Java
- Spring Boot
- Spring Data JPA
- MySQL
- REST API

## Project Architecture

text
React Frontend
      |
      | HTTP / REST API
      v
Spring Boot Backend
      |
      | Spring Data JPA
      v
MySQL Database


## Project Structure

text
src/
├── api/
│   └── axios.js
├── components/
│   ├── DeleteConfirmModal.jsx
│   ├── EditTaskForm.jsx
│   ├── EmptyState.jsx
│   ├── ErrorMessage.jsx
│   ├── LoadingState.jsx
│   ├── Navbar.jsx
│   ├── TaskFilter.jsx
│   ├── TaskForm.jsx
│   └── TaskStats.jsx
├── pages/
│   └── Dashboard.jsx
├── routes/
│   └── AppRoutes.jsx
├── services/
│   └── taskService.js
├── App.jsx
├── index.css
└── main.jsx


## Getting Started

### 1. Clone the frontend repository

bash
git clone https://github.com/Harshaditya1/task-management-frontend.git


### 2. Navigate to the project

bash
cd task-management-frontend


### 3. Install dependencies

bash
npm install


### 4. Start the development server

bash
npm run dev


The frontend will run on:

text
http://localhost:5173


Make sure the Spring Boot backend is also running before using the application.

## Backend Repository

The Spring Boot backend for this project is available in the separate `task-management-backend` repository.

## API Integration

The frontend communicates with the backend using REST APIs through Axios.

Main operations include:

- `GET` — Fetch all tasks
- `POST` — Create a task
- `PUT` — Update a task
- `DELETE` — Delete a task

## Learning Outcomes

Through this project, I learned how to:

- Connect a React frontend with a Spring Boot backend
- Consume REST APIs using Axios
- Perform CRUD operations across the full application stack
- Connect Spring Boot with a MySQL database
- Manage frontend state using React hooks
- Handle API loading and error states
- Configure CORS for frontend-backend communication
- Organize a full-stack application into separate frontend and backend projects

## Author

Harsh Aditya

B.Tech Computer Science & Engineering  
KIET Group of Institutions, Ghaziabad