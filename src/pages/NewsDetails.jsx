import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";

const NewsDetails = () => {
  const { isNewsLoading, NewsDetails, newsData } = useAuthStore()
  useEffect(() => {
    NewsDetails(id);
  }, []);

  if (isNewsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">8      <Loader />    </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Category & Location Badges */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="badge badge-primary gap-1 py-3 px-4 text-sm font-semibold">
          <FaTag className="text-xs" /> {newsData.Category?.name}
        </span>
        <span className="flex items-center gap-1 text-sm text-gray-500 font-medium">
          <FaMapMarkerAlt className="text-red-500" /> {newsData.location}
        </span>
      </div>

      {/* Main News Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-base-content leading-tight mb-6">
        {newsData.title}
      </h1>

      {/* Author & Publish Date Info Bar */}
      <div className="flex items-center justify-between border-y border-base-300 py-3 mb-6">
        <div className="flex items-center gap-3">
          <img
            src={newsData.User?.photo}
            alt={newsData.User?.name}
            className="w-10 h-10 rounded-full object-cover border border-base-300"
          />
          <div>
            <h4 className="font-semibold text-sm capitalize text-base-content">
              {newsData.User?.name}
            </h4>
            <span className="text-xs text-primary font-medium capitalize">
              {newsData.User?.role}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
          <FaCalendarAlt />
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* Main Cover Image */}
      <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden mb-8 shadow-md">
        <img
          src={newsData.image}
          alt={newsData.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* News Details Content */}
      <div className="prose max-w-none text-base-content/90 text-lg leading-relaxed">
        <p>{newsData.details}</p>
      </div>
    </div>
  );
};

export default NewsDetails;
