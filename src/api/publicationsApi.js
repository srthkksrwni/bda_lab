import { API_BASE } from "./apiConfig";

export const PUBLICATIONS_API = {
  list: `${API_BASE}/publications/list.php`,
  add: `${API_BASE}/publications/add.php`,
  update: `${API_BASE}/publications/update.php`,
  delete: `${API_BASE}/publications/delete.php`,
  getStats: `${API_BASE}/publications/get_publication_stats.php`,
  getYearlyStats: `${API_BASE}/publications/get_publication_yearly_stats.php`,
  updateStats: `${API_BASE}/publications/update_publication_stats.php`,
  updateYearlyStats: `${API_BASE}/publications/update_publication_yearly_stats.php`,
};
