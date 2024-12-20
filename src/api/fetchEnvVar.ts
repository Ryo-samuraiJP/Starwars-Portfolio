import axios from "axios";

const BASE_URL = process.env.VITE_APP_BASE_URL || "http://localhost:3000";

export const fetchEnvVar = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/env`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch environment variables:", error);
    return {};
  }
};