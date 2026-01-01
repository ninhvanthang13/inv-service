/**
 * Authentication Service
 * Handles secure API calls for authentication
 */

// In development, use proxy (no /api prefix needed if proxy is set)
// In production, use full URL
const API_BASE_URL = process.env.REACT_APP_API_URL || "/api";

/**
 * Secure storage for authentication token
 */
const TOKEN_KEY = "auth_token";
const USER_KEY = "user_data";

/**
 * Get stored authentication token
 */
export const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
};

/**
 * Store authentication token securely
 */
export const setToken = (token) => {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error("Error setting token:", error);
  }
};

/**
 * Remove authentication token
 */
export const removeToken = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error("Error removing token:", error);
  }
};

/**
 * Get stored user data
 */
export const getUser = () => {
  try {
    const userData = localStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error getting user data:", error);
    return null;
  }
};

/**
 * Store user data
 */
export const setUser = (userData) => {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error("Error setting user data:", error);
  }
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
  return !!getToken();
};

/**
 * Login API call
 * @param {string} username - User email/username
 * @param {string} password - User password
 * @returns {Promise<Object>} Response with token and user data
 */
export const login = async (username, password) => {
  try {
    const url = `${API_BASE_URL}/auth/login`;
    console.log("API URL:", url);
    console.log("Full URL:", window.location.origin + url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    console.log("API Response Status:", response.status, response.statusText);

    console.log({
      username,
      password,
    });

    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    let data;

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      throw new Error(text || `Login failed: ${response.statusText}`);
    }

    if (!response.ok) {
      // Handle different error cases
      const errorMessage =
        data.message || data.error || data.msg || `Login failed: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    // Store token and user data if provided
    if (data.token || data.accessToken) {
      setToken(data.token || data.accessToken);
    }
    if (data.user) {
      setUser(data.user);
    } else if (data.data) {
      // Some APIs return data in a 'data' field
      setUser(data.data);
    }

    return {
      success: true,
      token: data.token || data.accessToken,
      user: data.user || data.data || data,
      message: data.message || "Login successful",
    };
  } catch (error) {
    // Handle network errors
    if (error.name === "TypeError" && error.message.includes("fetch")) {
      throw new Error("Network error: Unable to connect to server. Please check your connection.");
    }
    // Re-throw error with message if it's already an Error
    if (error instanceof Error) {
      throw error;
    }
    // Otherwise wrap in Error
    throw new Error(error.message || "Login failed. Please try again.");
  }
};

/**
 * Logout - clear stored authentication data
 */
export const logout = () => {
  removeToken();
};

/**
 * Get authorization header for API requests
 */
export const getAuthHeader = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
