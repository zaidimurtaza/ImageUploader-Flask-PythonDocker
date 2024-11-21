# Flask and React App

This project is a **full-stack web application** using **Flask** for the backend and **React** for the frontend. The app allows users to interact with a backend API through a React-based UI.

## Project Structure

/flask-react-app ├── /backend # Flask backend │ ├── app.py # Flask app │ ├── requirements.txt # Python dependencies │ └── .gitignore ├── /frontend # React frontend │ ├── /public │ ├── /src │ ├── package.json │ └── .gitignore ├── README.md # This file └── .gitignore # Git ignore for both Flask and React

yaml
Copy code

---

## Installation Instructions

### 1. **Clone the Repository**

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/flask-react-app.git
cd flask-react-app
```

2. Set Up the Backend (Flask)
Without Docker:
Navigate to the backend directory:

```bash
Copy code
cd backend
```
Create a virtual environment (optional but recommended):

```bash
python -m venv venv
```
Activate the virtual environment:

Windows:
```bash
venv\Scripts\activate
macOS/Linux:
source venv/bin/activate
```
Install the required Python dependencies:

```bash
pip install -r requirements.txt
```
Run the Flask app:

```bash
python app.py
```
The backend should now be running at http://127.0.0.1:5000/.

With Docker:
Make sure Docker is installed on your machine. If not, follow this guide to install Docker.

Build the Docker image:

```bash
docker build -t flask-react-app-backend .
```
Run the Docker container:

```bash
docker run -p 5000:5000 flask-react-app-backend
```
The Flask app will be running at http://127.0.0.1:5000/ inside the Docker container.

3. Set Up the Frontend (React)
Without Docker:
Navigate to the frontend directory:

```bash
cd frontend
```
Install the required npm dependencies:

```bash
npm install
Run the React app:
```

```bash
npm start
```
The React app should now be running at http://localhost:3000/.

With Docker:
Make sure Docker is installed on your machine. If not, follow this guide to install Docker.

Build the Docker image:

```bash
docker build -t flask-react-app-frontend .
```
Run the Docker container:

```bash
docker run -p 3000:3000 flask-react-app-frontend
```
The React app will be running at http://localhost:3000/ inside the Docker container.

Project Details
Backend: Flask API that handles requests and serves data to the React frontend.
Frontend: A React app that interacts with the Flask API to display data.


## Top 3 Projects


Here are links to my top 3 projects that demonstrate my skills in frontend and backend development:

Project 1: YouTube Clone
Project 2: Image Uploader
Project 3: Web Scraping & Data Visualization

[My Project Links:](https://zaidimurtaza.github.io/React_Portfolio/)
