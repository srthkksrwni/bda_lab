import { useEffect, useState } from "react";
import "./AdminBlogs.css";

function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Research");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState("");
  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost/bda_lab/backend/blogs";
  const IMAGE_URL = "http://localhost/bda_lab/backend/";

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_URL}/list.php`);
      const data = await response.json();

      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const resetForm = () => {
    setTitle("");
    setCategory("Research");
    setDescription("");
    setLink("");
    setImage(null);
    setOldImage("");
    setEditId(null);
  };

  const saveBlog = async () => {
    if (!title || !category || !description) {
      alert("Please fill all fields");
      return;
    }

    if (!editId && !image) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("link", link);

    if (image) {
      formData.append("image", image);
    }

    if (editId) {
      formData.append("id", editId);
      formData.append("oldImage", oldImage);
    }

    const url = editId ? `${API_URL}/update.php` : `${API_URL}/add.php`;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert(editId ? "Blog updated successfully" : "Blog added successfully");
        resetForm();
        fetchBlogs();
      } else {
        alert(data.message || "Operation failed");
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Something went wrong");
    }
  };

  const editBlog = (blog) => {
    setEditId(blog.id);
    setTitle(blog.title);
    setCategory(blog.category);
    setDescription(blog.description);
    setLink(blog.link || "");
    setOldImage(blog.image);
    setImage(null);
  };

  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/delete.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Blog deleted successfully");
        fetchBlogs();
      } else {
        alert("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="admin-blogs-container">
      <h1>Blogs</h1>

      <div className="admin-blogs-form">
        <input
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Research">Research</option>
          <option value="Technology">Technology</option>
          <option value="Healthcare">Healthcare</option>
          <option value="AI">AI</option>
          <option value="News">News</option>
        </select>

        <textarea
          placeholder="Enter blog description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="url"
          placeholder="Enter blog URL (optional)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button onClick={saveBlog}>
          {editId ? "Update Blog" : "+ Add Blog"}
        </button>

        {editId && <button onClick={resetForm}>Cancel</button>}
      </div>

      <table className="admin-blogs-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>URL</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog.id}>
              <td>{index + 1}</td>

              <td>
                {blog.image && (
                  <img
                    src={`${IMAGE_URL}${blog.image}`}
                    alt={blog.title}
                    className="blog-admin-img"
                  />
                )}
              </td>

              <td>{blog.title}</td>
              <td>{blog.category}</td>
              <td>{blog.description}</td>

              <td>
                {blog.link ? (
                  <a href={blog.link} target="_blank" rel="noreferrer">
                    Open
                  </a>
                ) : (
                  "No URL"
                )}
              </td>

              <td>
                <div className="action-buttons">
                  <button className="edit-btn" onClick={() => editBlog(blog)}>
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteBlog(blog.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {blogs.length === 0 && (
            <tr>
              <td colSpan="7" className="no-data">
                No blogs found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBlogs;