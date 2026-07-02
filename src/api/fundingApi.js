import { API_BASE } from "./apiConfig";

export const FUNDING_API = {
  list: `${API_BASE}/funding/list.php`,
  add: `${API_BASE}/funding/add.php`,
  update: `${API_BASE}/funding/update.php`,
  delete: `${API_BASE}/funding/delete.php`,
};
