import { useEffect, useState } from "react";
import "./AdminBlogs.css";
import { BLOGS_API } from "../../api/blogsApi";
import { API_BASE } from "../../api/apiConfig";

function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(BLOGS_API.list);
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
    setImage(null);
    setEditId(null);
  };

  const saveBlog = async () => {
    if (!image) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    if (editId) {
      formData.append("id", editId);
    }

    const apiUrl = editId ? BLOGS_API.update : BLOGS_API.add;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert(editId ? "Image updated successfully" : "Image added successfully");
        resetForm();
        fetchBlogs();
      } else {
        alert(data.message || "Operation failed");
      }
    } catch (error) {
      console.error("Error saving image:", error);
      alert("Something went wrong");
    }
  };

  const editBlog = (blog) => {
    setEditId(blog.id);
    setImage(null);
  };

  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      const response = await fetch(BLOGS_API.delete, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Image deleted successfully");
        fetchBlogs();
      } else {
        alert(data.message || "Failed to delete image");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="admin-blogs-container">
      <h1>Blogs</h1>

      <div className="admin-blogs-form">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button onClick={saveBlog}>
          {editId ? "Update Image" : "+ Add Image"}
        </button>

        {editId && <button onClick={resetForm}>Cancel</button>}
      </div>

      <table className="admin-blogs-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog.id}>
              <td>{index + 1}</td>

              <td>
                <img
                  src={`${API_BASE}/${blog.image}`}
                  alt="Blog"
                  className="blog-admin-img"
                />
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
              <td colSpan="3" className="no-data">
                No images found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBlogs;