import axios from "axios";

export const api = axios.create({
  baseURL: "https://news-portal-tau-lovat.vercel.app/api/v1",
  timeout: 5000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
