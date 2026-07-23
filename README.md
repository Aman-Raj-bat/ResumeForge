# ResumeForge

ResumeForge is a modern, full-stack resume builder designed to help users craft professional, ATS-friendly resumes in minutes. Built with React and Node.js, it leverages Gemini AI to assist users in writing compelling bullet points and professional summaries, seamlessly generating a pristine A4 PDF export.

## Features

- **Real-Time Editor**: Instantly preview your resume changes as you type.
- **Professional Templates**: Switch between meticulously crafted templates (Modern, Minimal, Professional) on the fly.
- **Gemini AI Integration**: Overcome writer's block with AI-powered suggestions for your summary, skills, and experience bullet points.
- **Flawless PDF Export**: Render and download 100% private, pixel-perfect A4 PDF files directly from the browser.
- **Secure Authentication**: JWT-based user authentication ensures your data remains completely private.
- **Responsive Dashboard**: Access and manage multiple resumes on any device.

## Tech Stack

### Frontend
- **React (Vite)**
- **Tailwind CSS**
- **Framer Motion** (Animations & Transitions)
- **Zustand** (State Management)
- **React Hook Form** (Form Validation)
- **Axios** (API Client)
- **html2pdf.js** (Client-side PDF Generation)

### Backend
- **Node.js & Express.js**
- **MongoDB & Mongoose**
- **Google Generative AI (Gemini 1.5 Flash)**
- **JSON Web Tokens (JWT)** (Authentication)
- **Helmet & Morgan** (Security & Logging)

## Project Structure

```
ResumeForge/
├── client/                 # React frontend application
│   ├── public/             # Static assets
│   └── src/                # React source code
│       ├── components/     # Reusable UI components & templates
│       ├── pages/          # Full page views (Home, Dashboard, Editor)
│       ├── services/       # API integration
│       └── store/          # Zustand global state
└── server/                 # Express backend application
    └── src/
        ├── controllers/    # Route handlers
        ├── middlewares/    # Custom Express middlewares
        ├── models/         # Mongoose schemas
        ├── routes/         # Express routing definitions
        └── services/       # Core business logic (AI, DB interactions)
```

## Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local instance or MongoDB Atlas)
- Google Gemini API Key

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aman-Raj-bat/ResumeForge.git
   cd ResumeForge
   ```

2. **Install Server Dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install Client Dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Variables:**
   - Copy `.env.example` to `.env` in the root (or `server/.env`).
   - Fill in your MongoDB connection string, JWT secret, and Gemini API key.

## Running Locally

To run the application locally in development mode:

1. **Start the backend server:**
   ```bash
   cd server
   npm run dev
   ```
   The backend will start on `http://localhost:5000` (or the port defined in your `.env`).

2. **Start the frontend application:**
   ```bash
   cd client
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`.

## Deployment

This project is structured to be easily deployed to modern cloud providers.

- **Frontend (Vercel, Netlify):** 
  Deploy the `client` directory. Make sure to set the `VITE_API_URL` environment variable to point to your live backend url.
  
- **Backend (Render, Heroku):**
  Deploy the `server` directory. Ensure all backend environment variables (`MONGODB_URI`, `JWT_SECRET`, `GEMINI_API_KEY`, etc.) are configured in your provider's dashboard.

## Future Improvements

- Custom Section Ordering
- Custom Theme Colors and Fonts
- Cover Letter Generation
- Detailed Analytics

## License

This project is licensed under the MIT License.
