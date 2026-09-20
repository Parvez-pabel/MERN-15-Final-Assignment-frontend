import React from "react";
import { FaShieldAlt, FaTrash } from "react-icons/fa";

const UserListTab = () => {
  // Dummy data (আপানার Zustand store থেকে ফেচ করতে পারেন)
  const users = [
    {
      _id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      status: "active",
    },
    {
      _id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "reporter",
      status: "active",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">User Management</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td className="font-semibold">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span
                    className={`badge badge-sm ${
                      user.role === "admin" ?
                        "badge-primary"
                      : "badge-secondary"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className="badge badge-success badge-sm">
                    {user.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs text-error">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListTab;
