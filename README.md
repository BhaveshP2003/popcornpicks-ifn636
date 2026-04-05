🎬 PopcornPicks – Movie Review Platform

IFN636 Assessment 1.2 – Full Stack CRUD Application with DevOps

⸻

📌 Project Overview

PopcornPicks is a full-stack movie review platform that allows users to:
	•	Browse movies
	•	Add reviews
	•	Manage reviews (CRUD operations)
	•	Authenticate users securely

This project demonstrates software design, backend development, frontend integration, testing, and CI/CD deployment using AWS EC2.

⸻

🏗️ Tech Stack

🔹 Frontend
	•	React.js
	•	Axios
	•	Tailwind CSS

🔹 Backend
	•	Node.js
	•	Express.js
	•	MongoDB Atlas
	•	JWT Authentication

🔹 DevOps & Deployment
	•	AWS EC2 (Ubuntu)
	•	GitHub Actions (CI/CD)
	•	PM2 (Process Manager)
	•	Nginx (Reverse Proxy)

⸻

⚙️ Features Implemented

✅ Authentication
	•	User Signup & Login
	•	JWT-based authentication

✅ Movie Reviews (CRUD)
	•	Create Review
	•	View Reviews
	•	Update Review
	•	Delete Review

✅ Backend Testing
	•	Mocha & Chai used
	•	Automated test cases for controllers
	•	Example:
	•	Create review test
	•	Error handling test

⸻

🧪 Testing

Backend testing is implemented using Mocha.

Run tests:

cd backend
npm test

✔ Test Results:
	•	All backend test cases passed successfully

⸻

🔁 CI/CD Pipeline (GitHub Actions)

CI pipeline automatically runs on:
	•	Push to main branch
	•	Pull requests

🔹 Pipeline Steps
	1.	Install backend dependencies
	2.	Install frontend dependencies
	3.	Run backend tests
	4.	Build frontend
	5.	Complete CI job

⸻

🚀 Deployment (AWS EC2)

🔹 Backend Deployment using PM2

cd backend
pm2 start server.js --name backend
pm2 status

✔ Backend runs continuously even after logout

⸻

🔹 Frontend Deployment

cd frontend
npm install
npm run build
pm2 serve build 3000 --name frontend --spa

✔ React app served on port 3000

⸻

🔹 Save PM2 Processes

pm2 save


⸻

🌐 Nginx Configuration

Nginx is used as a reverse proxy.

🔹 Check configuration:

sudo nginx -t

🔹 Restart Nginx:

sudo systemctl restart nginx


⸻

📂 Project Structure

sampleapp_IFQ636/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── test/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── pages/
│   └── build/
│
├── .github/workflows/
│   └── main.yml
│
└── README.md


⸻

📊 Key Achievements
	•	✅ Full CRUD application implemented
	•	✅ Backend testing implemented and passed
	•	✅ CI/CD pipeline configured
	•	✅ Application deployed on AWS EC2
	•	✅ Process management using PM2
	•	✅ Reverse proxy setup using Nginx

⸻

⚠️ Notes
	•	Backend fully aligned with CRUD requirements
	•	Frontend adapted from starter template
	•	Minor UI differences do not affect functionality

⸻

👨‍💻 Author

Bhavesh Parthasarathy
Master of Information Technology
Queensland University of Technology (QUT)

⸻

📌 Conclusion

This project successfully demonstrates:
	•	Software design & development
	•	Testing & validation
	•	CI/CD automation
	•	Cloud deployment practices


