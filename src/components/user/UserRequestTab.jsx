import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const UserRequestTab = () => {
  const requests = [
    {
      _id: "101",
      name: "Rahim Ahmed",
      email: "rahim@news.com",
      requestedRole: "reporter",
      date: "2026-09-19",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Pending Role Requests</h2>
      {requests.length > 0 ?
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Applicant Name</th>
                <th>Email</th>
                <th>Requested Role</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req._id}>
                  <td className="font-semibold">{req.name}</td>
                  <td>{req.email}</td>
                  <td>
                    <span className="badge badge-warning capitalize">
                      {req.requestedRole}
                    </span>
                  </td>
                  <td>{req.date}</td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn btn-success btn-xs text-white gap-1">
                        <FaCheck /> Approve
                      </button>
                      <button className="btn btn-error btn-xs text-white gap-1">
                        <FaTimes /> Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      : <p className="text-gray-500 text-center py-8">
          No pending requests found.
        </p>
      }
    </div>
  );
};

export default UserRequestTab;
