# GitHub Profile Analyzer API

## Overview

A Node.js and Express.js backend application that analyzes GitHub user profiles using the GitHub Public API and stores insights in a MySQL database.

## Features

* Analyze GitHub profiles by username
* Store profile insights in MySQL
* Fetch all analyzed profiles
* Fetch a specific analyzed profile
* Calculate profile score
* Calculate account age
* Find most used language
* Calculate total stars received

## Tech Stack

* Node.js
* Express.js
* MySQL
* Axios
* GitHub API

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Configure .env

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=github_analyzer
```

4. Run MySQL schema

```sql
database/schema.sql
```

5. Start server

```bash
npm run dev
```

## API Endpoints

### Analyze Profile

POST /api/analyze/:username

### Get All Profiles

GET /api/profiles

### Get Single Profile

GET /api/profiles/:username

## Database

Table: github_profiles

## Author

Sandeep Gudme
