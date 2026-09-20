import { useEffect, useState } from "react";
import NewsCard from "../components/News/NewsCard";
import Pagination from "../components/common/Pagination";
import Loader from "../components/skeleton/loader";
import { useNewsStore } from "../store/useNewsStore";
import { useCategoryStore } from "./../store/useCategoryStore";
import { FaSearch } from "react-icons/fa";

const NewsList = () => {
  const { fetchAllNews, allNews, isNewsLoading, newsPagination } =
    useNewsStore();

  const { fetchAllCategories, categories } = useCategoryStore();

  //filter and search states

  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (fetchAllCategories) {
      fetchAllCategories();
    }
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchAllNews(currentPage, 12, search, categoryId);
    }, 300);
    return () => {
      clearTimeout(delayDebounce);
    };
  }, [currentPage, search, categoryId]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };
  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
    setCurrentPage(1);
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">All News</h1>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-base-200 p-4 rounded-xl shadow-sm">
          {/* Search Field */}
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search news by title or content..."
              value={search}
              onChange={handleSearchChange}
              className="input input-bordered w-full pl-10 focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Category Dropdown */}
          <div className="relative w-full sm:w-1/3">
            <select
              value={categoryId}
              onChange={handleCategoryChange}
              className="select select-bordered w-full capitalize focus:outline-none"
            >
              <option value="">All Categories</option>
              {categories && categories.length > 0 ?
                categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))
              : <option value="" disabled>
                  No categories found
                </option>
              }
            </select>
          </div>
        </div>
        {isNewsLoading ?
          <div className="flex justify-center items-center my-20">
            <Loader />
          </div>
        : <>
            {allNews && allNews.length > 0 ?
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allNews.map((item) => (
                  <NewsCard key={item._id} item={item} />
                ))}
              </div>
            : <div className="text-center py-16 text-gray-500">
                <p className="text-xl font-medium">
                  No news matches your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setCategoryId("");
                    setCurrentPage(1);
                  }}
                  className="btn btn-outline btn-sm mt-4"
                >
                  Reset Filters
                </button>
              </div>
            }
            {newsPagination?.totalPages > 1 && (
              <div className="mt-10 flex justify-center">
                <Pagination
                  currentPage={newsPagination.currentPage || 1}
                  totalPages={newsPagination.totalPages || 1}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        }
      </div>
    </>
  );
};

export default NewsList;
