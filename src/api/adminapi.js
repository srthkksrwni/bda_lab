import { API_BASE } from "./apiConfig";

export const ADMIN_API = {
  login: `${API_BASE}/auth/login.php`,
  logout: `${API_BASE}/auth/logout.php`,
  checkSession: `${API_BASE}/auth/check_session.php`,
};