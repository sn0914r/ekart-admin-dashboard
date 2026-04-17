const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const request = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const result = await response.json();

    if (!response.ok || result.success === false) {
      const error = new Error(result.message || "Something went wrong");

      error.code = result.errorCode || "UNKNOWN_ERROR";
      error.validationErrors = result.errors || null;
      error.status = response.status;

      throw error;
    }

    return {
      data: result.data,
      meta: result.meta || null,
      message: result.message,
    };
  } catch (err) {
    if (!(err instanceof Error)) {
      const networkError = new Error("Network error. Please try again.");
      networkError.code = "NETWORK_ERROR";
      networkError.validationErrors = null;
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
      body: JSON.stringify(body),
    }),
  put: (endpoint, body) =>
    request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    }),
  delete: (endpoint) => request(endpoint, { method: "DELETE" }),
};
