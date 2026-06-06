
<img width="1600" height="207" alt="github-info-pice" src="https://github.com/user-attachments/assets/bb103888-b910-4f31-aacc-a8430f3e7dd6" />
<img width="1888" height="968" alt="Screenshot 2026-06-06 120928" src="https://github.com/user-attachments/assets/6f45b8ea-6d9b-4091-af95-37d982b87101" />
<img width="1915" height="977" alt="Screenshot 2026-06-06 120953" src="https://github.com/user-attachments/assets/8d460e8a-0704-44ba-b52e-69e0f039bf3e" />




# GitHub Profile Analyzer API

## Overview

GitHub Profile Analyzer API is a Node.js and Express.js backend application that analyzes public GitHub profiles using the GitHub REST API and stores useful insights in a MySQL database.

The application fetches profile information, repository statistics, stars received, most used programming language, account age, and calculates a custom profile score. All analyzed profiles are stored in MySQL for future retrieval.

---

## Features

* Analyze GitHub profiles by username
* Store profile insights in MySQL
* Fetch all analyzed profiles
* Fetch a specific analyzed profile
* Automatically fetch and cache profiles not already stored
* Calculate profile score
* Calculate account age
* Find most used language
* Calculate total stars received
* Store analyzed timestamp
* RESTful API architecture

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* Axios
* GitHub REST API
* Railway (Deployment)

---

## Live Deployment

Base URL:

https://github-profile-analyzer-api-production-aa44.up.railway.app

Health Check:

https://github-profile-analyzer-api-production-aa44.up.railway.app

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Sandeepgudme/github-profile-analyzer-api.git
cd github-profile-analyzer-api
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=github_analyzer
```

### Create Database

Run the SQL schema located in:

```text
database/schema.sql
```

### Start Server

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

---

## API Endpoints

### Analyze GitHub Profile

Fetches data from GitHub, calculates insights, stores the profile in MySQL, and returns the result.

```http
GET /api/analyze/:username
```

Example:

```text
https://github-profile-analyzer-api-production-aa44.up.railway.app/api/analyze/octocat
```

---

### Get All Stored Profiles

Returns all profiles stored in MySQL.

```http
GET /api/profiles
```

Example:

```text
https://github-profile-analyzer-api-production-aa44.up.railway.app/api/profiles
```

---

### Get Single Profile

Returns a profile by username.

If the profile is not already stored in MySQL, the API automatically fetches it from GitHub, stores it in MySQL, and returns the result.

```http
GET /api/profiles/:username
```

Examples:

```text
https://github-profile-analyzer-api-production-aa44.up.railway.app/api/profiles/torvalds

https://github-profile-analyzer-api-production-aa44.up.railway.app/api/profiles/octocat

https://github-profile-analyzer-api-production-aa44.up.railway.app/api/profiles/gaearon

https://github-profile-analyzer-api-production-aa44.up.railway.app/api/profiles/Sandeepgudme
```

---

## Database Storage Verification

The API stores analyzed profiles in MySQL.

To verify database storage:

### Step 1

Open:

```text
https://github-profile-analyzer-api-production-aa44.up.railway.app/api/profiles/torvalds
```

This will fetch the profile from GitHub (if not already stored), save it in MySQL, and return the data.

### Step 2

Open:

```text
https://github-profile-analyzer-api-production-aa44.up.railway.app/api/profiles
```

You will now see the stored profile in the list of analyzed users.

This demonstrates that profile information is being persisted in the MySQL database.

---

## Database Schema

Table: `github_profiles`

```sql
CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    bio TEXT,
    public_repos INT,
    followers INT,
    following INT,
    total_stars INT,
    most_used_language VARCHAR(100),
    profile_score INT,
    account_age INT,
    github_url VARCHAR(255),
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Sample Response

```json
{
  "id": 1,
  "username": "Sandeepgudme",
  "name": "Sandeep Gudme",
  "bio": "IIIT kottayam'24",
  "public_repos": 17,
  "followers": 1,
  "following": 4,
  "total_stars": 0,
  "most_used_language": "JavaScript",
  "profile_score": 37,
  "account_age": 5,
  "github_url": "https://github.com/Sandeepgudme",
  "analyzed_at": "2026-06-05T21:36:16.000Z"
}
```

---

## Project Structure

```text
github-profile-analyzer-api/
│
├── config/
├── controllers/
├── database/
├── models/
├── routes/
├── services/
├── postman/
├── app.js
├── package.json
└── README.md
```

---

## Author

Sandeep Gudme

GitHub:
https://github.com/Sandeepgudme
