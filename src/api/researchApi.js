import { API_BASE } from "./apiConfig";

export const RESEARCH_API = {
  list: `${API_BASE}/research_updates/list.php`,
  add: `${API_BASE}/research_updates/add.php`,
  update: `${API_BASE}/research_updates/update.php`,
  delete: `${API_BASE}/research_updates/delete.php`,
};
