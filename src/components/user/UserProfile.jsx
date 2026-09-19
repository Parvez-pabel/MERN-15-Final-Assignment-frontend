import React from "react";
// পরবর্তীতে Zustand ব্যবহার করতে এটি আনকমেন্ট করবেন:
// import { useUserStore } from "../store/useUserStore";

const UserProfile = () => {
  // Zustand কানেক্ট করার সময় নিচের ডামি user অবজেক্টটি স্টোর থেকে নিয়ে নেবেন
  // const { user } = useUserStore();

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "author",
    status: "verified",
    mobile: "01712345678",
    photo: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div className="max-w-xl mx-auto m-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      {/* হেডার ও প্রোফাইল ছবি */}
      <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-gray-100">
        <img
          src={user.photo || "https://via.placeholder.com/150"}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-50 shadow-sm"
        />
        <div className="text-center sm:text-left space-y-1">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start pt-1">
            <span className="px-3 py-1 text-xs font-semibold uppercase bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
              {user.role}
            </span>
            <span className="px-3 py-1 text-xs font-semibold capitalize bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {/* ইউজার ইনফরমেশন লিস্ট */}
      <div className="mt-6 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 bg-gray-50 rounded-lg">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Full Name
          </span>
          <span className="text-sm font-semibold text-gray-800 mt-1 sm:mt-0">
            {user.name}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 bg-gray-50 rounded-lg">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email Address
          </span>
          <span className="text-sm font-semibold text-gray-800 mt-1 sm:mt-0">
            {user.email}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 bg-gray-50 rounded-lg">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Mobile Number
          </span>
          <span className="text-sm font-semibold text-gray-800 mt-1 sm:mt-0">
            {user.mobile || "Not Provided"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
