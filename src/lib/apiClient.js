import { logger } from "../utils/logger";
import { useAuthStore } from "../store/authStore";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

let isRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = (token) => {
  refreshSubscribers.map((callback) => callback(token));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};

const request = async (endpoint, options = {}) => {
  try {
    const { accessToken } = useAuthStore.getState();

    const headers = {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...options.headers,
    };

    if (!(options.body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const result = await response.json();

    // Handle 401 + INVALID_TOKEN for refresh
    if (
      response.status === 401 && 
      result.errorCode === "INVALID_TOKEN" && 
      !options._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((token) => {
            options._retry = true;
            options.headers = { ...options.headers, Authorization: `Bearer ${token}` };
            resolve(request(endpoint, options));
          });
        });
      }

      isRefreshing = true;

      try {
        const refreshResponse = await fetch(`${API_BASE_URL}/auth/refresh`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        const refreshResult = await refreshResponse.json();

        if (refreshResult.success && refreshResult.data?.accessToken) {
          const newToken = refreshResult.data.accessToken;
          const { setAuth, user } = useAuthStore.getState();
          setAuth(user, newToken);
          isRefreshing = false;
          onTokenRefreshed(newToken);

          options._retry = true;
          return request(endpoint, options);
        } else {
          throw new Error("Refresh failed");
        }
      } catch (refreshError) {
        isRefreshing = false;
        useAuthStore.getState().logout();
        throw refreshError;
      }
    }

    if (!response.ok || result.success === false) {
      const error = new Error(result.message || "Something went wrong");
      error.code = result.errorCode || "UNKNOWN_ERROR";
      error.validationErrors = result.errors || null;
      error.status = response.status;
      throw error;
    }

    // Defensive check: if result.data is missing but result has accessToken, 
    // it might be a flat response. Use result itself as data in that case.
    const responseData = result.data || (result.accessToken ? result : null);

    logger.info(`API Request: ${endpoint}`, { responseData });

    return {
      data: responseData,
      meta: result.meta || null,
      message: result.message,
    };
  } catch (err) {
    if (!(err instanceof Error)) {
      const networkError = new Error("Network error. Please try again.");
      networkError.code = "NETWORK_ERROR";
      networkError.status = 500;
      throw networkError;
    }
    throw err;
  }
};

export default {
  get: (endpoint) => request(endpoint, { method: "GET" }),
  post: (endpoint, body) =>
    request(endpoint, {
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  put: (endpoint, body) =>
    request(endpoint, {
      method: "PUT",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  patch: (endpoint, body) =>
    request(endpoint, {
      method: "PATCH",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  delete: (endpoint) => request(endpoint, { method: "DELETE" }),
};
