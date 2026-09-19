import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";

const NewsDetails = () => {
  // স্ক্রিনশটের API Response Data
  const news = {
    _id: "6aaae2ed0bb7953419d2bd46",
    title: "Government Announces New Infrastructure Development Plan",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9",
    location: "Dhaka, Bangladesh",
    details:
      "The government today unveiled a comprehensive modern infrastructure project aimed at improving public transportation and urban connectivity across major metropolitan areas over the next five years.",
    createdAt: "2026-09-16T18:41:49.049Z",
    Category: {
      _id: "6aa7db93da79d053f37cef08",
      name: "Bangla Bazar",
    },
    User: {
      name: "parvez 12345678",
      email: "parvez.10ms@gmail.com",
      role: "super admin",
      photo: "https://placehold.net/400x400.png",
    },
  };

  // Date Formatting
  const formattedDate = new Date(news.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Category & Location Badges */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="badge badge-primary gap-1 py-3 px-4 text-sm font-semibold">
          <FaTag className="text-xs" /> {news.Category?.name}
        </span>
        <span className="flex items-center gap-1 text-sm text-gray-500 font-medium">
          <FaMapMarkerAlt className="text-red-500" /> {news.location}
        </span>
      </div>

      {/* Main News Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-base-content leading-tight mb-6">
        {news.title}
      </h1>

      {/* Author & Publish Date Info Bar */}
      <div className="flex items-center justify-between border-y border-base-300 py-3 mb-6">
        <div className="flex items-center gap-3">
          <img
            src={news.User?.photo}
            alt={news.User?.name}
            className="w-10 h-10 rounded-full object-cover border border-base-300"
          />
          <div>
            <h4 className="font-semibold text-sm capitalize text-base-content">
              {news.User?.name}
            </h4>
            <span className="text-xs text-primary font-medium capitalize">
              {news.User?.role}
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
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* News Details Content */}
      <div className="prose max-w-none text-base-content/90 text-lg leading-relaxed">
        <p>{news.details}</p>
      </div>
    </div>
  );
};

export default NewsDetails;
