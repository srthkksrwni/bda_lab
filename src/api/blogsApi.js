import { API_BASE } from "./apiConfig";

export const BLOGS_API = {
  list: `${API_BASE}/blogs/list.php`,
  add: `${API_BASE}/blogs/add.php`,
  update: `${API_BASE}/blogs/update.php`,
  delete: `${API_BASE}/blogs/delete.php`,
};
