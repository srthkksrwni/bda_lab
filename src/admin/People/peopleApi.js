import { API_BASE } from "../../api/apiConfig";

const BASE_URL = `${API_BASE}/people`;

export const PEOPLE_API = {
  list: `${BASE_URL}/list.php`,
  add: `${BASE_URL}/add.php`,
  update: `${BASE_URL}/update.php`,
  delete: `${BASE_URL}/delete.php`,
};