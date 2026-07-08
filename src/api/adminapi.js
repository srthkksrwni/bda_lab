import { API_BASE } from "./apiConfig";

export const ADMIN_API = {
  login: `${API_BASE}/auth/login.php`,
  logout: `${API_BASE}/auth/logout.php`,
  checkSession: `${API_BASE}/auth/check_auth.php`,
  verifyLoginOtp: `${API_BASE}/auth/verify_login_otp.php`,
};