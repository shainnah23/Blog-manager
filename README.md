# Blog Manager

A simple blog manager app using a mock REST API and vanilla JavaScript.

## Setup

1. **Install dependencies**  
   ```bash
   npm install -g json-server@0.17.4 live-server
   ```

2. **Start the backend**  
   ```bash
   json-server db.json
   ```

3. **Start the frontend**  
   ```bash
   live-server
   ```
   Or simply open `index.html` in your browser.

## Project Structure

```
Blog-manager/
├── db.json
├── index.html
├── css/
│   └── styles.css
├── src/
│   └── index.js
└── README.md
```

## Features

- View all blog post titles
- Click a post to view its details
- Add a new post (updates the DOM only, not persistent)

## API Endpoints

- `GET /posts` - Get all posts
- `GET /posts/:id` - Get a single post
- `POST /posts` - Create a new post
- `PATCH /posts/:id` - Update a post
- `DELETE /posts/:id` - Delete a post

## Advanced

You can extend this app to support editing and deleting posts, and persist changes to the backend using the provided endpoints.