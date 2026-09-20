import { create } from "zustand";
import { api } from "../api/axiosInstance";

export const useNewsStore = create((set, get) => ({
  isAuthenticated: false,
  isLoading: false,
  error: null,
  isSuccess: false,
  allNews: [],
  isNewsLoading: false,
  newsPagination: {
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
  },

  fetchAllNews: async (page = 1, limit = 12, search = "", categoryId = "") => {
    set({ isNewsLoading: true, error: null });
    try {
      const response = await api.get(
        `/news/all-News?page=${page}&limit=${limit}&search=${encodeURIComponent(
          search,
        )}&categoryId=${categoryId}`,
      );
      const responseData = response.data?.data;

      if (responseData && responseData.data && responseData.data.length > 0) {
        set({
          allNews: responseData.data || [],
          newsPagination: {
            currentPage: responseData.pagination?.currentPage,
            totalPages: responseData.pagination?.totalPages,
            pageSize: responseData.pagination?.pageSize,
          },
          isNewsLoading: false,
        });
      } else {
        set({
          allNews: [],
          error: "No news data found.",
          isNewsLoading: false,
        });
      }
    } catch (error) {
      set({
        allNews: [],
        error:
          error.response?.data?.message ||
          "Failed to fetch news. Please try again.",
        isNewsLoading: false,
      });
    }
  },
  NewsDetails: async (id) => {
    console.log(id);
    set({ isNewsLoading: true, error: null });

    try {
      const response = await api.get(`/news/all-News/${id}`);
      console.log(response);

      const newsData = response.data?.data;
      console.log(newsData);

      const NewsArr =
        Array.isArray(newsData?.data) ? newsData.data[0] : newsData;
      console.log("Extracted News Item:", NewsArr);

      if (NewsArr && NewsArr._id) {
        set({
          newsDetails: NewsArr,
          isNewsLoading: false,
        });
      } else {
        set({ error: "No news data found.", isNewsLoading: false });
      }
    } catch (error) {
      set({
        error:
          error.response?.data?.message ||
          "Failed to fetch news details. Please try again.",
        isNewsLoading: false,
        newsDetails: null,
      });
    }
  },

 
}));
