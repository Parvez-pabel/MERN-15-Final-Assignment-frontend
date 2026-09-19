import React from "react";
import NewsCard from "../components/common/NewsCard";
import Pagination from "../components/common/Pagination";

const NewsList = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        {/* Search Input Bar */}
        <div className="flex justify-center items-center my-6">
          <div className="w-full max-w-md">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search news..."
                className="grow "
              />
            </label>
          </div>
        </div>
      </div>
      <NewsCard />
      <Pagination />
    </>
  );
};

export default NewsList;
