import { API_BASE } from "./apiConfig";

export const EVENTS_API = {
  list: `${API_BASE}/events/list.php`,
  add: `${API_BASE}/events/add.php`,
  update: `${API_BASE}/events/update.php`,
  delete: `${API_BASE}/events/delete.php`,
};
