import React, { useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useNewsStore } from "../../store/useNewsStore";

const NewsListTab = ({ setActiveTab }) => {
  const { allNews, fetchAllNews, isNewsLoading } = useNewsStore();

  useEffect(() => {
    fetchAllNews(1, 10);
  }, [fetchAllNews]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">All Published News</h2>
        <button
          onClick={() => setActiveTab("uploadNews")}
          className="btn btn-primary btn-sm gap-2"
        >
          <FaPlus /> Add New Article
        </button>
      </div>

      {isNewsLoading ?
        <div className="text-center py-10">Loading News...</div>
      : <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allNews && allNews.length > 0 ?
                allNews.map((news, index) => (
                  <tr key={news._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        src={news.image || "https://placehold.co/100x100"}
                        alt={news.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                    </td>
                    <td className="font-medium max-w-xs truncate">
                      {news.title}
                    </td>
                    <td>{news.Category?.name || "N/A"}</td>
                    <td>
                      {new Date(news.createdAt).toLocaleDateString("en-US")}
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <button className="btn btn-ghost btn-xs text-info">
                          <FaEdit size={16} />
                        </button>
                        <button className="btn btn-ghost btn-xs text-error">
                          <FaTrash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              : <tr>
                  <td colSpan="6" className="text-center py-6">
                    No news articles found.
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default NewsListTab;
