# Job Portal App (MERN Stack)

A full-featured job portal application empowering job seekers and employers with seamless job listing, application, and management capabilities. Crafted with reliability and scale in mind using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## 🚀 Features

- **Secure User Authentication:**  
  Robust registration and login for both job seekers and employers using JWT.

- **Dynamic Job Listings:**  
  Browse, search, and filter jobs from a continually updated MongoDB database.

- **Application Management:**  
  Job seekers can easily track their applications.  
  Employers can post jobs and manage all received applicants from one dashboard.

- **Responsive UI:**  
  Modern, device-agnostic experience using React.js and Bootstrap.

- **Image Uploads:**  
  Profile pictures and company logos stored on Cloudinary.

- **Role-based Access:**  
  Tailored interfaces for job seekers and employers to optimize workflow.

## 🛠️ Technologies Used

- **Frontend:** React.js, React Router, Bootstrap  
- **Backend:** Node.js, Express.js, MongoDB (via Mongoose)  
- **Authentication:** JWT, Bcrypt for hashing  
- **Cloud Media:** Cloudinary  
- **Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)  

## 📝 Getting Started

Follow these steps to setup the project locally:

### Prerequisites

- Node.js v22.2.0 or higher
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account for media

### Installation

1. **Clone the repository:**
    ```
    git clone https://github.com/Keshav6125/job-portal
    cd job-portal
    ```

2. **Set up the backend:**
    ```
    cd backend
    npm install
    ```

3. **Set up the frontend:**
    ```
    cd ../frontend
    npm install
    ```

4. **Configuration:**  
   Add a `.env` (or `config.env` inside a `config` folder for backend) file with these variables:
    ```
    PORT=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    CLOUDINARY_CLOUD_NAME=
    FRONTEND_URL=
    DB_URL=
    JWT_SECRET_KEY=
    JWT_EXPIRE=
    COOKIE_EXPIRE=
    ```

5. **Start the backend:**
    ```
    cd backend
    node server.js
    ```

6. **Start the frontend:**
    ```
    cd ../frontend
    npm run dev
    ```

7. **View the app:**  
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🤝 Acknowledgements

Built and maintained by **Aayush Shukla**.

---
