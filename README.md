# 🔍 Open Source GitHub Project Explorer

A modern and interactive dashboard to explore trending GitHub repositories using the GitHub REST API. It allows filtering, sorting, visual analytics, bookmarking, and note-taking — all in a sleek interface built with React and Tailwind CSS.

---

##  Features

-  **Search & Filter** repositories by name, language, and tags
-  **Sort** by stars, last updated date, and popularity
-  **Analytics Charts** using Chart.js (Stars, Issues, Forks)
-  **Bookmark** favorite repositories
-  **Take Notes** for each bookmarked repo

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Data**: GitHub REST API
- **Charts**: Chart.js
- **State Management**: useState, useEffect, Context API

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/github-project-explorer.git
cd github-project-explorer

# Install dependencies
npm install

# Start the development server
npm start


## Project Structure
 src
├── components/       # Reusable UI components
├── pages/            # Page-level components
├── utils/            # Helper functions (e.g., API calls)
├── data/             # Local bookmarks and notes
└── App.js            # Main app component

---

Charts and Visuals
We use Chart.js to visualize:

⭐ Stars
🐛 Open Issues
🍴 Forks
📅 Last Commit Dates

---

## Bookmarking & Notes
You can:
Bookmark a repo with a single click
Add short notes to each bookmarked repo
View all bookmarks in a dedicated panel

---

## GitHub API Usage
This project uses the GitHub REST API v3 for fetching:
Repository metadata

---

Acknowledgements
GitHub REST API
Chart.js
Tailwind CSS





 Author
Built with ❤️ by Nagaraj Hegde
