import { create } from "zustand";
import { api } from "../api/axiosInstance";

export const useCategoryStore = create((set) => ({
  categories: [],
  isCategoryLoading: false,
  categoryError: null,

  fetchAllCategories: async () => {
    set({ isCategoryLoading: true, categoryError: null });
    try {
      const response = await api.get("/news/all-category");

      const responseData = response.data?.data;

      // Response Array/Object Check
      const categoryList =
        Array.isArray(responseData) ? responseData : responseData?.data || [];

      set({
        categories: categoryList,
        isCategoryLoading: false,
      });
    } catch (error) {
      console.error("Error fetching categories:", error);
      set({
        categoryError:
          error.response?.data?.message || "Failed to fetch categories.",
        isCategoryLoading: false,
      });
    }
  },
}));
