const API_URL = "http://localhost:3000/posts";

// Fetch and display all posts
function displayPosts() {
  fetch(API_URL)
    .then(res => res.json())
    .then(posts => {
      const postList = document.getElementById("post-list");
      postList.innerHTML = "";
      posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "post-list-item";
        postDiv.textContent = post.title;
        postDiv.dataset.id = post.id;
        postDiv.addEventListener("click", () => handlePostClick(post.id));
        postList.appendChild(postDiv);
      });
    });
}

// Fetch and display a single post's details
function handlePostClick(postId) {
  fetch(`${API_URL}/${postId}`)
    .then(res => res.json())
    .then(post => {
      const detail = document.getElementById("post-detail");
      detail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <p><strong>Author:</strong> ${post.author}</p>
      `;
    });
}

// Add new post listener
function addNewPostListener() {
  const form = document.getElementById("new-post-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = form.title.value;
    const content = form.content.value;
    const author = form.author.value;
    const newPost = { title, content, author };

    // For core deliverable, just update DOM (not persistent)
    const postList = document.getElementById("post-list");
    const postDiv = document.createElement("div");
    postDiv.className = "post-list-item";
    postDiv.textContent = title;
    postDiv.addEventListener("click", () => {
      const detail = document.getElementById("post-detail");
      detail.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <p><strong>Author:</strong> ${author}</p>
      `;
    });
    postList.appendChild(postDiv);
    form.reset();
  });
}

// Main function to start the app