import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const NewsCard = () => {
  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 m-5">
      {/* Image & Category Tag */}
      <figure className="relative h-48 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541872703-74c5e44368f9"
          alt="News Cover"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 badge badge-primary font-semibold text-xs px-3 py-2 shadow-md">
          Bangla Bazar
        </span>
      </figure>

      {/* Card Body */}
      <div className="card-body p-5">
        {/* Meta Info: Location & Date */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span className="flex items-center gap-1 font-medium">
            <FaMapMarkerAlt className="text-red-500" /> Dhaka, Bangladesh
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> Sep 16, 2026
          </span>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg font-bold text-base-content line-clamp-2 leading-snug">
          Government Announces New Infrastructure Development Plan
        </h2>

        {/* Short Description */}
        <p className="text-sm text-gray-600 line-clamp-2 my-2">
          The government today unveiled a comprehensive modern infrastructure
          project aimed at improving public transportation across major
          metropolitan areas.
        </p>

        {/* Footer: Author Info & Action Button */}
        <div className="card-actions justify-between items-center pt-3 border-t border-base-200 mt-2">
          <div className="flex items-center gap-2">
            <img
              src="https://placehold.net/400x400.png"
              alt="Author"
              className="w-8 h-8 rounded-full border border-base-300"
            />
            <span className="text-xs font-semibold text-base-content capitalize">
              parvez
            </span>
          </div>

          <button className="btn btn-sm btn-ghost gap-1 text-primary hover:bg-primary/10">
            Read More <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
