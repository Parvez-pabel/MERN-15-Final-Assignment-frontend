import React, { useState } from "react";

const UserProfileTab = () => {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@banglabazar.com",
    role: "Administrator",
    photo: "https://placehold.co/150x150",
  });

  return (
    <div className="max-w-2xl mx-auto bg-base-100 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-6">My Profile</h2>
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <h3 className="text-2xl font-bold">{profile.name}</h3>
          <p className="text-gray-500">{profile.email}</p>
          <span className="badge badge-primary mt-2">{profile.role}</span>
        </div>
      </div>

      <form className="space-y-4">
        <div className="form-control">
          <label className="label">Full Name</label>
          <input
            type="text"
            defaultValue={profile.name}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">Email Address</label>
          <input
            type="email"
            defaultValue={profile.email}
            disabled
            className="input input-bordered w-full bg-base-200"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfileTab;
