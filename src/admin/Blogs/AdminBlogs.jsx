import { useEffect, useState } from "react";
import "./AdminBlogs.css";
import { BLOGS_API } from "../../api/blogsApi";
import { API_BASE } from "../../api/apiConfig";

function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Research");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(BLOGS_API.list);
      const text = await response.text();

      if (!text) {
        console.error("Empty response from list.php");
        return;
      }

      const data = JSON.parse(text);

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
    setImage(null);
    setOldImage("");
    setEditId(null);
  };

  const saveBlog = async () => {
    if (!title || !category || !description) {
      alert("Please fill title, category, and description");
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

    if (image) {
      formData.append("image", image);
    }

    if (editId) {
      formData.append("id", editId);
      formData.append("oldImage", oldImage);
    }

    const apiUrl = editId ? BLOGS_API.update : BLOGS_API.add;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      console.log("PHP RESPONSE:", text);

      if (!text) {
        alert("PHP returned empty response. Check add.php/update.php.");
        return;
      }

      const data = JSON.parse(text);

      if (data.success) {
        alert(editId ? "Blog updated successfully" : "Blog added successfully");
        resetForm();
        fetchBlogs();
      } else {
        alert(data.message || "Operation failed");
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      alert(error.message);
    }
  };

  const editBlog = (blog) => {
    setEditId(blog.id);
    setTitle(blog.title);
    setCategory(blog.category);
    setDescription(blog.description);
    setOldImage(blog.image || "");
    setImage(null);
  };

  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      return;
    }

    try {
      const response = await fetch(BLOGS_API.delete, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const text = await response.text();

      if (!text) {
        alert("PHP returned empty response. Check delete.php.");
        return;
      }

      const data = JSON.parse(text);

      if (data.success) {
        alert("Blog deleted successfully");
        fetchBlogs();
      } else {
        alert(data.message || "Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert(error.message);
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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog.id}>
              <td>{index + 1}</td>

              <td>
                {blog.image ? (
                  <img
                    src={`${API_BASE}/${blog.image}`}
                    alt={blog.title}
                    className="blog-admin-img"
                  />
                ) : (
                  "No Image"
                )}
              </td>

              <td>{blog.title}</td>
              <td>{blog.category}</td>
              <td>{blog.description}</td>

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
              <td colSpan="6" className="no-data">
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