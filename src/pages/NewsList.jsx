import { useEffect } from "react";
import NewsCard from "../components/common/NewsCard";
import Pagination from "../components/common/Pagination";
import Loader from "../components/skeleton/loader";
import { useAuthStore } from "../store/useAuthStore";



const NewsList = () => {

  const { fetchAllNews, allNews, isNewsLoading, newsPagination } = useAuthStore();

  useEffect(() => {
    fetchAllNews(1, 12);
  }, []);
  const handlePageChange = (newPage) => {
    fetchAllNews(newPage, newsPagination.limit || 12);
  };
  if (isNewsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">All News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allNews && allNews.length > 0 ? (
            allNews.map((item) => (
              <NewsCard key={item._id} item={item} />
            ))
          ) : (
            <p>No news available.</p>
          )}
        </div>
        {newsPagination?.totalPages > 1 && (
          <Pagination
            currentPage={newsPagination.currentPage || 1}
            totalPages={newsPagination.totalPages || 1}
            onPageChange={handlePageChange}
          />
        )}
      </div>


    </>
  );
};

export default NewsList;
