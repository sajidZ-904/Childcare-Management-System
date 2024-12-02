# Childcare Management System

A comprehensive Childcare Management System designed to streamline operations, improve communication, and enhance the overall experience for childcare centers, parents, and staff. This project consists of a **backend** built with Node.js and Express, and a **frontend** developed using React Native with Expo for a mobile-first experience.

---

## Features

### **Frontend (Mobile App)**

- **User-Friendly Navigation**: 
  - Intuitive bottom tab bar and side menu.
  - Swipe gestures for easy navigation.

- **File Management System**: 
  - Upload files using native mobile features (camera, gallery, documents).
  - Offline access with local caching.

- **Access Control**:
  - Manage user roles and permissions.
  - Receive real-time updates on permission changes.

- **Notification Hub**:
  - Push notifications for critical updates.
  - Manage notification preferences.

- **User Profiles**:
  - View and edit user profiles.
  - Sync user configurations and display booking records interactively.

### **Backend (API Server)**

- **User Authentication**: 
  - Secure login and role-based access control.
  - Token-based authentication using JWT.

- **Document Management**: 
  - Handle file uploads and metadata storage.
  - Store files securely with support for versioning.

- **Real-Time Updates**:
  - Notification services for user actions.
  - Manage and track booking records dynamically.

- **API Integration**:
  - Backend supports integration with Redis for caching.
  - Robust RESTful APIs for data operations.

---

## Technology Stack

### **Frontend**
- Framework: **React Native (Expo)**
- Navigation: **React Navigation**
- State Management: **Zustand**
- HTTP Client: **Axios**
- Push Notifications: **Expo Notifications**

### **Backend**
- Framework: **Node.js** with **Express.js**
- Database: **MongoDB**
- Caching: **Redis**
- Authentication: **JWT**
- File Upload: **Multer**

---

## Installation and Setup

### **Backend**

1. Clone the Repository:
   ```bash
   git clone https://github.com/your-username/childcare-management-system.git
   cd childcare-management-system/backend

2. Install dependencies:
    ```bash
    npm install

3.  Create a .env file in the backend folder and include:
    ```bash
    DATABASE_URL="postgresql://<username>:<password>@localhost:<port>/childcare?schema=public"
    AWS_ACCESS_KEY_ID=aws_access_key_id
    AWS_SECRET_ACCESS_KEY=aws_secret_access_key
    AWS_BUCKET_NAME=aws_bucket_name
    AWS_REGION=aws_region
    REDIS_HOST=redis_host
    REDIS_PORT=redis_port

4. Start the server:
    ```bash
    docker-compose up --build

### Frontend

1. Navigate to frontend:
    ```bash
    cd ../frontend

2. Install dependencies:
    ```bash
    npm install

3. Start the expo server:
    ```bash
    expo start


### License
This project is licensed under the MIT License. See the LICENSE file for details.

